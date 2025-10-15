# ===============================================
# SCRIPT DE DEPLOY RAPIDO - JENAFREE
# ===============================================

param(
    [string]$Message = "Deploy automatico"
)

Write-Host "DEPLOY RAPIDO JENAFREE" -ForegroundColor Green
Write-Host "=====================" -ForegroundColor Blue

# Verificar se estamos no diretorio correto
if (-not (Test-Path "package.json")) {
    Write-Host "ERRO: Execute este script na pasta do projeto!" -ForegroundColor Red
    exit 1
}

# Build
Write-Host "Fazendo build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO no build!" -ForegroundColor Red
    exit 1
}

Write-Host "OK: Build concluido!" -ForegroundColor Green

# Git add, commit e push
Write-Host "Fazendo commit e push..." -ForegroundColor Yellow

$commitMsg = "$Message - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

git add .
git commit -m $commitMsg
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "OK: Deploy iniciado!" -ForegroundColor Green
    Write-Host "Acompanhe em: https://github.com/jenafree/siteInstitucionalJenafreeLabs/actions" -ForegroundColor Yellow
    Write-Host "Site: https://jenafree.github.io/siteInstitucionalJenafreeLabs" -ForegroundColor Yellow
} else {
    Write-Host "ERRO no push!" -ForegroundColor Red
    exit 1
}
