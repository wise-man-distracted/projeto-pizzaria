const pizzas = require('../database/pizzas.json')

module.exports = {
    listar: (req, res) => {
        res.render('pizzas', {
            pizzas: pizzas,
            busca: ''
          });
    },
    mostrar: (req, res) => {
        let pizzaId = req.params.id;
        let idProxima
        let idAnterior
        let posicao = pizzas.findIndex(p => p.id == pizzaId)
        let pizzaFind = pizzas.find(p => p.id == pizzaId);
        let pizza = pizzas[posicao]
        if(pizza.id == pizzas[pizzas.length -1].id ) {
            idProxima = pizzas[0].id
        } else {
            idProxima = pizza.id + 1
        }
        if(pizza.id == pizzas[0].id) {
            idAnterior = pizzas[pizzas.length -1].id
        } else {
            idAnterior = pizza.id - 1
        }
        console.log(idAnterior)
        console.log(idProxima)
        console.log(posicao)
        console.log(pizza.id)
        res.render('pizza', {
            pizza: pizzaFind,
            idAnterior: idAnterior,
            idProxima: idProxima
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