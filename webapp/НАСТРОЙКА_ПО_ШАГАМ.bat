@echo off
chcp 65001 >nul
title Настройка автоматического деплоя - по шагам
color 0B

:MENU
cls
echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   ⚙️  НАСТРОЙКА АВТОМАТИЧЕСКОГО ДЕПЛОЯ               ║
echo ╚═══════════════════════════════════════════════════════╝
echo.
echo Выберите шаг:
echo.
echo   1. ШАГ 1: Настройка GitHub
echo   2. ШАГ 2: Инструкция по Netlify
echo   3. ШАГ 3: Запуск автоматического деплоя
echo   4. Проверить настройку
echo   5. Выход
echo.
set /p choice="Ваш выбор (1-5): "

if "%choice%"=="1" goto step1
if "%choice%"=="2" goto step2
if "%choice%"=="3" goto step3
if "%choice%"=="4" goto check
if "%choice%"=="5" goto end
goto MENU

:step1
cls
echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   ШАГ 1: Настройка GitHub                             ║
echo ╚═══════════════════════════════════════════════════════╝
echo.
echo Запускаю настройку GitHub...
echo.
cd /d "%~dp0\.."
call "webapp\БЫСТРАЯ_НАСТРОЙКА_GITHUB.bat"
echo.
pause
goto MENU

:step2
cls
echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   ШАГ 2: Подключение Netlify к GitHub                ║
echo ╚═══════════════════════════════════════════════════════╝
echo.
echo Инструкция:
echo.
echo 1. Откройте браузер
echo 2. Зайдите на: https://app.netlify.com/
echo 3. Войдите в аккаунт (или создайте)
echo.
echo 4. Нажмите: "Add new site" → "Import an existing project"
echo 5. Выберите: "GitHub"
echo 6. Выберите ваш репозиторий
echo.
echo 7. Настройки:
echo    Base directory:    webapp
echo    Build command:     (оставьте пустым)
echo    Publish directory: .
echo.
echo 8. Нажмите: "Deploy site"
echo.
echo Открыть Netlify в браузере?
set /p open="(y/n): "
if /i "%open%"=="y" (
    start https://app.netlify.com/
)
echo.
pause
goto MENU

:step3
cls
echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   ШАГ 3: Запуск автоматического деплоя                ║
echo ╚═══════════════════════════════════════════════════════╝
echo.
echo Выберите вариант:
echo.
echo   1. Запуск вручную (каждый раз при включении ПК)
echo   2. Автозапуск (запускается сам при включении ПК)
echo.
set /p autostart="Ваш выбор (1-2): "

if "%autostart%"=="1" (
    echo.
    echo Запускаю автоматический деплой...
    cd /d "%~dp0"
    start /B pythonw auto_deploy_background.py
    echo.
    echo ✅ Автоматический деплой запущен!
    echo    Он работает в фоне.
    echo.
    echo Логи сохраняются в: auto_deploy.log
) else if "%autostart%"=="2" (
    echo.
    echo Настройка автозапуска...
    echo.
    echo 1. Нажмите Win + R
    echo 2. Введите: shell:startup
    echo 3. Нажмите Enter
    echo 4. Скопируйте ярлык файла АВТОЗАПУСК_ПРИ_СТАРТЕ.bat
    echo    в открывшуюся папку
    echo.
    echo Открыть папку автозагрузки?
    set /p open="(y/n): "
    if /i "%open%"=="y" (
        start shell:startup
    )
    echo.
    echo ✅ Автозапуск настроен!
    echo    Теперь деплой будет запускаться автоматически
    echo    при включении компьютера.
)

echo.
pause
goto MENU

:check
cls
echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   Проверка настройки                                  ║
echo ╚═══════════════════════════════════════════════════════╝
echo.

REM Проверка Git
where git >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git установлен
) else (
    echo ❌ Git не установлен
    echo    Установите: https://git-scm.com/download/win
)

REM Проверка Python
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python установлен
) else (
    echo ❌ Python не установлен
    echo    Установите: https://www.python.org/
)

REM Проверка Git репозитория
cd /d "%~dp0\.."
if exist ".git" (
    echo ✅ Git репозиторий найден
    
    REM Проверка GitHub
    git remote -v >nul 2>&1
    if %errorlevel% equ 0 (
        echo ✅ GitHub подключен
        git remote -v
    ) else (
        echo ❌ GitHub не подключен
        echo    Запустите ШАГ 1
    )
) else (
    echo ❌ Git репозиторий не найден
    echo    Запустите ШАГ 1
)

REM Проверка Netlify CLI (опционально)
where netlify >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Netlify CLI установлен
) else (
    echo ℹ️  Netlify CLI не установлен (не обязательно)
    echo    Используется GitHub режим
)

echo.
echo Проверка завершена!
echo.
pause
goto MENU

:end
echo.
echo До свидания!
timeout /t 1 >nul
exit

