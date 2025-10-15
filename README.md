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

### Desenvolvimento Local

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:3000
```

### Automação de Desenvolvimento

O projeto inclui scripts PowerShell para automatizar todo o fluxo de desenvolvimento:

#### Workflow Recomendado

**1. Desenvolvimento:**
```powershell
# Iniciar servidor de desenvolvimento
npm run dev
```

**2. Publicar Mudanças:**
```powershell
# Deploy rápido (build + commit + push)
.\quick-deploy.ps1
```

**3. Setup Inicial (Primeira Vez):**
```powershell
# Configuração completa
.\setup-simple.ps1
```

#### Scripts Disponíveis

| Script | Descrição | Uso |
|--------|-----------|-----|
| `setup-simple.ps1` | Setup completo e deploy | Primeira configuração |
| `quick-deploy.ps1` | Deploy rápido | Mudanças diárias |
| `dev.ps1` | Desenvolvimento | Servidor local |
| `setup.ps1` | Setup avançado | Configurações customizadas |

#### Documentação Detalhada

- **`COMO-USAR.md`** - Guia rápido de uso
- **`SETUP.md`** - Documentação completa

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

### GitHub Pages (Atual)

O projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

**Scripts de Automação Disponíveis:**

#### Setup Completo
```powershell
# Executa todo o processo de configuração e deploy
.\setup-simple.ps1
```

#### Deploy Rápido
```powershell
# Deploy rápido para mudanças diárias
.\quick-deploy.ps1
```

#### Opções Avançadas
```powershell
# Setup sem operações Git
.\setup-simple.ps1 -SkipGit

# Setup sem build
.\setup-simple.ps1 -SkipBuild

# Deploy com mensagem personalizada
.\quick-deploy.ps1 -Message "Atualização da página principal"
```

**O que os scripts fazem:**
- ✅ Verificam dependências (Node.js, npm, Git)
- ✅ Instalam dependências do projeto
- ✅ Verificam configuração (next.config.ts, workflow)
- ✅ Executam build do projeto
- ✅ Fazem commit automático com timestamp
- ✅ Fazem push para GitHub
- ✅ Iniciam deploy automático no GitHub Actions

### Configuração do GitHub Pages

1. Vá para: `https://github.com/jenafree/siteInstitucionalJenafreeLabs/settings/pages`
2. Em **Source**, selecione: **GitHub Actions**
3. Salve as configurações

### Outras Plataformas

O projeto também é compatível com:
- Vercel
- CloudFlare Pages
- Netlify
- AWS Amplify

## 📊 Lighthouse

Meta mínima para todas as páginas:
- **Performance:** ≥ 90
- **SEO:** ≥ 90
- **Best Practices:** ≥ 90
- **Accessibility:** ≥ 90

## 🔧 Troubleshooting

### Problemas com Scripts PowerShell

**Erro de Execução:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Erro no Build:**
```powershell
# Limpar arquivos temporários
Remove-Item -Recurse -Force out, .next -ErrorAction SilentlyContinue
.\setup-simple.ps1
```

**Erro no Git:**
```powershell
# Verificar configuração
git config --global user.name
git config --global user.email
```

### Problemas de Deploy

**GitHub Actions falhando:**
1. Verifique os logs em: https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions
2. Certifique-se que o GitHub Pages está configurado para "GitHub Actions"
3. Verifique se o `next.config.ts` está configurado para export estático

**Site não atualizando:**
1. Aguarde 3-5 minutos após o push
2. Verifique se o workflow foi executado com sucesso
3. Force refresh no navegador (Ctrl+F5)

## 🌐 Links Úteis

### Desenvolvimento
- **Site Local:** http://localhost:3000
- **Repositório:** https://github.com/jenafree/siteInstitucionalJenafreeLabs
- **GitHub Actions:** https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions

### Produção
- **Site Online:** https://jenafree.github.io/siteInstitucionalJenafreeLabs
- **GitHub Pages:** https://github.com/jenafree/siteInstitucionalJenafreeLabs/settings/pages

### Documentação
- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com/docs

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Faça suas alterações
4. Teste com: `.\quick-deploy.ps1`
5. Commit suas mudanças: `git commit -m 'Add nova feature'`
6. Push para a branch: `git push origin feature/nova-feature`
7. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Jenafree Labs.

## 📧 Contato

- **Email:** contato@jenafreelabs.com
- **WhatsApp:** (11) 99999-9999
- **Website:** https://jenafreelabs.com

---

**Jenafree Labs** - QA sob demanda. Sem atravessadores.
