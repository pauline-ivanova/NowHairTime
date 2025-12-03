Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Next.js Development Server Startup" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "[1/4] Остановка старых процессов..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 1
Write-Host "       ✓ Процессы остановлены`n" -ForegroundColor Green

Write-Host "[2/4] Проверка зависимостей..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "       ⚠ node_modules не найден, устанавливаю зависимости..." -ForegroundColor Yellow
    npm install
    Write-Host "       ✓ Зависимости установлены`n" -ForegroundColor Green
} else {
    Write-Host "       ✓ Зависимости найдены`n" -ForegroundColor Green
}

Write-Host "[3/4] Проверка конфигурации..." -ForegroundColor Yellow
if (Test-Path "next.config.mjs") {
    Write-Host "       ✓ next.config.mjs найден" -ForegroundColor Green
} else {
    Write-Host "       ⚠ next.config.mjs не найден" -ForegroundColor Yellow
}
if (Test-Path "tsconfig.json") {
    Write-Host "       ✓ tsconfig.json найден" -ForegroundColor Green
} else {
    Write-Host "       ⚠ tsconfig.json не найден" -ForegroundColor Yellow
}
Write-Host ""

Write-Host "[4/4] Запуск сервера разработки..." -ForegroundColor Yellow
Write-Host "       → Сервер запускается на http://localhost:3000" -ForegroundColor Cyan
Write-Host "       → Ожидайте компиляции (10-20 секунд)...`n" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

npm run dev

