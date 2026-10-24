"""仅用于本机预览；浏览器访问 http://127.0.0.1:8769。"""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 8769), SimpleHTTPRequestHandler)
    print("Preview: http://127.0.0.1:8769", flush=True)
    server.serve_forever()
