const { Router } = require('express');
const routerDiet = Router();
const {diets} = require('../controllers/DietsController')
const {Diet, Recipe} = require("../db");


routerDiet.get('/', async (req, res) => {
    try{
        let todas = await diets()
        res.status(200).json(todas)
    }catch(err){
        res.status(404).json(err.message)
    }
})

module.exports = routerDiet
