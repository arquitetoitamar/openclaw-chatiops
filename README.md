# openclaw-chatiops

Skill pronta para integrar o **OpenClaw** com a **Chatiops** e operar fluxos de WhatsApp com instalação simples.

Este repositório foi reorganizado para que qualquer pessoa consiga:

1. clonar ou baixar o projeto
2. instalar a skill no OpenClaw em poucos minutos
3. configurar variáveis e playbook
4. testar o fluxo
5. usar a extensão auxiliar para descobrir o chat ID do WhatsApp Web

## O que vem neste repositório

```text
openclaw-chatiops/
├── README.md
├── install/
│   ├── install.sh
│   └── uninstall.sh
├── skill/
│   ├── SKILL.md
│   └── templates/
│       ├── AGENTS.chatiops.md
│       ├── HEARTBEAT.chatiops.md
│       ├── TOOLS.chatiops.md
│       └── USER.chatiops.md
├── examples/
│   ├── .env.chatiops.example
│   ├── openclaw-skill-config.example.md
│   └── whatsapp-system-prompt.md
└── wa-id-scanner/
```

## Para que serve

Use esta skill para pedidos como:

- configurar atendimento via WhatsApp com OpenClaw + Chatiops
- organizar playbooks de suporte, alertas ou operação interna
- descobrir o ID de um grupo ou contato no WhatsApp Web
- documentar setup e checklist de produção

## Instalação rápida

### Opção 1, instalar direto do GitHub

```bash
git clone https://github.com/arquitetoitamar/openclaw-chatiops.git
cd openclaw-chatiops
bash install/install.sh
```

### Opção 2, baixar ZIP

1. Baixe o ZIP do repositório.
2. Extraia a pasta.
3. Entre na pasta `openclaw-chatiops`.
4. Rode:

```bash
bash install/install.sh
```

## O que o instalador faz

O script de instalação:

- detecta a pasta `~/.agents/skills`
- copia a skill para `~/.agents/skills/openclaw-chatiops`
- preserva uma cópia de segurança se já existir algo no destino
- mostra os próximos passos de configuração

## Pré-requisitos

Antes de usar em produção, tenha:

- OpenClaw já instalado
- acesso à sua conta da Chatiops
- credenciais, tokens ou dados de integração necessários
- WhatsApp Web disponível, se quiser capturar chat IDs com a extensão

## Configuração após instalar

### 1. Confira se a skill foi copiada

Verifique se existe a pasta:

```bash
~/.agents/skills/openclaw-chatiops
```

### 2. Use os templates no seu workspace

O repositório inclui modelos em:

```text
skill/templates/
```

Você pode adaptar esses trechos para:

- `AGENTS.md`
- `USER.md`
- `TOOLS.md`
- `HEARTBEAT.md`

Isso ajuda o agente a operar o fluxo com contexto consistente.

### 3. Configure os dados da integração

Use o exemplo:

```text
examples/.env.chatiops.example
```

Copie para um arquivo seguro no seu ambiente e preencha os valores reais. Não commite segredos.

Exemplo:

```bash
cp examples/.env.chatiops.example .env.chatiops
```

### 4. Defina seu playbook

Use como base:

- `examples/whatsapp-system-prompt.md`
- `examples/openclaw-skill-config.example.md`

Esses arquivos ajudam a definir:

- objetivo do fluxo
- tom de voz
- regras de triagem
- escalonamento humano
- mensagens que devem ou não receber resposta

## Como usar no OpenClaw

Depois da instalação, peça algo como:

- "configure um fluxo de atendimento via WhatsApp com Chatiops"
- "me mostre como pegar o ID do grupo no WhatsApp Web"
- "monte um playbook de suporte interno para WhatsApp"
- "documente o setup de OpenClaw + Chatiops para produção"

## Como pegar o chat ID no WhatsApp Web

Use a extensão em `wa-id-scanner/`.

### Instalação da extensão

1. Abra o Chrome.
2. Vá em `chrome://extensions`.
3. Ative `Developer mode`.
4. Clique em `Load unpacked`.
5. Selecione a pasta `wa-id-scanner/`.

### Uso

1. Abra `https://web.whatsapp.com/`.
2. Entre no grupo ou contato desejado.
3. Clique no ícone da extensão.
4. Clique em `Pegar ID do chat atual`.
5. Copie o valor retornado.

Formatos comuns:

- contato: `5511999999999@c.us`
- grupo: `1203630xxxxxxxx@g.us`

## Fluxo recomendado de setup

1. instalar a skill
2. configurar segredos fora do Git
3. identificar o chat ID de destino
4. criar o playbook operacional
5. testar cenário feliz
6. testar falhas e fallback humano
7. documentar operação

## Checklist de produção

- skill instalada no diretório correto
- credenciais configuradas fora do repositório
- chat ID validado
- playbook documentado
- regras de segurança definidas
- fallback humano definido
- teste ponta a ponta executado

## Atualização

Para atualizar a skill instalada:

```bash
cd openclaw-chatiops
git pull
bash install/install.sh
```

## Remoção

```bash
bash install/uninstall.sh
```

## Segurança

- nunca publique tokens ou credenciais
- não exponha números privados sem necessidade
- trate chat IDs e configurações como dados internos
- valide o comportamento antes de usar em grupos reais

## Referências

- OpenClaw Docs: https://docs.openclaw.ai
- OpenClaw Source: https://github.com/openclaw/openclaw
- Chatiops: https://chatiops.com

## Licença

MIT
