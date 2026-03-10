# Portfólio da Júlia Fiorini

Portfólio profissional bilíngue desenvolvido com Nuxt para apresentar a trajetória da Júlia Rocha Fiorini, com foco em desenvolvimento web, projetos, experiência profissional e uma experiência visual dark/tech com rota 3D.

## Visão geral

O projeto foi reorganizado para uma arquitetura mais modular, com separação clara entre:

- shell da aplicação
- conteúdo bilíngue
- seções da home
- lógica de formulário
- configuração da cena 3D

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS 4
- Nuxt UI
- Three.js
- EmailJS
- pnpm

## Estrutura principal

```text
app/
  assets/css/                         identidade visual global
  components/
    base/                             logo, navegação, seletor de idioma, links sociais
    portfolio/
      sections/                       seções modulares da home
      PortfolioPage.vue               orquestração da página
    scene/                            experiência 3D
  composables/                        locale, conteúdo, contato e cena
  data/
    portfolio/                        tipos, conteúdo PT/EN e UI strings
  layouts/                            shell padrão e shell embed
  pages/                              home, embed e experience
public/models/                        assets 3D opcionais para desenvolvimento local
```

## Ambiente de desenvolvimento

### Pré-requisitos

- Node.js 22+
- pnpm 10+

### Instalação

```bash
pnpm install
```

### Variáveis de ambiente

Use `.env.example` como contrato inicial:

```bash
cp .env.example .env
```

Variáveis:

- `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY`: opcional, ativa o envio real do formulário
- `NUXT_PUBLIC_EMAILJS_SERVICE_ID`: opcional, ativa o envio real do formulário
- `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID`: opcional, ativa o envio real do formulário
- `NUXT_PUBLIC_SPLINE_SCENE_URL`: opcional, sobrescreve a cena Spline do hero
- `NUXT_PUBLIC_GLB_MODEL_URL`: opcional, usa um `.glb` local ou uma URL pública
- `NUXT_PUBLIC_SCREEN_OBJECT_NAME`: opcional, define o nome do mesh da tela no modelo
- `NUXT_PUBLIC_SCREEN_FLIP`: opcional, gira a tela quando necessário
- `NUXT_PUBLIC_SCREEN_NUDGE`: opcional, faz ajuste fino do encaixe da tela

Se as variáveis do EmailJS não forem definidas, o formulário continua visível, mas o envio não será concluído.

### Rodando localmente

```bash
pnpm dev
```

- Aplicação principal: `http://localhost:3000`
- Rota 3D: `http://localhost:3000/experience`

## Scripts

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm typecheck
pnpm check
```

## Conteúdo e personalização

O conteúdo do portfólio fica em `app/data/portfolio/`:

- `types.ts`: contratos de dados
- `content.pt-BR.ts`: conteúdo em português
- `content.en.ts`: conteúdo em inglês
- `ui.ts`: labels da interface
- `index.ts`: seletores e exports públicos

## Política dos assets 3D

O projeto aceita duas estratégias:

1. Desenvolvimento local com um arquivo em `public/models/computador-cenario.glb`
2. Produção com `NUXT_PUBLIC_GLB_MODEL_URL` apontando para CDN ou storage público

O diretório `public/models/` é mantido no repositório, mas os arquivos `.glb` e `.gltf` locais são tratados como opcionais.

## Qualidade

O CI valida:

- lint
- typecheck
- build

Também há execução em `push` e `pull_request`.

## Próximos refinamentos

- adicionar screenshots reais dos projetos
- publicar links finais de demo quando disponíveis
- incluir foto profissional ou logo pessoal
- configurar EmailJS em produção

## Licença

Este projeto utiliza a licença MIT.
