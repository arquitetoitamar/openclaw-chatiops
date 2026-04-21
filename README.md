# openclaw-chatiops

Skill e utilitários para operar um fluxo de ChatOps via WhatsApp com OpenClaw.

## O que tem aqui

- `skill/SKILL.md`: instruções da habilidade `chatiops_whatsapp`
- `examples/whatsapp-system-prompt.md`: exemplo de prompt/base operacional
- `wa-id-scanner/`: extensão Chrome para capturar o chat id (JID) do WhatsApp Web

## Objetivo

Esta skill ajuda a transformar o OpenClaw em um operador de atendimento e automação via WhatsApp, com foco em:

- identificar chat IDs de grupos e contatos
- orientar configuração do canal WhatsApp no OpenClaw
- padronizar playbooks de operação
- dar uma base de uso para atendimento, triagem e ChatOps

## Estrutura

```text
openclaw-chatiops/
├── README.md
├── skill/
│   └── SKILL.md
├── examples/
│   └── whatsapp-system-prompt.md
└── wa-id-scanner/
```

## Instalação rápida

### 1. Clonar

```bash
git clone https://github.com/arquitetoitamar/openclaw-chatiops.git
cd openclaw-chatiops
```

### 2. Instalar a extensão auxiliar

1. Abra o Chrome
2. Vá para `chrome://extensions`
3. Ative `Developer mode`
4. Clique em `Load unpacked`
5. Selecione a pasta `wa-id-scanner/`

### 3. Usar a skill no ecossistema OpenClaw

Copie ou adapte o conteúdo de `skill/SKILL.md` para sua biblioteca de skills, por exemplo:

```bash
mkdir -p ~/.agents/skills/chatiops_whatsapp
cp skill/SKILL.md ~/.agents/skills/chatiops_whatsapp/SKILL.md
```

Ajuste os caminhos e instruções conforme sua instalação do OpenClaw.

## Manual de uso

### Capturar o ID de um grupo ou contato

1. Abra `https://web.whatsapp.com`
2. Entre no grupo ou contato desejado
3. Clique na extensão `WhatsApp ID Scanner`
4. Clique em `Pegar ID do chat atual`
5. Copie o valor retornado, como:
   - `5511999999999@c.us`
   - `1203630xxxxxxxx@g.us`

### Onde isso ajuda

Esse ID pode ser usado para:

- mapear grupos de operação
- documentar destinos de mensagens
- alimentar configurações de roteamento
- validar se você está automatizando o chat certo

### Fluxo sugerido de operação

1. Descobrir o chat ID com a extensão
2. Registrar esse ID em documentação interna segura
3. Criar o playbook operacional do grupo ou fila
4. Configurar OpenClaw para monitorar e responder no canal certo
5. Testar com mensagens controladas

## Boas práticas

- nunca publicar chat IDs privados em documentação pública sem necessidade
- manter credenciais e tokens fora do repositório
- testar em grupo piloto antes de produção
- documentar claramente quem pode falar, quando e com qual tom
- separar grupos humanos, grupos de alerta e grupos de comando

## Exemplo de casos de uso

- central de atendimento comercial no WhatsApp
- triagem automática de mensagens
- grupo interno de alertas operacionais
- assistente para FAQ e direcionamento inicial
- orquestração de tarefas via mensagens

## Limitações

- o DOM do WhatsApp Web muda com frequência
- a extensão `wa-id-scanner` pode precisar de ajustes no futuro
- a skill depende de configuração prévia do OpenClaw e do canal WhatsApp

## Próximos passos recomendados

- adicionar exemplos prontos de playbooks por setor
- incluir template de memória operacional
- incluir checklist de produção
- versionar prompts por contexto de atendimento

## Licença

MIT
