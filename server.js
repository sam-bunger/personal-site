const express = require('express');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

config = 
dev ?
{
  port: 80
}
:
{
  port: 80
}


app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.get('/', async (req, res) => res.send(await app.renderToHTML(req, res, '/home', req.query)));

  server.get('/resume', async (req, res) => {
    res.setHeader('Content-type', 'application/pdf');
    res.send(await fs.readFileSync("./static/resume.pdf"));
  });

  server.get('/static/*', async (req, res) => handle(req, res));

  server.get('/_next/*', async (req, res) => handle(req, res));

  //server.get('*', async (req, res) => res.send(await app.renderToHTML(req, res, '/404', req.query)));

  server.listen(config.port, (error) => {
    if (error) throw error;
    console.info(`VXN Frontend is listening on port ${config.port}`);
  });
  
});
