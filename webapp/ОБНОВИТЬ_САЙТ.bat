@echo off
chcp 65001 >nul
title Обновление сайта в Telegram
color 0A

echo.
echo ╔════════════════════════════════════════╗
echo ║   ОБНОВЛЕНИЕ САЙТА В TELEGRAM         ║
echo ╚════════════════════════════════════════╝
echo.

REM Переходим в папку webapp
cd /d "%~dp0"

echo [ШАГ 1] Проверка файлов...
if not exist "index.html" (
    echo [ОШИБКА] Файл index.html не найден!
    pause
    exit /b 1
)
echo ✓ Файлы найдены
echo.

echo [ШАГ 2] Выберите способ обновления:
echo.
echo   1. Через GitHub (автоматический деплой)
echo   2. Через Netlify CLI (быстрый деплой)
echo   3. Открыть папку для ручной загрузки
echo   4. Отмена
echo.
set /p choice="Ваш выбор (1-4): "

if "%choice%"=="1" goto github
if "%choice%"=="2" goto netlify
if "%choice%"=="3" goto manual
if "%choice%"=="4" goto end
goto end

:github
echo.
echo [ШАГ 3] Открываю GitHub Desktop...
echo Если GitHub Desktop не установлен, скачайте его:
echo https://desktop.github.com/
echo.
start "" "C:\Users\%USERNAME%\AppData\Local\GitHubDesktop\GitHubDesktop.exe" 2>nul
if %errorlevel% neq 0 (
    echo GitHub Desktop не найден. Открываю веб-сайт...
    start https://desktop.github.com/
    echo.
    echo Инструкция:
    echo 1. Установите GitHub Desktop
    echo 2. Откройте репозиторий: %CD%
    echo 3. Сделайте Commit и Push
    echo 4. Netlify автоматически обновит сайт
)
goto end

:netlify
echo.
echo [ШАГ 3] Проверка Netlify CLI...
where netlify >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Netlify CLI не установлен!
    echo.
    echo Установите:
    echo npm install -g netlify-cli
    echo.
    echo Или используйте вариант 1 (GitHub)
    pause
    goto end
)

echo [ШАГ 4] Деплой на Netlify...
netlify deploy --prod --dir .

if %errorlevel% equ 0 (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║   ✓ ДЕПЛОЙ УСПЕШЕН!                    ║
    echo ╚════════════════════════════════════════╝
    echo.
    echo Изменения появятся в Telegram через 1-2 минуты
) else (
    echo.
    echo [ОШИБКА] Деплой не удался
    echo Попробуйте: netlify login
)
goto end

:manual
echo.
echo [ШАГ 3] Открываю папку...
explorer .
echo.
echo Инструкция:
echo 1. Зайдите на https://app.netlify.com/
echo 2. Выберите ваш сайт
echo 3. Перетащите папку webapp в область "Deploy manually"
echo.
goto end

:end
echo.
pause

