"""
Простой HTTP сервер для локального тестирования веб-приложения
Для продакшена используйте GitHub Pages, Netlify или Vercel
"""
import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 8000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print(f"🌐 Локальный сервер запущен!")
        print(f"📱 URL: {url}")
        print("=" * 60)
        print("\n⚠️  ВАЖНО: Для Telegram мини-приложения нужен HTTPS!")
        print("   Используйте ngrok или разместите на хостинге")
        print("\n💡 Для тестирования в браузере откройте:", url)
        print("\n🛑 Нажмите Ctrl+C для остановки")
        print("=" * 60)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Сервер остановлен")

if __name__ == "__main__":
    main()














