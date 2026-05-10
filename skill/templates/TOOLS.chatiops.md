## Bloco sugerido para TOOLS.md

### Chatiops
- Base URL: `https://api.chatiops.tiops.com.br`
- MCP URL: `https://api.chatiops.tiops.com.br/mcp?token=SEU_TOKEN`
- Canal padrão: WhatsApp
- Token: gerar em Chatiops > Conexões > sua conexão WhatsApp > API > Gerar Token

### Endpoints disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/messages/send` | Enviar mensagem (texto ou mídia) |
| GET | `/api/tickets?status=open` | Listar tickets por status |
| GET | `/api/tickets/:id/messages` | Histórico de mensagens de um ticket |
| POST | `/api/tickets/:id/reply` | Responder em um ticket |
| GET | `/api/contacts?search=nome` | Buscar contatos |
| GET | `/api/metrics/summary` | Métricas do dia |

### MCP (Model Context Protocol)

Para agentes que suportam MCP, use a URL direta:
```
https://api.chatiops.tiops.com.br/mcp?token=SEU_TOKEN
```

Tools expostas via MCP:
- `send_whatsapp` — Enviar mensagem WhatsApp
- `list_tickets` — Listar atendimentos
- `get_ticket_messages` — Ver histórico de conversa
- `reply_ticket` — Responder em um ticket
- `search_contacts` — Buscar contatos
- `get_metrics` — Métricas do dia

### WhatsApp IDs
- Grupo principal: preencher
- Contato de fallback: preencher
