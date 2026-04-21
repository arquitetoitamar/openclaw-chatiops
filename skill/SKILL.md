# chatiops_whatsapp

Use esta skill quando a tarefa envolver operação, configuração, documentação ou suporte de fluxos ChatOps no WhatsApp usando OpenClaw.

## Objetivo

Ajudar a:

- configurar fluxos de atendimento e automação via WhatsApp
- identificar o chat ID (JID) de contatos e grupos
- estruturar playbooks operacionais
- orientar testes, rollout e documentação

## Quando usar

Use esta skill para pedidos como:

- "configura um fluxo de ChatOps no WhatsApp"
- "como pego o ID do grupo no WhatsApp Web?"
- "monte a documentação da skill de WhatsApp"
- "quero organizar atendimento com OpenClaw + WhatsApp"

## Entregáveis esperados

Dependendo do pedido, entregue um ou mais destes itens:

1. documentação de setup
2. manual operacional
3. prompts ou playbooks para atendimento
4. checklist de testes
5. instruções para capturar o JID do chat

## Procedimento recomendado

### 1. Entender o contexto do uso

Levante rapidamente:

- é atendimento, alerta, suporte interno ou vendas?
- o destino é grupo ou contato?
- o fluxo será humano assistido ou totalmente automatizado?
- existe necessidade de tom, SLA, roteamento ou escalonamento?

Se o pedido já estiver claro, não trave o andamento com perguntas desnecessárias.

### 2. Descobrir o chat ID

Quando necessário, orientar o uso da extensão `wa-id-scanner/`:

1. abrir `https://web.whatsapp.com`
2. abrir o grupo ou contato
3. clicar na extensão
4. usar `Pegar ID do chat atual`
5. copiar o valor retornado

Formatos comuns:

- contato: `5511999999999@c.us`
- grupo: `1203630xxxxxxxx@g.us`

### 3. Estruturar o playbook

O playbook deve cobrir:

- objetivo do fluxo
- quem pode acionar
- quais mensagens devem receber resposta
- quais mensagens devem ser ignoradas
- regras de segurança e privacidade
- fallback para atendimento humano
- tom de voz

### 4. Produzir documentação utilizável

Preferir documentação prática, com:

- passos numerados
- exemplos reais
- checklist de validação
- riscos e limitações

### 5. Proteger dados

Nunca expor:

- tokens
- credenciais
- números privados sem necessidade
- conteúdo sensível de conversas

## Checklist de produção

Antes de considerar pronto, verifique:

- destino correto identificado
- playbook documentado
- tom de voz definido
- regras de escalonamento definidas
- teste de cenário feliz executado
- teste de falha executado
- documentação entregue

## Arquivos de apoio

- `../README.md`
- `../examples/whatsapp-system-prompt.md`
- `../wa-id-scanner/README.md`

## Observação

Se o usuário pedir publicação em repositório, você pode preparar o projeto, inicializar git, commitar e tentar push. Se houver bloqueio de autenticação ou permissão, devolver o próximo passo exato para concluir.
