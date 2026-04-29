@echo off
chcp 65001 >nul
title Автоматический деплой в Telegram
color 0B

echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   🤖 АВТОМАТИЧЕСКИЙ ДЕПЛОЙ В TELEGRAM                ║
echo ╚═══════════════════════════════════════════════════════╝
echo.
echo 📝 Я буду отслеживать изменения в файлах
echo 🚀 И автоматически деплоить их в Telegram
echo.
echo 💡 Просто редактируйте файлы - всё остальное автоматически!
echo.

REM Переходим в папку webapp
cd /d "%~dp0"

REM Проверяем Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Python не установлен!
    echo.
    echo Установите Python: https://www.python.org/downloads/
    pause
    exit /b 1
)

REM Проверяем наличие скрипта
if not exist "auto_deploy.py" (
    echo [ОШИБКА] Файл auto_deploy.py не найден!
    pause
    exit /b 1
)

echo [ШАГ 1] Выберите режим деплоя:
echo.
echo   1. GitHub (автоматический через Netlify) - РЕКОМЕНДУЕТСЯ
echo   2. Netlify CLI (прямой деплой)
echo.
set /p mode="Ваш выбор (1-2): "

if "%mode%"=="1" (
    echo.
    echo [ШАГ 2] Настройка GitHub режима...
    echo.
    echo Убедитесь, что:
    echo   ✓ Репозиторий подключен к GitHub
    echo   ✓ Netlify подключен к GitHub репозиторию
    echo   ✓ Git настроен (git config --global user.name и user.email)
    echo.
    pause
    echo.
    echo [ШАГ 3] Запуск мониторинга...
    python auto_deploy.py --github
) else if "%mode%"=="2" (
    echo.
    echo [ШАГ 2] Проверка Netlify CLI...
    where netlify >nul 2>&1
    if %errorlevel% neq 0 (
        echo [ОШИБКА] Netlify CLI не установлен!
        echo.
        echo Установите: npm install -g netlify-cli
        pause
        exit /b 1
    )
    echo.
    echo [ШАГ 3] Запуск мониторинга...
    python auto_deploy.py --netlify
) else (
    echo Неверный выбор!
    pause
    exit /b 1
)

pause

