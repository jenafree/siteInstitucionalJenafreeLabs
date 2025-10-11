# Jenafree Labs - Site Institucional B2B

Site institucional completo da Jenafree Labs, construído com Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion.

## 🚀 Stack Tecnológica

- **Framework:** Next.js 15.5.4 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS 3.4 + tailwindcss-animate
- **Componentes UI:** shadcn/ui
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **SEO:** next-sitemap
- **Blog:** Markdown + gray-matter

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/jenafree/siteInstitucionalJenafreeLabs.git

# Entre no diretório
cd siteInstitucionalJenafreeLabs

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

## 🛠️ Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:3000
```

## 🏗️ Build para Produção

```bash
# Crie a build otimizada
npm run build

# Inicie o servidor de produção
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint
- `npm run postbuild` - Gera sitemap.xml (automático após build)

## 📄 Estrutura do Projeto

```
siteInstitucionalJenafreeLabs/
├── public/
│   ├── static/           # Imagens e assets estáticos
│   └── robots.txt        # Configuração de crawlers
├── src/
│   ├── app/
│   │   ├── (site)/       # Grupo de rotas do site
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx  # Home
│   │   │   ├── manifesto/
│   │   │   ├── servicos/
│   │   │   ├── cases/
│   │   │   ├── contato/
│   │   │   └── sobre/
│   │   ├── blog/         # Sistema de blog
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   ├── layout.tsx    # Layout raiz
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CTAFloat.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Metrics.tsx
│   │   ├── Testimonial.tsx
│   │   └── PostCard.tsx
│   ├── content/
│   │   └── blog/         # Posts do blog (Markdown)
│   └── lib/
│       ├── seo.ts        # Configurações de SEO
│       ├── posts.ts      # Loader de posts
│       └── utils.ts      # Utilidades
├── tailwind.config.ts
├── next.config.ts
├── next-sitemap.config.js
└── package.json
```

## 🎨 Paleta de Cores

- **Primary (Azul):** `#004CFF`
- **Secondary (Roxo):** `#6C63FF`
- **Text:** `#172B4D`
- **Background:** `#FFFFFF`
- **Background Alt:** `#F7F9FC`
- **Blackish:** `#0A0A0A`

## 📱 Páginas Implementadas

### Institucionais
- ✅ **Home** - Hero + Serviços + Manifesto + Cases + Blog
- ✅ **Manifesto** - Frases animadas + Princípios
- ✅ **Sobre** - Missão, visão, valores, história
- ✅ **Contato** - Formulário + informações de contato

### Serviços
- ✅ **Hub de Serviços** - Grid + Planos e preços
- ✅ **Automação de Testes** - Playwright, Cypress, Appium
- ✅ **Performance (k6)** - Testes de carga e stress
- ✅ **Segurança & Pentest** - SAST/DAST, OWASP Top 10
- ✅ **CI/CD & DevEx** - Quality gates, preview deploys
- ✅ **Design QA & Figma** - Acessibilidade, visual regression

### Conteúdo
- ✅ **Cases** - 3 casos de sucesso detalhados
- ✅ **Blog** - Sistema completo com 3 posts iniciais
  - QA sob Demanda
  - Playwright + POM + DSL
  - k6 na prática

## 🔍 SEO

- ✅ Metadata configurado em todas as páginas
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap.xml gerado automaticamente
- ✅ robots.txt configurado
- ✅ URLs semânticas

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte o repositório na Vercel
2. Configure as variáveis de ambiente:
   - `SITE_URL=https://jenafreelabs.com`
3. Deploy automático em cada push

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- CloudFlare Pages
- Netlify
- AWS Amplify

## 📊 Lighthouse

Meta mínima para todas as páginas:
- **Performance:** ≥ 90
- **SEO:** ≥ 90
- **Best Practices:** ≥ 90
- **Accessibility:** ≥ 90

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Add nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Jenafree Labs.

## 📧 Contato

- **Email:** contato@jenafreelabs.com
- **WhatsApp:** (11) 99999-9999
- **Website:** https://jenafreelabs.com

---

**Jenafree Labs** - QA sob demanda. Sem atravessadores.
