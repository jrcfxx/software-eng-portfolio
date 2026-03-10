# Portfólio da Júlia Fiorini

Portfólio profissional bilíngue desenvolvido com Nuxt para apresentar a trajetória da Júlia Rocha Fiorini, com foco em desenvolvimento web, experiência profissional, projetos em destaque e contato direto.

## Visão geral

O site foi personalizado para refletir a identidade profissional da Júlia, preservando a estética dark/tech do projeto base e adicionando:

- conteúdo em português e inglês
- seção de projetos com stack e links
- experiências profissionais e formação
- formulário de contato com suporte a EmailJS
- rota 3D com modelo GLB e versão embutida do portfólio

## Tecnologias

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS 4
- Nuxt UI
- Three.js
- EmailJS

## Estrutura principal

```text
app/
  assets/css/                 estilos globais e identidade visual
  components/
    portfolio/                conteúdo principal do portfólio
    scene/                    experiência 3D e cenário
  composables/                locale e lógica reutilizável
  data/                       conteúdo bilíngue centralizado
  layouts/                    layout padrão e layout embed
  pages/                      home, embed e experiência 3D
public/models/                modelo GLB do monitor
```

## Como rodar

### Pré-requisitos

- Node.js 20+ recomendado
- npm, pnpm ou outro gerenciador compatível

### Instalação

```bash
npm install
```

### Ambiente

Crie um arquivo `.env` na raiz se quiser ativar o formulário e customizar integrações:

```bash
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NUXT_PUBLIC_EMAILJS_SERVICE_ID=
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NUXT_PUBLIC_SPLINE_SCENE_URL=
NUXT_PUBLIC_GLB_MODEL_URL=/models/computador-cenario.glb
NUXT_PUBLIC_SCREEN_OBJECT_NAME=screen
NUXT_PUBLIC_SCREEN_FLIP=false
NUXT_PUBLIC_SCREEN_NUDGE=-0.02
```

Se as variáveis do EmailJS não forem definidas, o formulário continua visível, mas o envio não será concluído.

### Desenvolvimento

```bash
npm run dev
```

Aplicação principal: `http://localhost:3000`

Rota 3D: `http://localhost:3000/experience`

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
```

## Conteúdo e personalização

Todo o conteúdo textual do portfólio está centralizado em `app/data/portfolio.ts`. É ali que ficam:

- dados pessoais e links
- versão `pt-BR` e `en`
- projetos
- experiências
- formação complementar
- labels da interface

## Próximos refinamentos sugeridos

- adicionar screenshots reais dos projetos
- publicar links finais de demo quando disponíveis
- incluir foto profissional ou logo pessoal
- configurar EmailJS em produção

## Licença

Este projeto utiliza a licença MIT.
