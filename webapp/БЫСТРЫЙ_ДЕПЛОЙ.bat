@echo off
chcp 65001 >nul
echo ========================================
echo   БЫСТРЫЙ ДЕПЛОЙ В TELEGRAM
echo ========================================
echo.

REM Проверяем наличие Netlify CLI
where netlify >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Netlify CLI не установлен!
    echo.
    echo Установите Netlify CLI:
    echo npm install -g netlify-cli
    echo.
    echo Или используйте GitHub Desktop для загрузки на GitHub
    echo (Netlify автоматически обновит сайт)
    echo.
    pause
    exit /b 1
)

echo [1/3] Переход в папку webapp...
cd /d "%~dp0"
if not exist "index.html" (
    echo [ОШИБКА] Файл index.html не найден!
    pause
    exit /b 1
)

echo [2/3] Деплой на Netlify...
netlify deploy --prod --dir .

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   ✓ ДЕПЛОЙ УСПЕШЕН!
    echo ========================================
    echo.
    echo Изменения появятся в Telegram через 1-2 минуты
    echo Обновите мини-приложение в Telegram
    echo.
) else (
    echo.
    echo ========================================
    echo   ✗ ОШИБКА ДЕПЛОЯ
    echo ========================================
    echo.
    echo Попробуйте:
    echo 1. netlify login
    echo 2. netlify link
    echo 3. Запустите этот скрипт снова
    echo.
)

pause

