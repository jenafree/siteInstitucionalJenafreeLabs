# ===============================================
# 🛠️ SCRIPT DE DESENVOLVIMENTO - JENAFREE
# ===============================================
# Script para desenvolvimento diário
# ===============================================

param(
    [switch]$Build,
    [switch]$Deploy,
    [switch]$Clean
)

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

Write-ColorOutput "🛠️  MODO DESENVOLVIMENTO JENAFREE" $Bold
Write-ColorOutput "=================================" $Blue

if ($Clean) {
    Write-ColorOutput "🧹 Limpando arquivos temporários..." $Yellow
    if (Test-Path "out") { Remove-Item "out" -Recurse -Force }
    if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force }
    Write-ColorOutput "✅ Limpeza concluída!" $Green
}

if ($Build) {
    Write-ColorOutput "🔨 Fazendo build..." $Yellow
    npm run build
    if ($LASTEXITCODE -eq 0) {
        Write-ColorOutput "✅ Build concluído!" $Green
    } else {
        Write-ColorOutput "❌ Erro no build!" $Red
        exit 1
    }
}

if ($Deploy) {
    Write-ColorOutput "🚀 Fazendo deploy..." $Yellow
    git add .
    git commit -m "Deploy automático - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-ColorOutput "✅ Deploy concluído!" $Green
        Write-ColorOutput "🌐 Site: https://jenafree.github.io/siteInstitucionalJenafreeLabs" $Yellow
    } else {
        Write-ColorOutput "❌ Erro no deploy!" $Red
        exit 1
    }
}

if (-not $Build -and -not $Deploy -and -not $Clean) {
    Write-ColorOutput "🚀 Iniciando servidor de desenvolvimento..." $Yellow
    npm run dev
}
