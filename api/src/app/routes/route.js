const produtoController = require('../controllers/produto-controller');

const routes = (server) => {
    //router search 
    server.get('/search', produtoController.all)

}

module.exports = routes;