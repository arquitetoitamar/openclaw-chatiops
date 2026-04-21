const out = document.getElementById('out');
const statusEl = document.getElementById('status');

function setStatus(msg, isErr=false) {
  statusEl.textContent = msg;
  statusEl.className = 'status' + (isErr ? ' err' : '');
}

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function runInTab(fn) {
  const tab = await getActiveTab();
  if (!tab?.id) throw new Error('Nenhuma aba ativa encontrada.');
  const [{ result }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: fn,
  });
  return result;
}

function extractWaIdFromDom() {
  // WhatsApp Web DOM changes a lot, so we use multiple heuristics.
  // Goal: return something that looks like a JID: "...@c.us" (contact) or "...@g.us" (group).

  const res = { url: location.href, id: null, candidates: [] };

  // Strategy 1: URL hash (sometimes contains something useful)
  if (location.hash && location.hash.length > 1) {
    const h = decodeURIComponent(location.hash.slice(1));
    res.candidates.push({ source: 'url-hash', value: h });
  }

  // Helper: normalize possible values
  function normalize(v) {
    if (!v) return null;
    const s = String(v);
    const cleaned = s.startsWith('true_') ? s.slice(5) : s;
    return cleaned;
  }

  function looksLikeJid(s) {
    if (!s) return false;
    return /@g\.us\b/.test(s) || /@c\.us\b/.test(s) || /@s\.whatsapp\.net\b/.test(s);
  }

  // Strategy 2: scan for elements with data-id containing @g.us/@c.us
  // (Old WA used data-id="true_...@g.us")
  const dataIdEls = Array.from(document.querySelectorAll('[data-id]'));
  for (const el of dataIdEls) {
    const v = el.getAttribute('data-id');
    if (!v) continue;
    const n = normalize(v);
    if (looksLikeJid(n)) {
      res.candidates.push({ source: 'data-id-scan', value: n });
      break;
    }
  }

  // Strategy 3: selected row/listitem heuristics (aria-selected is not always used)
  const selected =
    document.querySelector('[aria-selected="true"][role="row"]') ||
    document.querySelector('[aria-selected="true"][role="listitem"]') ||
    document.querySelector('[aria-selected="true"]') ||
    document.querySelector('[data-testid="cell-frame-container"][aria-selected="true"]');

  if (selected) {
    const direct = normalize(selected.getAttribute?.('data-id'));
    if (direct) res.candidates.push({ source: 'selected-data-id', value: direct });

    const nested = normalize(selected.querySelector?.('[data-id]')?.getAttribute('data-id'));
    if (nested) res.candidates.push({ source: 'selected-nested-data-id', value: nested });
  }

  // Strategy 4: scan header for ANY attribute value that contains a jid-like token
  const header = document.querySelector('header');
  if (header) {
    const headerNodes = Array.from(header.querySelectorAll('*'));
    outer: for (const el of headerNodes) {
      for (const attr of Array.from(el.attributes || [])) {
        const n = normalize(attr.value);
        if (looksLikeJid(n)) {
          res.candidates.push({ source: 'header-attr', value: n });
          break outer;
        }
      }
    }
  }

  // Strategy 5: last resort — take any candidate that looks like a jid
  const jid = res.candidates.map(c => normalize(c.value)).find(looksLikeJid);
  if (jid) res.id = jid;

  return res;
}

document.getElementById('btnGet').addEventListener('click', async () => {
  try {
    setStatus('Lendo WhatsApp Web...');
    const tab = await getActiveTab();
    if (!tab?.url?.startsWith('https://web.whatsapp.com/')) {
      setStatus('Abra o WhatsApp Web (https://web.whatsapp.com) nesta aba.', true);
      return;
    }

    const res = await runInTab(extractWaIdFromDom);
    if (!res?.id) {
      out.value = JSON.stringify(res, null, 2);
      setStatus('Não encontrei o ID. Abra uma conversa (ou clique no grupo) e tente de novo.', true);
      return;
    }
    out.value = res.id;
    setStatus('ID capturado.');
  } catch (e) {
    out.value = '';
    setStatus(String(e?.message || e), true);
  }
});

document.getElementById('btnCopy').addEventListener('click', async () => {
  try {
    const text = out.value.trim();
    if (!text) return setStatus('Nada para copiar.', true);
    await navigator.clipboard.writeText(text);
    setStatus('Copiado para a área de transferência.');
  } catch (e) {
    setStatus('Falha ao copiar (permissão de clipboard). Selecione e copie manualmente.', true);
  }
});
