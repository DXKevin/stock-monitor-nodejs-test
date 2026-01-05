const {SuccessModel} = require("../model/responseModel")
const {getList, addNewData} = require("../controllers/stock")

const handleStockRoute  = (req, res) => {
    // 定义处理路由的逻辑
    if (req.method === 'GET' && req.path === '/api/v1/stock/list') {

        const stock = req.query.stock || '';
        const listData = getList(stock)

        return new SuccessModel(listData)
    }

    if (req.method === 'POST' && req.path === '/api/v1/stock/add') {
        
        newData = addNewData(req.body);

        return new SuccessModel(newData)
    }

    if (req.method === 'POST' && req.path === '/api/v1/stock/delete') {
        return  {
            "message": "请求删除股票监控的接口",
        }
    }
}

module.exports = handleStockRoute;