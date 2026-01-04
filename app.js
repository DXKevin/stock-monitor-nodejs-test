const handleStockRoute = require('./src/routes/stock');



const serverHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    req.path = req.url.split('?')[0];

    const stockData = handleStockRoute(req, res);
    if (stockData) {
        res.end(
            JSON.stringify(stockData)
        );
        return;
    }
    
}

module.exports = serverHandler;