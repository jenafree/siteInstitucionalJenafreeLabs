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

function Write-Step {
    param($Step, $Description)
    Write-Host ""
    Write-Host "PASSO $Step - $Description" -ForegroundColor Blue
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
# VERIFICACOES INICIAIS
# ===============================================

Write-Host "INICIANDO SETUP AUTOMATIZADO JENAFREE" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Blue

# Verificar se Node.js esta instalado
Write-Step "1" "Verificando dependencias do sistema"

if (-not (Test-Command "node")) {
    Write-Host "ERRO: Node.js nao encontrado! Instale em: https://nodejs.org/" -ForegroundColor Red
    exit 1
}

if (-not (Test-Command "npm")) {
    Write-Host "ERRO: npm nao encontrado!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Command "git") -and -not $SkipGit) {
    Write-Host "ERRO: Git nao encontrado! Instale em: https://git-scm.com/" -ForegroundColor Red
    exit 1
}

Write-Host "OK: Todas as dependencias estao instaladas!" -ForegroundColor Green

# Verificar versoes
$nodeVersion = node --version
$npmVersion = npm --version
Write-Host "Node.js: $nodeVersion" -ForegroundColor Yellow
Write-Host "npm: $npmVersion" -ForegroundColor Yellow

# ===============================================
# INSTALACAO DE DEPENDENCIAS
# ===============================================

Write-Step "2" "Instalando dependencias do projeto"

try {
    Write-Host "Executando npm install..." -ForegroundColor Yellow
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "OK: Dependencias instaladas com sucesso!" -ForegroundColor Green
    } else {
        throw "Erro na instalacao"
    }
}
catch {
    Write-Host "ERRO ao instalar dependencias: $_" -ForegroundColor Red
    exit 1
}

# ===============================================
# VERIFICACAO DE CONFIGURACAO
# ===============================================

Write-Step "3" "Verificando configuracao do projeto"

# Verificar se next.config.ts esta configurado corretamente
$nextConfigPath = "next.config.ts"
if (Test-Path $nextConfigPath) {
    $nextConfigContent = Get-Content $nextConfigPath -Raw
    if ($nextConfigContent -match "output.*export") {
        Write-Host "OK: next.config.ts configurado para export estatico" -ForegroundColor Green
    } else {
        Write-Host "AVISO: next.config.ts pode precisar de ajustes" -ForegroundColor Yellow
    }
} else {
    Write-Host "ERRO: next.config.ts nao encontrado!" -ForegroundColor Red
    exit 1
}

# Verificar se workflow do GitHub Actions existe
$workflowPath = ".github/workflows/nextjs.yml"
if (Test-Path $workflowPath) {
    Write-Host "OK: Workflow do GitHub Actions configurado" -ForegroundColor Green
} else {
    Write-Host "AVISO: Workflow do GitHub Actions nao encontrado" -ForegroundColor Yellow
}

# ===============================================
# BUILD DO PROJETO
# ===============================================

if (-not $SkipBuild) {
    Write-Step "4" "Fazendo build do projeto"
    
    try {
        Write-Host "Executando npm run build..." -ForegroundColor Yellow
        npm run build
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "OK: Build concluido com sucesso!" -ForegroundColor Green
            
            # Verificar se a pasta out foi criada
            if (Test-Path "out") {
                $outSize = (Get-ChildItem "out" -Recurse | Measure-Object -Property Length -Sum).Sum
                $outSizeMB = [math]::Round($outSize / 1MB, 2)
                Write-Host "Tamanho do build: $outSizeMB MB" -ForegroundColor Yellow
                Write-Host "Arquivos gerados em: ./out/" -ForegroundColor Yellow
            }
        } else {
            throw "Erro no build"
        }
    }
    catch {
        Write-Host "ERRO durante o build: $_" -ForegroundColor Red
        Write-Host "Verifique os logs acima para mais detalhes" -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Host "Build pulado (--SkipBuild)" -ForegroundColor Yellow
}

# ===============================================
# OPERACOES GIT
# ===============================================

if (-not $SkipGit) {
    Write-Step "5" "Preparando commit e push"
    
    # Verificar status do git
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Host "Arquivos modificados encontrados:" -ForegroundColor Yellow
        Write-Host $gitStatus
        
        # Adicionar todos os arquivos
        Write-Host "Adicionando arquivos ao git..." -ForegroundColor Yellow
        git add .
        
        # Fazer commit
        $commitMessage = "Automated setup and deployment - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        Write-Host "Fazendo commit: $commitMessage" -ForegroundColor Yellow
        git commit -m $commitMessage
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "OK: Commit realizado com sucesso!" -ForegroundColor Green
            
            # Push para o repositorio
            Write-Host "Fazendo push para origin/$Branch..." -ForegroundColor Yellow
            git push origin $Branch
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "OK: Push realizado com sucesso!" -ForegroundColor Green
                Write-Host "Deploy iniciado no GitHub Actions!" -ForegroundColor Blue
            } else {
                Write-Host "ERRO no push. Verifique suas credenciais Git." -ForegroundColor Red
            }
        } else {
            Write-Host "ERRO no commit." -ForegroundColor Red
        }
    } else {
        Write-Host "OK: Nenhuma alteracao pendente no Git." -ForegroundColor Green
    }
} else {
    Write-Host "Operacoes Git puladas (--SkipGit)" -ForegroundColor Yellow
}

# ===============================================
# INFORMACOES FINAIS
# ===============================================

Write-Host ""
Write-Host "SETUP CONCLUIDO COM SUCESSO!" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green

Write-Host ""
Write-Host "RESUMO DO QUE FOI FEITO:" -ForegroundColor Blue
Write-Host "OK: Dependencias instaladas" -ForegroundColor Green
Write-Host "OK: Configuracao verificada" -ForegroundColor Green
if (-not $SkipBuild) { Write-Host "OK: Build executado" -ForegroundColor Green }
if (-not $SkipGit) { Write-Host "OK: Commit e push realizados" -ForegroundColor Green }

Write-Host ""
Write-Host "LINKS UTEIS:" -ForegroundColor Blue
Write-Host "Site: https://jenafree.github.io/siteInstitucionalJenafreeLabs" -ForegroundColor Yellow
Write-Host "GitHub Actions: https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions" -ForegroundColor Yellow
Write-Host "Repositorio: https://github.com/jenafree/siteInstitucionalJenafreeLabs" -ForegroundColor Yellow

Write-Host ""
Write-Host "PROXIMOS PASSOS:" -ForegroundColor Blue
Write-Host "1. Acesse o GitHub Actions para acompanhar o deploy" -ForegroundColor Yellow
Write-Host "2. Configure o GitHub Pages se ainda nao fez" -ForegroundColor Yellow
Write-Host "3. Teste o site quando estiver online" -ForegroundColor Yellow

Write-Host ""
Write-Host "COMANDOS UTEIS:" -ForegroundColor Blue
Write-Host "• npm run dev     - Executar em modo desenvolvimento" -ForegroundColor Yellow
Write-Host "• npm run build   - Fazer build do projeto" -ForegroundColor Yellow
Write-Host "• npm run lint    - Verificar codigo" -ForegroundColor Yellow

Write-Host ""
Write-Host "Obrigado por usar o script de setup da Jenafree!" -ForegroundColor Green
