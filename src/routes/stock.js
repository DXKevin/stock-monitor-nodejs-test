const handleStockRoute  = (req, res) => {
    // 定义处理路由的逻辑
    if (req.method === 'GET' && req.path === '/api/v1/stock/list') {
        return  {
            "message": "请求股票监控列表的接口",
        }
    }

    if (req.method === 'POST' && req.path === '/api/v1/stock/add') {
        return  {
            "message": "请求添加股票监控的接口",
        }
    }

    if (req.method === 'POST' && req.path === '/api/v1/stock/delete') {
        return  {
            "message": "请求删除股票监控的接口",
        }
    }
}

module.exports = handleStockRoute;