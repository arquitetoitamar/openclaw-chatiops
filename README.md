# Chatiops × Claude , Skill de WhatsApp

Faça o **Claude** enviar mensagens de WhatsApp sozinho, usando a plataforma [Chatiops](https://chatiops.com). Sem escrever código. Você conversa em português normal e o Claude dispara o WhatsApp.

> *"Manda um zap pro João dizendo que a reunião de amanhã foi remarcada pra quinta às 10h."*
>
> → Claude envia, você não mexe em nada.

---

## ⬇️ Baixar e instalar

1. Baixe o arquivo **[`chatiops.skill`](https://github.com/arquitetoitamar/claude-chatiops/raw/main/chatiops.skill)** clicando aqui.
2. Abra o Claude desktop no seu computador.
3. **Arraste o arquivo `chatiops.skill`** para dentro da janela do Claude.
4. Clique em **Instalar** quando o Claude perguntar.

Pronto. Na primeira mensagem que você mandar, o Claude vai pedir seu **token do Chatiops** (como gerar, abaixo).

---

## 🔑 Gerar seu token no Chatiops (1 minuto)

1. Acesse [chatiops.com](https://chatiops.com) e faça login.
2. No menu lateral, vá em **Conexões**.
3. Clique na conexão WhatsApp que você quer usar via API.
4. Abra a aba **API** , clique em **Gerar Token**.
5. **Copie o token.** (Trate como senha, não compartilhe.)

> 💡 O token não expira. Se você gerar um novo, o antigo para de funcionar automaticamente.

---

## 💬 Exemplos de uso, só copiar e colar no Claude

**Mensagem simples:**

> "Manda no whatsapp pro 11 99999-9999: olá, segue o link da reunião https://meet.exemplo.com/abc"

**Com prioridade urgente (OTP/código de verificação):**

> "Dispara um whats pro 11 99999-9999 com o código 483921. Prioridade alta porque é OTP."

**Com anexo (PDF, imagem, áudio):**

> "Manda o arquivo boleto.pdf que está na minha pasta Downloads pro cliente 11 99999-9999, com a legenda 'Segue seu boleto do mês'."

**Fechar atendimento após enviar:**

> "Manda a mensagem de encerramento pro 11 99999-9999 e fecha o ticket."

---

## ⚙️ O que essa skill faz por baixo

- Endpoint oficial: `POST https://api.chatiops.tiops.com.br/api/messages/send`
- Autenticação: `Authorization: Bearer <seu_token>`
- Texto: `application/json`
- Mídia (PDF, imagem, áudio, vídeo): `multipart/form-data`
- Respeita os 3 níveis de prioridade: `baixa`, `media`, `alta`
- Avisa você antes de estourar os limites diários (20/dia no Starter, 100/dia no PRO)
- Traduz erros HTTP em mensagens humanas (`token inválido` em vez de `401`)

Documentação completa da API: [chatiops.com/developers](https://chatiops.com/developers).

---

## 📁 Conteúdo deste repositório

```text
openclaw-chatiops/
├── README.md
├── skill/
│   └── SKILL.md
├── examples/
│   └── whatsapp-system-prompt.md
└── wa-id-scanner/
```

### O que existe hoje no repo

- `README.md` , documentação principal
- `skill/SKILL.md` , instruções-base da skill
- `examples/whatsapp-system-prompt.md` , exemplo de prompt operacional
- `wa-id-scanner/` , extensão auxiliar para capturar chat IDs no WhatsApp Web

### O que falta para virar a experiência estilo Claude skill completa

Para ficar exatamente no formato descrito acima, o repositório ainda precisa incluir:

- arquivo `chatiops.skill`
- pasta-fonte no formato esperado pelo Claude
- implementações reais de envio, por exemplo `scripts/send_message.py`
- referências de API mais completas, por exemplo `references/api.md`
- empacotamento final da skill para arrastar no Claude

Ou seja, eu já alinhei o posicionamento do README com a proposta do produto, mas a estrutura atual do repositório ainda está mais próxima de uma base inicial do que do pacote final pronto para instalar.

---

## ⚠️ Cuidados importantes

- **Nunca compartilhe seu token** em vídeos, screenshots, prints ou repositórios. Ele dá acesso total ao envio pelo seu WhatsApp.
- **Não use `priority: alta` em disparo em massa** , o WhatsApp pode bloquear seu número de forma permanente. Use `alta` só para mensagens individuais urgentes, como OTP, confirmação de agendamento e alerta.
- Esta é uma skill **não-oficial** da Anthropic. É mantida pela comunidade Chatiops e vem "como está".

---

## 📺 Vídeo tutorial

Veja o passo a passo em vídeo no YouTube: *[link em breve]*

---

## Licença

MIT , use, modifique e distribua livremente. Veja [LICENSE](./LICENSE).

---

Feito com ☕ por [@arquitetoitamar](https://github.com/arquitetoitamar) usando a plataforma [Chatiops](https://chatiops.com).
