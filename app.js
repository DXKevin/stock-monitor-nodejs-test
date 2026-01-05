const querystring = require('querystring');
const handleStockRoute = require('./src/routes/stock');

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({});
            return;
        }

        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }

        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        });

        req.on('end', () => {
            if (!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        });
    }); 

    return promise;
};





const serverHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    req.path = req.url.split('?')[0];

    req.query = querystring.parse(req.url.split('?')[1]);

    getPostData(req).then((postData) => {
        req.body = postData;

        const stockData = handleStockRoute(req, res);
        if (stockData) {
            res.end(
                JSON.stringify(stockData)
            );
            return;
        }

        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
    });  
}

module.exports = serverHandler;