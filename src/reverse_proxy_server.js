const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/doctorsView*', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true, pathRewrite: {'^/doctorsView' : '/doctorsView'} }));

app.all('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(4000);
