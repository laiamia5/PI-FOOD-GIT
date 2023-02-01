const { Router } = require('express');
const routerRec = Router();
const {createRecipe, getRecetas, getRecipeById, primerosDiez, deleteRecipe} = require('../controllers/RecipeController')

routerRec.get('/diez' , async (req, res) => {
    try{
        let si = await primerosDiez()
        res.status(200).json(si)
    }catch(err){
        res.status(404).json(err.message)
    }
})

routerRec.post('/' , async(req,res) => {
    var {title, summary} = req.body
    if (!title) return res.status(400).send({error: 'Debe ingresar un titulo'})
    if (!summary) return res.status(400).send({error: 'Debe ingresar un resumen del plato'})
    try {
        let receta = await createRecipe(req.body)
        res.status(200).json(receta)
    } catch (err) {
        res.status(404).json(err.message)
    }
} )

routerRec.get('/' , async(req, res) => {
    try{
        const {title} = req.query
        const ello = await getRecetas(title)
        res.status(200).json(ello)
    }catch(err){
        res.status(404).json(err.message)
    }
})

routerRec.get('/:id' , async(req, res) => {
    try{
        const {id} = req.params
        let hecho= await getRecipeById(id)
        res.status(200).json(hecho)
    }catch(err){
        res.status(404).json({error:'no se ha encontrado receta con ese id'})
    }
})

routerRec.delete('/:id/delete' , async(req, res) => {
    const {id} = req.params
    try{
        let deleted = await deleteRecipe(id)
        res.status(200).json(deleted)
    }catch(err){
        res.status(404).json({error:'no se ha encontrado receta con ese id'})
    }
})



module.exports = routerRec
