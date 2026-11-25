import http from 'node:http';
import { handleRegistration } from './register-handler.mjs';
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.url === '/api/health') { res.writeHead(200); return res.end(JSON.stringify({ ok: true })); }
  if (req.url !== '/api/register') { res.writeHead(404); return res.end(JSON.stringify({ error: 'NOT_FOUND' })); }
  if (req.method !== 'POST') { res.writeHead(405); return res.end(JSON.stringify({ error: 'METHOD_NOT_ALLOWED' })); }
  let chunks = '';
  req.on('data', c => { chunks += c; if (chunks.length > 16384) req.destroy(); });
  req.on('end', () => {
    let body;
    try { body = JSON.parse(chunks); } catch { res.writeHead(400); return res.end(JSON.stringify({ error: 'MALFORMED_JSON' })); }
    const result = handleRegistration(body);
    res.writeHead(result.status); res.end(JSON.stringify(result.body));
  });
});
server.listen(4174, '127.0.0.1', () => console.log('Registration API: http://127.0.0.1:4174'));
