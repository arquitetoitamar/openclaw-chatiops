# WhatsApp ID Scanner (Chrome extension)

Extensão simples (Manifest V3) para capturar o **ID do chat atual** no WhatsApp Web.

## Como instalar (unpacked)
1. Abra o **Chrome**.
2. Vá em: `chrome://extensions`
3. Ative **Developer mode** (Modo do desenvolvedor).
4. Clique **Load unpacked** (Carregar sem compactação).
5. Selecione a pasta: `wa-id-scanner/`

## Como usar
1. Abra `https://web.whatsapp.com/`.
2. Clique no **grupo/contato** que você quer.
3. Clique no ícone da extensão → **Pegar ID do chat atual** → **Copiar**.

## Observações
- O WhatsApp Web muda o DOM com frequência. Se parar de funcionar, a extensão pode precisar de ajustes.
- O valor costuma vir como:
  - `...@c.us` (contato)
  - `...@g.us` (grupo)

