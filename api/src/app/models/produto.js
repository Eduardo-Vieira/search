const fs = require('fs');
const constant = require('../constants/constant');
/**
 * Model Produto
 */
const Produto = {
    
    // Consulta de pesquisa
    pesquisar: (param) => new Promise(resolve => {
        fs.readFile(`${constant.baseDir}/../data/mock_system_search_core.json`, function (err, data) {
            const dataProdutc = JSON.parse(data)['products'];
            resolve(dataProdutc.filter((produto)=>{ 
                const _title = produto.title.toLowerCase();
                if(_title.indexOf(param.toLowerCase())!=-1){
                    return produto;
                } 
            }));
        });
    })

}

module.exports = Produto;