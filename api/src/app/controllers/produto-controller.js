const constant = require('../constants/constant');

/**
 * Controller Produto
 * O objeto produto server para refenciar os metodos no routes sem que fique muito poluido.
 */

 //Model Tipos
const produto = require('../models/produto');

const controller = {
    all: (req, res, next)=>{
        if(req.query.terms){
            produto.pesquisar(req.query.terms).then(data=>{
                res.send(200, {code:200, data: data, message: constant.message.Ok200});
            });
        }else{
            res.send(400,{code:400, message: constant.message.Err400});
        }
        next();        
    }
}

module.exports = controller