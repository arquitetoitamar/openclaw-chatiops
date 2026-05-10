# openclaw-chatiops

Use esta skill quando a tarefa envolver operação, configuração, documentação ou suporte de fluxos ChatOps no WhatsApp usando OpenClaw + Chatiops.

## Objetivo

Ajudar a:

- configurar fluxos de atendimento e automação via WhatsApp
- identificar o chat ID de contatos e grupos
- estruturar playbooks operacionais
- orientar testes, rollout e documentação
- preparar um setup reutilizável para outras pessoas instalarem facilmente
- orientar a geração e o uso do token da Chatiops

## Quando usar

Use esta skill para pedidos como:

- "configura um fluxo de ChatOps no WhatsApp"
- "como pego o ID do grupo no WhatsApp Web?"
- "monte a documentação da skill de WhatsApp"
- "quero organizar atendimento com OpenClaw + Chatiops"
- "deixe esse repo fácil de instalar no OpenClaw"
- "como gero o token da conexão no Chatiops?"

## Entregáveis esperados

Dependendo do pedido, entregue um ou mais destes itens:

1. documentação de setup
2. manual operacional
3. prompts ou playbooks para atendimento
4. checklist de testes
5. instruções para capturar o chat ID
6. templates reutilizáveis para workspace
7. scripts de instalação e remoção
8. instruções seguras para gerar e trocar o token da Chatiops

## Procedimento recomendado

### 1. Entender o contexto do uso

Levante rapidamente:

- é atendimento, alerta, suporte interno ou vendas?
- o destino é grupo ou contato?
- o fluxo será humano assistido ou automatizado?
- existe necessidade de tom, SLA, roteamento ou escalonamento?

Se o pedido já estiver claro, siga sem travar com perguntas desnecessárias.

### 2. Gerar o token da Chatiops

Quando a integração ainda não estiver pronta, orientar este caminho:

1. acessar `https://chatiops.tiops.com.br` e fazer login
2. abrir **API** no menu lateral
3. selecionar a conexão WhatsApp desejada (chips no topo)
4. na aba **Configuração**, copiar o token
5. ou na aba **MCP**, copiar a URL completa do MCP server

Regras importantes:

- tratar o token como senha
- nunca publicar ou commitar o token
- o token não expira
- se um novo token for gerado, o anterior deixa de funcionar automaticamente

### 2.1 Usar MCP (recomendado para agentes compatíveis)

Se o agente suporta MCP, basta configurar a URL:
```
https://api.chatiops.tiops.com.br/mcp?token=SEU_TOKEN
```

Tools disponíveis via MCP:
- `send_whatsapp` — Enviar mensagem WhatsApp
- `list_tickets` — Listar atendimentos (open/pending/closed)
- `get_ticket_messages` — Histórico de um ticket
- `reply_ticket` — Responder em um ticket
- `search_contacts` — Buscar contatos por nome/número
- `get_metrics` — Métricas do dia

### 2.2 Usar API REST diretamente

Base URL: `https://api.chatiops.tiops.com.br`
Auth: `Authorization: Bearer SEU_TOKEN`

Endpoints:
- `POST /api/messages/send` — Enviar mensagem (number, body, priority)
- `GET /api/tickets?status=open&limit=20` — Listar tickets
- `GET /api/tickets/:id/messages?limit=50` — Mensagens de um ticket
- `POST /api/tickets/:id/reply` — Responder (body)
- `GET /api/contacts?search=nome` — Buscar contatos
- `GET /api/metrics/summary` — Métricas resumidas

### 3. Descobrir o chat ID

Quando necessário, orientar o uso da extensão `../wa-id-scanner/`:

1. abrir `https://web.whatsapp.com`
2. abrir o grupo ou contato
3. clicar na extensão
4. usar `Pegar ID do chat atual`
5. copiar o valor retornado

Formatos comuns:

- contato: `5511999999999@c.us`
- grupo: `1203630xxxxxxxx@g.us`

### 4. Estruturar o playbook

O playbook deve cobrir:

- objetivo do fluxo
- quem pode acionar
- quais mensagens devem receber resposta
- quais mensagens devem ser ignoradas
- regras de segurança e privacidade
- fallback para atendimento humano
- tom de voz

### 5. Produzir documentação utilizável

Preferir documentação prática, com:

- passos numerados
- exemplos reais
- checklist de validação
- riscos e limitações
- instruções de instalação e atualização

### 6. Facilitar reuso por outras pessoas

Sempre que fizer sentido, deixar o projeto com:

- README com quickstart
- script de instalação
- exemplo de configuração
- templates prontos para adaptação
- instruções claras de update e remoção

### 7. Proteger dados

Nunca expor:

- tokens
- credenciais
- números privados sem necessidade
- conteúdo sensível de conversas

## Checklist de produção

Antes de considerar pronto, verifique:

- destino correto identificado
- token da conexão gerado e armazenado com segurança
- playbook documentado
- tom de voz definido
- regras de escalonamento definidas
- teste de cenário feliz executado
- teste de falha executado
- documentação entregue
- setup reproduzível por outra pessoa

## Arquivos de apoio

- `../README.md`
- `../examples/whatsapp-system-prompt.md`
- `../examples/openclaw-skill-config.example.md`
- `../examples/.env.chatiops.example`
- `../wa-id-scanner/README.md`
- `./templates/AGENTS.chatiops.md`
- `./templates/TOOLS.chatiops.md`
- `./templates/USER.chatiops.md`
- `./templates/HEARTBEAT.chatiops.md`

## Observação

Se o usuário pedir publicação em repositório, você pode preparar o projeto, commitar e tentar push. Se houver bloqueio de autenticação ou permissão, devolver o próximo passo exato para concluir.
