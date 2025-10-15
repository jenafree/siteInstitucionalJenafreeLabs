# ===============================================
# SCRIPT DE SETUP AUTOMATIZADO - JENAFREE
# ===============================================
# Este script automatiza todo o processo de setup
# e deploy do site institucional da Jenafree
# ===============================================

param(
    [switch]$SkipGit,
    [switch]$SkipBuild,
    [switch]$SkipDeploy,
    [string]$Branch = "main"
)

# Cores para output
$Green = "`e[32m"
$Yellow = "`e[33m"
$Red = "`e[31m"
$Blue = "`e[34m"
$Reset = "`e[0m"
$Bold = "`e[1m"

function Write-ColorOutput {
    param($Message, $Color = $White)
    Write-Host "$Color$Message$Reset"
}

function Write-Step {
    param($Step, $Description)
    Write-Host ""
    Write-ColorOutput "PASSO $Step: $Description" $Blue
    Write-Host "=" * 50
}

function Test-Command {
    param($Command)
    try {
        & $Command --version 2>$null
        return $true
    }
    catch {
        return $false
    }
}

# ===============================================
# VERIFICAÇÕES INICIAIS
# ===============================================

Write-ColorOutput "INICIANDO SETUP AUTOMATIZADO JENAFREE" $Bold
Write-ColorOutput "===============================================" $Blue

# Verificar se Node.js está instalado
Write-Step "1" "Verificando dependências do sistema"

if (-not (Test-Command "node")) {
    Write-ColorOutput "ERRO: Node.js nao encontrado! Instale em: https://nodejs.org/" $Red
    exit 1
}

if (-not (Test-Command "npm")) {
    Write-ColorOutput "ERRO: npm nao encontrado!" $Red
    exit 1
}

if (-not (Test-Command "git") -and -not $SkipGit) {
    Write-ColorOutput "ERRO: Git nao encontrado! Instale em: https://git-scm.com/" $Red
    exit 1
}

Write-ColorOutput "OK: Todas as dependencias estao instaladas!" $Green

# Verificar versões
$nodeVersion = node --version
$npmVersion = npm --version
Write-ColorOutput "📦 Node.js: $nodeVersion" $Yellow
Write-ColorOutput "📦 npm: $npmVersion" $Yellow

# ===============================================
# INSTALAÇÃO DE DEPENDÊNCIAS
# ===============================================

Write-Step "2" "Instalando dependências do projeto"

try {
    Write-ColorOutput "📥 Executando npm install..." $Yellow
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-ColorOutput "✅ Dependências instaladas com sucesso!" $Green
    } else {
        throw "Erro na instalação"
    }
}
catch {
    Write-ColorOutput "❌ Erro ao instalar dependências: $_" $Red
    exit 1
}

# ===============================================
# VERIFICAÇÃO DE CONFIGURAÇÃO
# ===============================================

Write-Step "3" "Verificando configuração do projeto"

# Verificar se next.config.ts está configurado corretamente
$nextConfigPath = "next.config.ts"
if (Test-Path $nextConfigPath) {
    $nextConfigContent = Get-Content $nextConfigPath -Raw
    if ($nextConfigContent -match "output.*export") {
        Write-ColorOutput "✅ next.config.ts configurado para export estático" $Green
    } else {
        Write-ColorOutput "⚠️  next.config.ts pode precisar de ajustes" $Yellow
    }
} else {
    Write-ColorOutput "❌ next.config.ts não encontrado!" $Red
    exit 1
}

# Verificar se workflow do GitHub Actions existe
$workflowPath = ".github/workflows/nextjs.yml"
if (Test-Path $workflowPath) {
    Write-ColorOutput "✅ Workflow do GitHub Actions configurado" $Green
} else {
    Write-ColorOutput "⚠️  Workflow do GitHub Actions não encontrado" $Yellow
}

# ===============================================
# BUILD DO PROJETO
# ===============================================

