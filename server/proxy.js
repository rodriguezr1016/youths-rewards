// /api/proxy.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
 createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname.startsWith('/server')) {
      // Handle API requests here or forward them to your server
      // For example, if your server is running on localhost:3001
      const server = createServer(app.getRequestHandler());
      server.listen(3001, () => {
        console.log('Server running on http://localhost:3001');
      });
      return;
    }

    handle(req, res, parsedUrl);
 }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
 });
});