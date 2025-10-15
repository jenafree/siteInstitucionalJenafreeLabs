# 🚀 Scripts de Automação - Jenafree

Este projeto inclui scripts PowerShell para automatizar todo o processo de setup e desenvolvimento.

## 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (vem com Node.js)
- **Git** (para deploy)
- **PowerShell** (Windows)

## 🛠️ Scripts Disponíveis

### 1. `setup.ps1` - Setup Completo

Executa todo o processo de configuração e deploy:

```powershell
# Setup completo (recomendado)
.\setup.ps1

# Setup sem operações Git
.\setup.ps1 -SkipGit

# Setup sem build
.\setup.ps1 -SkipBuild

# Setup sem deploy
.\setup.ps1 -SkipDeploy

# Setup para branch específica
.\setup.ps1 -Branch "develop"
```

**O que o script faz:**
- ✅ Verifica dependências (Node.js, npm, Git)
- ✅ Instala dependências do projeto
- ✅ Verifica configuração (next.config.ts, workflow)
- ✅ Executa build do projeto
- ✅ Faz commit e push automático
- ✅ Inicia deploy no GitHub Actions

### 2. `dev.ps1` - Desenvolvimento Diário

Script mais leve para uso diário:

```powershell
# Iniciar servidor de desenvolvimento
.\dev.ps1

# Apenas fazer build
.\dev.ps1 -Build

# Apenas fazer deploy
.\dev.ps1 -Deploy

# Build + Deploy
.\dev.ps1 -Build -Deploy

# Limpar arquivos temporários
.\dev.ps1 -Clean
```

## 🎯 Casos de Uso

### Primeira Configuração
```powershell
.\setup.ps1
```

### Desenvolvimento Diário
```powershell
# Para desenvolver
.\dev.ps1

# Para publicar mudanças
.\dev.ps1 -Build -Deploy
```

### Apenas Build Local
```powershell
.\setup.ps1 -SkipGit
```

### Deploy Rápido
```powershell
.\dev.ps1 -Deploy
```

## 🔧 Configuração do GitHub Pages

Se for a primeira vez usando GitHub Pages:

1. Vá para: `https://github.com/jenafree/siteInstitucionalJenafreeLabs/settings/pages`
2. Em **Source**, selecione: **GitHub Actions**
3. Salve as configurações

## 📊 Monitoramento

Após executar os scripts, acompanhe o deploy:

- **GitHub Actions**: https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions
- **Site**: https://jenafree.github.io/siteInstitucionalJenafreeLabs

## 🚨 Solução de Problemas

### Erro de Execução de Scripts
```powershell
# Permitir execução de scripts (execute como administrador)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Erro no Build
```powershell
# Limpar e tentar novamente
.\dev.ps1 -Clean
.\setup.ps1
```

### Erro no Git
- Verifique se você está logado: `git config --global user.name`
- Configure credenciais se necessário

### Node.js não encontrado
- Instale Node.js: https://nodejs.org/
- Reinicie o PowerShell após instalação

## 📝 Logs e Debugging

Os scripts mostram informações detalhadas:
- ✅ Verde: Sucesso
- ⚠️ Amarelo: Aviso
- ❌ Vermelho: Erro
- 🔧 Azul: Informação

## 🔄 Workflow Recomendado

1. **Desenvolvimento**:
   ```powershell
   .\dev.ps1
   ```

2. **Testar build**:
   ```powershell
   .\dev.ps1 -Build
   ```

3. **Publicar**:
   ```powershell
   .\dev.ps1 -Deploy
   ```

## 💡 Dicas

- Use `.\setup.ps1` para configuração inicial completa
- Use `.\dev.ps1` para desenvolvimento diário
- O deploy é automático via GitHub Actions
- Sempre verifique o status no GitHub Actions após deploy

---

**Desenvolvido com ❤️ para Jenafree Labs**
