# Scripts de Automacao - Jenafree

Scripts PowerShell para automatizar o desenvolvimento e deploy do site.

## Scripts Disponiveis

### 1. `setup-simple.ps1` - Setup Completo
Executa todo o processo de configuracao e deploy:

```powershell
# Setup completo
.\setup-simple.ps1

# Setup sem Git
.\setup-simple.ps1 -SkipGit

# Setup sem build
.\setup-simple.ps1 -SkipBuild
```

### 2. `quick-deploy.ps1` - Deploy Rapido
Para deploy rapido de mudancas:

```powershell
# Deploy rapido
.\quick-deploy.ps1

# Deploy com mensagem personalizada
.\quick-deploy.ps1 -Message "Atualizacao da pagina principal"
```

## Como Usar

### Primeira Vez (Setup Inicial)
```powershell
.\setup-simple.ps1
```

### Desenvolvimento Diario
```powershell
# Para desenvolver
npm run dev

# Para publicar mudancas
.\quick-deploy.ps1
```

### Apenas Build Local
```powershell
.\setup-simple.ps1 -SkipGit
```

## Configuracao do GitHub Pages

Se for a primeira vez:
1. Vá para: https://github.com/jenafree/siteInstitucionalJenafreeLabs/settings/pages
2. Em "Source", selecione: "GitHub Actions"
3. Salve

## Links Uteis

- Site: https://jenafree.github.io/siteInstitucionalJenafreeLabs
- GitHub Actions: https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions
- Repositorio: https://github.com/jenafree/siteInstitucionalJenafreeLabs

## Comandos Manuais

```powershell
npm run dev      # Desenvolvimento
npm run build    # Build local
npm run lint     # Verificar codigo
```

## Solucao de Problemas

### Erro de Execucao
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Erro no Build
```powershell
# Limpar e tentar novamente
Remove-Item -Recurse -Force out, .next
.\setup-simple.ps1
```
