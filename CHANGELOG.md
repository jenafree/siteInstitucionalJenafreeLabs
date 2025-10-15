# Changelog - Jenafree Labs Site Institucional

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.2.0] - 2025-01-14

### ✨ Adicionado
- **Identidade Visual Completa**
  - 4 variantes de logo SVG profissionais (horizontal, vertical, mark, mono)
  - Favicon personalizado baseado na marca Jenafree
  - Assets organizados em `assets/brand/` e `public/assets/brand/`

### 🔧 Melhorado
- **Conversão e SEO**
  - CTA sticky no topo após scroll (300px)
  - Links WhatsApp reais com mensagem pré-definida
  - Formulário de contato com consentimento LGPD
  - Meta tags otimizadas (Open Graph, Twitter Cards)
  - JSON-LD estruturado para rich snippets
  - URLs corretas para GitHub Pages

### 📄 Legal e Conformidade
- **Páginas LGPD** completas (`/privacidade`, `/termos`)
- **Formulário com consentimento** obrigatório
- **Links funcionais** no footer (email, WhatsApp)
- **Conformidade básica** com LGPD

### 🎨 Branding
- **Logo no Header** com dimensões corretas (160x32)
- **Mark compacto no Footer** (32x32)
- **Favicon SVG** escalável e otimizado
- **Metadados atualizados** com novos assets
- **Zero 404s** - todos os caminhos corrigidos

### 🚀 Deploy
- **Caminhos relativos** corrigidos para GitHub Pages
- **Assets duplicados** em ambas as pastas (src e public)
- **Build otimizado** com novos recursos

## [1.1.0] - 2025-01-14

### ✨ Adicionado
- **Scripts de Automação PowerShell** para setup e deploy
  - `setup-simple.ps1` - Setup completo e deploy automático
  - `quick-deploy.ps1` - Deploy rápido para mudanças diárias
  - `dev.ps1` - Script de desenvolvimento
  - `setup.ps1` - Setup avançado com opções customizadas

### 🔧 Melhorado
- **Deploy Automático** via GitHub Actions
- **Configuração do Next.js** para export estático
- **Documentação** completa com guias de uso
- **Troubleshooting** e solução de problemas

### 📚 Documentação
- **README.md** atualizado com seção de automação
- **COMO-USAR.md** - Guia rápido de uso dos scripts
- **SETUP.md** - Documentação detalhada
- **CHANGELOG.md** - Histórico de mudanças

### 🚀 Deploy
- **GitHub Pages** configurado com workflow automático
- **Build otimizado** para sites estáticos
- **Sitemap automático** gerado a cada build

## [1.0.0] - 2025-01-14

### ✨ Lançamento Inicial
- **Site institucional completo** da Jenafree Labs
- **Next.js 15** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Framer Motion** para animações

### 📄 Páginas Implementadas
- **Home** - Hero + Serviços + Manifesto + Cases + Blog
- **Manifesto** - Frases animadas + Princípios
- **Sobre** - Missão, visão, valores, história
- **Contato** - Formulário + informações
- **Serviços** - Hub + 5 serviços detalhados
- **Cases** - 3 casos de sucesso
- **Blog** - Sistema completo com posts

### 🔍 SEO
- **Metadata** configurado em todas as páginas
- **Open Graph** e Twitter Cards
- **Sitemap.xml** automático
- **robots.txt** configurado

### 📱 Design
- **Responsivo** para todos os dispositivos
- **Paleta de cores** da marca Jenafree
- **Animações** suaves e profissionais
- **UX otimizada** para conversão

---

## Como Usar o Changelog

### Versões
- **[MAJOR.MINOR.PATCH]** - Seguindo Semantic Versioning
- **Data** - Data de lançamento

### Tipos de Mudanças
- **✨ Adicionado** - Novas funcionalidades
- **🔧 Melhorado** - Melhorias em funcionalidades existentes
- **🐛 Corrigido** - Correções de bugs
- **📚 Documentação** - Mudanças na documentação
- **🚀 Deploy** - Mudanças relacionadas ao deploy
- **💥 Breaking Changes** - Mudanças que quebram compatibilidade

### Exemplo de Uso
```markdown
## [1.2.0] - 2025-01-15

### ✨ Adicionado
- Nova página de portfólio
- Sistema de comentários no blog

### 🔧 Melhorado
- Performance da página inicial
- Responsividade mobile

### 🐛 Corrigido
- Bug no formulário de contato
- Problema de carregamento de imagens
```