if (-not $SkipBuild) {
    Write-Step "4" "Fazendo build do projeto"
    
    try {
        Write-ColorOutput "🔨 Executando npm run build..." $Yellow
        npm run build
        
        if ($LASTEXITCODE -eq 0) {
            Write-ColorOutput "✅ Build concluído com sucesso!" $Green
            
            # Verificar se a pasta out foi criada
            if (Test-Path "out") {
                $outSize = (Get-ChildItem "out" -Recurse | Measure-Object -Property Length -Sum).Sum
                $outSizeMB = [math]::Round($outSize / 1MB, 2)
                Write-ColorOutput "📊 Tamanho do build: $outSizeMB MB" $Yellow
                Write-ColorOutput "📁 Arquivos gerados em: ./out/" $Yellow
            }
        } else {
            throw "Erro no build"
        }
    }
    catch {
        Write-ColorOutput "❌ Erro durante o build: $_" $Red
        Write-ColorOutput "💡 Verifique os logs acima para mais detalhes" $Yellow
        exit 1
    }
} else {
    Write-ColorOutput "⏭️  Build pulado (--SkipBuild)" $Yellow
}

# ===============================================
# OPERAÇÕES GIT
# ===============================================

if (-not $SkipGit) {
    Write-Step "5" "Preparando commit e push"
    
    # Verificar status do git
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-ColorOutput "📝 Arquivos modificados encontrados:" $Yellow
        Write-Host $gitStatus
        
        # Adicionar todos os arquivos
        Write-ColorOutput "📤 Adicionando arquivos ao git..." $Yellow
        git add .
        
        # Fazer commit
        $commitMessage = "Automated setup and deployment - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        Write-ColorOutput "💾 Fazendo commit: $commitMessage" $Yellow
        git commit -m $commitMessage
        
        if ($LASTEXITCODE -eq 0) {
            Write-ColorOutput "✅ Commit realizado com sucesso!" $Green
            
            # Push para o repositório
            Write-ColorOutput "🚀 Fazendo push para origin/$Branch..." $Yellow
            git push origin $Branch
            
            if ($LASTEXITCODE -eq 0) {
                Write-ColorOutput "✅ Push realizado com sucesso!" $Green
                Write-ColorOutput "🌐 Deploy iniciado no GitHub Actions!" $Blue
            } else {
                Write-ColorOutput "❌ Erro no push. Verifique suas credenciais Git." $Red
            }
        } else {
            Write-ColorOutput "❌ Erro no commit." $Red
        }
    } else {
        Write-ColorOutput "✅ Nenhuma alteração pendente no Git." $Green
    }
} else {
    Write-ColorOutput "⏭️  Operações Git puladas (--SkipGit)" $Yellow
}

# ===============================================
# INFORMAÇÕES FINAIS
# ===============================================

Write-ColorOutput ""
Write-ColorOutput "🎉 SETUP CONCLUÍDO COM SUCESSO!" $Bold
Write-ColorOutput "===============================================" $Green

Write-ColorOutput ""
Write-ColorOutput "📋 RESUMO DO QUE FOI FEITO:" $Blue
Write-ColorOutput "✅ Dependências instaladas" $Green
Write-ColorOutput "✅ Configuração verificada" $Green
if (-not $SkipBuild) { Write-ColorOutput "✅ Build executado" $Green }
if (-not $SkipGit) { Write-ColorOutput "✅ Commit e push realizados" $Green }

Write-ColorOutput ""
Write-ColorOutput "🔗 LINKS ÚTEIS:" $Blue
Write-ColorOutput "🌐 Site: https://jenafree.github.io/siteInstitucionalJenafreeLabs" $Yellow
Write-ColorOutput "⚙️  GitHub Actions: https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions" $Yellow
Write-ColorOutput "📁 Repositório: https://github.com/jenafree/siteInstitucionalJenafreeLabs" $Yellow

Write-ColorOutput ""
Write-ColorOutput "🚀 PRÓXIMOS PASSOS:" $Blue
Write-ColorOutput "1. Acesse o GitHub Actions para acompanhar o deploy" $Yellow
Write-ColorOutput "2. Configure o GitHub Pages se ainda não fez" $Yellow
Write-ColorOutput "3. Teste o site quando estiver online" $Yellow

Write-ColorOutput ""
Write-ColorOutput "💡 COMANDOS ÚTEIS:" $Blue
Write-ColorOutput "• npm run dev     - Executar em modo desenvolvimento" $Yellow
Write-ColorOutput "• npm run build   - Fazer build do projeto" $Yellow
Write-ColorOutput "• npm run lint    - Verificar código" $Yellow

Write-ColorOutput ""
Write-ColorOutput "✨ Obrigado por usar o script de setup da Jenafree!" $Green
