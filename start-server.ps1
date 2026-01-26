Write-Host "Starting local server for Synapse Portfolio..." -ForegroundColor Green
Write-Host ""
Write-Host "Your website will be available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

Set-Location $PSScriptRoot
npx --yes http-server -p 8000 -o
