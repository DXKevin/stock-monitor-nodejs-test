const getList = (stock) => {
    return [
        { symbol: 'AAPL', name: 'Apple Inc.' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.' },
        { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
    ];   
}

const addNewData = (data) => {
    return {
        message: 'New stock data added successfully',
        data: data
    };
}


module.exports = {
    getList,
    addNewData
};