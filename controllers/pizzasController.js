const pizzas = require('../database/pizzas.json')

module.exports = {
    listar: (req,res) => {
        res.render('pizzas', {
            pizzas: pizzas
          });
    }
}