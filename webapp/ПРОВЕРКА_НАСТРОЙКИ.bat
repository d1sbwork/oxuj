@echo off
chcp 65001 >nul
title Проверка настройки автоматического деплоя
color 0E

echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   🔍 ПРОВЕРКА НАСТРОЙКИ АВТОМАТИЧЕСКОГО ДЕПЛОЯ       ║
echo ╚═══════════════════════════════════════════════════════╝
echo.

set ERRORS=0
set WARNINGS=0

REM Переходим в корневую папку проекта
cd /d "%~dp0\.."

echo [ПРОВЕРКА 1] Python...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    python --version
    echo ✅ Python установлен
) else (
    echo ❌ Python НЕ установлен
    echo    Скачайте: https://www.python.org/downloads/
    set /a ERRORS+=1
)
echo.

echo [ПРОВЕРКА 2] Git...
where git >nul 2>&1
if %errorlevel% equ 0 (
    git --version
    echo ✅ Git установлен
) else (
    echo ❌ Git НЕ установлен
    echo    Скачайте: https://git-scm.com/download/win
    set /a ERRORS+=1
)
echo.

echo [ПРОВЕРКА 3] Git конфигурация...
git config user.name >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git имя настроено: 
    git config user.name
) else (
    echo ⚠️  Git имя НЕ настроено
    echo    Запустите: БЫСТРАЯ_НАСТРОЙКА_GITHUB.bat
    set /a WARNINGS+=1
)

git config user.email >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git email настроен
) else (
    echo ⚠️  Git email НЕ настроен
    echo    Запустите: БЫСТРАЯ_НАСТРОЙКА_GITHUB.bat
    set /a WARNINGS+=1
)
echo.

echo [ПРОВЕРКА 4] Git репозиторий...
if exist ".git" (
    echo ✅ Git репозиторий найден
) else (
    echo ❌ Git репозиторий НЕ найден
    echo    Запустите: БЫСТРАЯ_НАСТРОЙКА_GITHUB.bat
    set /a ERRORS+=1
)
echo.

echo [ПРОВЕРКА 5] Подключение к GitHub...
git remote -v >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ GitHub подключен:
    git remote -v
) else (
    echo ❌ GitHub НЕ подключен
    echo    Запустите: БЫСТРАЯ_НАСТРОЙКА_GITHUB.bat
    set /a ERRORS+=1
)
echo.

echo [ПРОВЕРКА 6] Файлы проекта...
cd webapp
if exist "index.html" (
    echo ✅ index.html найден
) else (
    echo ❌ index.html НЕ найден
    set /a ERRORS+=1
)

if exist "style.css" (
    echo ✅ style.css найден
) else (
    echo ⚠️  style.css НЕ найден
    set /a WARNINGS+=1
)

if exist "app.js" (
    echo ✅ app.js найден
) else (
    echo ⚠️  app.js НЕ найден
    set /a WARNINGS+=1
)
echo.

echo [ПРОВЕРКА 7] Скрипт автоматического деплоя...
if exist "auto_deploy_background.py" (
    echo ✅ auto_deploy_background.py найден
) else (
    echo ❌ auto_deploy_background.py НЕ найден
    set /a ERRORS+=1
)
echo.

echo [ПРОВЕРКА 8] Автоматический деплой запущен...
tasklist /FI "IMAGENAME eq pythonw.exe" 2>nul | find /I "pythonw.exe" >nul
if %errorlevel% equ 0 (
    echo ✅ Автоматический деплой запущен (процесс pythonw.exe найден)
) else (
    echo ⚠️  Автоматический деплой НЕ запущен
    echo    Запустите: ЗАПУСТИТЬ_АВТОДЕПЛОЙ_В_ФОНЕ.bat
    set /a WARNINGS+=1
)
echo.

echo [ПРОВЕРКА 9] Логи...
if exist "auto_deploy.log" (
    echo ✅ Лог файл найден
    echo    Последние записи:
    powershell -Command "Get-Content auto_deploy.log -Tail 3"
) else (
    echo ℹ️  Лог файл ещё не создан (это нормально, если скрипт не запускался)
)
echo.

echo ╔═══════════════════════════════════════════════════════╗
echo ║   РЕЗУЛЬТАТ ПРОВЕРКИ                                  ║
echo ╚═══════════════════════════════════════════════════════╝
echo.

if %ERRORS% equ 0 (
    if %WARNINGS% equ 0 (
        echo ✅ ВСЁ ОТЛИЧНО! Настройка завершена успешно!
        echo.
        echo Система готова к работе.
        echo Редактируйте файлы - всё будет автоматически деплоиться!
    ) else (
        echo ⚠️  Есть предупреждения (%WARNINGS%), но система может работать
        echo.
        echo Рекомендуется исправить предупреждения.
    )
) else (
    echo ❌ Обнаружены ошибки (%ERRORS%)
    echo.
    echo Исправьте ошибки перед использованием системы.
    echo.
    echo Следующие шаги:
    if %ERRORS% gtr 0 (
        echo 1. Запустите: БЫСТРАЯ_НАСТРОЙКА_GITHUB.bat
    )
    echo 2. Проверьте настройки Netlify
    echo 3. Запустите проверку снова
)

echo.
pause

