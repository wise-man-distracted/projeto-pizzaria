const pizzas = require('../database/pizzas.json')

module.exports = {
    listar: (req, res) => {
        res.render('pizzas', {
            pizzas: pizzas
          });
    },
    mostrar: (req, res) => {
        let pizzaId = req.params.id;
        let pizza = pizzas.find(p => p.id == pizzaId);
        res.render('pizza', {
            pizza: pizza
        })
    },
    buscar: (req, res) => {
        console.log(req.query);
    }
}