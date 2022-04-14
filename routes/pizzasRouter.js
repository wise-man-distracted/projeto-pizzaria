const { Router } = require('express');
const pizzasController = require('../controllers/pizzasController')

const router = Router();
router.get('/pizzas', pizzasController.listar);
router.get('/pizzas/:id', pizzasController.mostrar);
router.get('/pizzas/busca', pizzasController.buscar);



module.exports = router;
