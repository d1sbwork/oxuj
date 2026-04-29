@echo off
chcp 65001 >nul
title Автоматический деплой (фон)

REM Переходим в папку webapp
cd /d "%~dp0"

REM Проверяем Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Python не установлен!
    echo.
    echo Установите Python: https://www.python.org/downloads/
    echo При установке отметьте "Add Python to PATH"
    echo.
    pause
    exit /b 1
)

REM Проверяем наличие скрипта
if not exist "auto_deploy_background.py" (
    echo [ОШИБКА] Файл auto_deploy_background.py не найден!
    pause
    exit /b 1
)

REM Проверяем, не запущен ли уже
tasklist /FI "IMAGENAME eq pythonw.exe" 2>nul | find /I "pythonw.exe" >nul
if %errorlevel% equ 0 (
    echo Автоматический деплой уже запущен!
    echo.
    echo Чтобы остановить:
    echo 1. Откройте Диспетчер задач (Ctrl+Shift+Esc)
    echo 2. Найдите процесс pythonw.exe
    echo 3. Завершите процесс
    echo.
    pause
    exit /b 0
)

REM Запускаем в фоне
echo Запускаю автоматический деплой в фоне...
start /B pythonw auto_deploy_background.py

REM Ждём немного, чтобы скрипт запустился
timeout /t 2 >nul

REM Проверяем, запустился ли
tasklist /FI "IMAGENAME eq pythonw.exe" 2>nul | find /I "pythonw.exe" >nul
if %errorlevel% equ 0 (
    echo.
    echo ╔═══════════════════════════════════════════════════════╗
    echo ║   ✅ АВТОМАТИЧЕСКИЙ ДЕПЛОЙ ЗАПУЩЕН!                   ║
    echo ╚═══════════════════════════════════════════════════════╝
    echo.
    echo Система работает в фоне.
    echo.
    echo Логи сохраняются в: auto_deploy.log
    echo.
    echo Чтобы остановить:
    echo 1. Откройте Диспетчер задач (Ctrl+Shift+Esc)
    echo 2. Найдите процесс pythonw.exe
    echo 3. Завершите процесс
    echo.
) else (
    echo.
    echo ⚠️  Не удалось запустить автоматический деплой
    echo    Проверьте логи или запустите снова
    echo.
)

timeout /t 3 >nul

