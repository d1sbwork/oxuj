@echo off
REM Автозапуск автоматического деплоя при старте Windows
REM Поместите ярлык этого файла в папку автозагрузки:
REM Win+R → shell:startup

chcp 65001 >nul
cd /d "%~dp0"

REM Ждём немного, чтобы система загрузилась
timeout /t 10 >nul

REM Проверяем Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    exit /b 1
)

REM Проверяем, не запущен ли уже
tasklist /FI "IMAGENAME eq pythonw.exe" 2>nul | find /I "pythonw.exe" >nul
if %errorlevel% equ 0 (
    exit /b 0
)

REM Запускаем в фоне
start /B pythonw auto_deploy_background.py

exit

