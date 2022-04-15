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
        let trechoBuscado = req.query.q
        if(!trechoBuscado) {
            res.redirect('/pizzas')
        } else {
            let resultado = pizzas.filter((obj)=>{
                return Object.keys(obj).reduce((acc, curr)=>{
                      return acc || obj[curr].toString().toLowerCase().includes(trechoBuscado);
                }, false);
            }); 
            res.render('pizzas', {
                pizzas: resultado,
                busca: trechoBuscado
              });
        }
    }
}