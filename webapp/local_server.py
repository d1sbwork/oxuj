#!/usr/bin/env python3
"""
Простой локальный сервер для тестирования приложения
"""
import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Добавляем заголовки для CORS и правильной работы
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Переходим в директорию скрипта
    os.chdir(Path(__file__).parent)
    
    Handler = MyHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("="*60)
        print("🚀 ЛОКАЛЬНЫЙ СЕРВЕР ЗАПУЩЕН!")
        print("="*60)
        print(f"\n📱 URL: {url}")
        print(f"\n📋 Откройте в браузере: {url}")
        print("\n⚠️  ВАЖНО: Для Telegram нужен HTTPS URL!")
        print("   Это только для локального тестирования.")
        print("\n" + "="*60)
        print("\nДля остановки нажмите Ctrl+C")
        print("="*60 + "\n")
        
        # Автоматически открываем браузер
        try:
            webbrowser.open(url)
        except:
            pass
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n⏹️  Сервер остановлен")
            httpd.shutdown()

if __name__ == "__main__":
    main()











