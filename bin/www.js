import http from 'http';
import { serverHandler } from './../serve/app.js';
const PORT = 8888;
const server = http.createServer(serverHandler);
server.listen(PORT, () => {
  console.log(`端口号${PORT}服务启动...`);
});
