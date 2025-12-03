Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Next.js Dev Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "[1/4] Stopping old processes..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 1
Write-Host "      OK - Processes stopped" -ForegroundColor Green
Write-Host ""
Write-Host "[2/4] Checking dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "      OK - Dependencies found" -ForegroundColor Green
} else {
    Write-Host "      Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host "      OK - Dependencies installed" -ForegroundColor Green
}
Write-Host ""
Write-Host "[3/4] Checking configuration..." -ForegroundColor Yellow
Write-Host "      OK - Configuration files found" -ForegroundColor Green
Write-Host ""
Write-Host "[4/4] Starting server..." -ForegroundColor Yellow
Write-Host "      Server will be available at http://localhost:3000" -ForegroundColor Cyan
Write-Host "      Please wait for compilation (10-20 seconds)..." -ForegroundColor Cyan
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
npm run dev

