const http = require('http');

const serverHandler = require('../app');
const PORT = 7000;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})