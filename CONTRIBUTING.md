# Guia de Contribuição - Jenafree Labs

Obrigado por considerar contribuir para o site institucional da Jenafree Labs! Este guia irá ajudá-lo a começar.

## 🚀 Configuração Inicial

### Pré-requisitos
- **Node.js** 18+ 
- **npm** 8+
- **Git**
- **PowerShell** (Windows)

### Setup Rápido

```powershell
# Clone o repositório
git clone https://github.com/jenafree/siteInstitucionalJenafreeLabs.git
cd siteInstitucionalJenafreeLabs

# Setup automático completo
.\setup-simple.ps1
```

## 🛠️ Desenvolvimento

### Workflow Recomendado

1. **Criar branch:**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

2. **Desenvolver:**
   ```powershell
   # Iniciar servidor de desenvolvimento
   npm run dev
   ```

3. **Testar:**
   ```powershell
   # Testar build local
   npm run build
   ```

4. **Deploy de teste:**
   ```powershell
   # Deploy rápido para testar
   .\quick-deploy.ps1 -Message "Teste da nova funcionalidade"
   ```

5. **Pull Request:**
   - Abra PR no GitHub
   - Aguarde review
   - Merge após aprovação

### Estrutura de Branches

- **`main`** - Branch principal (produção)
- **`feature/*`** - Novas funcionalidades
- **`bugfix/*`** - Correções de bugs
- **`hotfix/*`** - Correções urgentes

### Convenções de Commit

```
tipo(escopo): descrição

Exemplos:
feat(home): adiciona nova seção de depoimentos
fix(contact): corrige validação do formulário
docs(readme): atualiza instruções de setup
style(header): melhora responsividade mobile
refactor(components): simplifica lógica dos cards
```

### Tipos de Commit
- **feat** - Nova funcionalidade
- **fix** - Correção de bug
- **docs** - Documentação
- **style** - Formatação, espaços, etc.
- **refactor** - Refatoração de código
- **test** - Testes
- **chore** - Tarefas de manutenção

## 📝 Padrões de Código

### TypeScript/React
```typescript
// ✅ Bom
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
        <Icon className="w-8 h-8 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
```

### CSS/Tailwind
```tsx
// ✅ Bom - Classes organizadas
<div className="
  flex flex-col md:flex-row 
  gap-4 md:gap-8 
  p-6 
  bg-white 
  rounded-lg 
  shadow-sm 
  hover:shadow-md 
  transition-shadow
">
```

### Estrutura de Arquivos
```
src/
├── app/
│   ├── (site)/           # Páginas do site
│   ├── blog/             # Blog
│   └── globals.css       # Estilos globais
├── components/
│   ├── ui/               # Componentes base
│   ├── Header.tsx        # Componentes específicos
│   └── Footer.tsx
├── content/
│   └── blog/             # Conteúdo markdown
└── lib/
    ├── utils.ts          # Utilitários
    ├── seo.ts            # Configurações SEO
    └── posts.ts          # Helpers do blog
```

## 🧪 Testes

### Testes Locais
```powershell
# Build completo
npm run build

# Verificar linting
npm run lint

# Testar em produção local
npm run build
npm run start
```

### Testes de Deploy
```powershell
# Deploy em branch de teste
.\quick-deploy.ps1 -Message "Teste de deploy"

# Verificar no GitHub Actions
# https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions
```

## 📚 Documentação

### Atualizando Documentação
- **README.md** - Documentação principal
- **COMO-USAR.md** - Guia rápido
- **SETUP.md** - Setup detalhado
- **CHANGELOG.md** - Histórico de mudanças
- **CONTRIBUTING.md** - Este guia

### Adicionando Páginas
1. Crie o arquivo em `src/app/(site)/nova-pagina/page.tsx`
2. Adicione ao menu em `src/components/Header.tsx`
3. Atualize o sitemap se necessário
4. Documente no README.md

### Adicionando Posts no Blog
1. Crie arquivo `.md` em `src/content/blog/`
2. Use o frontmatter:
   ```markdown
   ---
   title: "Título do Post"
   description: "Descrição do post"
   date: "2025-01-14"
   author: "Jenafree Labs"
   tags: ["tag1", "tag2"]
   ---
   ```

## 🚨 Problemas Conhecidos

### Build Falhando
```powershell
# Limpar cache
Remove-Item -Recurse -Force .next, out, node_modules
npm install
npm run build
```

### GitHub Actions Falhando
1. Verifique se o `next.config.ts` tem `output: 'export'`
2. Verifique se não há erros de ESLint
3. Verifique se todas as dependências estão instaladas

### Problemas de Performance
- Otimize imagens (use WebP quando possível)
- Verifique Lighthouse scores
- Minimize JavaScript bundles

## 📞 Suporte

### Canais de Comunicação
- **Issues no GitHub** - Para bugs e sugestões
- **Email** - contato@jenafreelabs.com
- **WhatsApp** - (11) 99999-9999

### Antes de Abrir uma Issue
1. Verifique se já existe uma issue similar
2. Use o template de issue apropriado
3. Inclua informações detalhadas:
   - Versão do Node.js
   - Sistema operacional
   - Passos para reproduzir
   - Logs de erro

## 🎯 Roadmap

### Próximas Funcionalidades
- [ ] Sistema de comentários no blog
- [ ] Página de portfólio detalhado
- [ ] Integração com CRM
- [ ] Analytics avançado
- [ ] Testes automatizados

### Melhorias de Performance
- [ ] Otimização de imagens
- [ ] Code splitting
- [ ] Service Worker
- [ ] PWA

---

**Obrigado por contribuir para o projeto da Jenafree Labs! 🚀**
