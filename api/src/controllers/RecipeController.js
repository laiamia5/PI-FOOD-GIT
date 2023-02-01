const axios = require('axios');
const {Recipe, Diet} = require("../db");
const {Op} = require('sequelize');

const key = 'apiKey=8497ccc7c6944dc28e71b321162fcecc'
let url = `https://api.spoonacular.com/recipes/complexSearch?${key}&number=100&addRecipeInformation=true`

const createRecipe = async (value)=> {
    const {title, summary, score, healthyness, image, steps,diets, healthScore, dishTypes} = value
    const crear = await Recipe.create({
        title,
        summary, 
        score, 
        healthyness, 
        image, 
        steps,
        healthScore,
        dishTypes
    })
    await crear.setDiets(diets)
    
    return crear
}

const getRecetas = async (value) => {
    let todoApi = []
    let resultados = await axios.get(url)
    let eso = await devuelveApi(resultados.data.results)
    eso.forEach((e) => e.title.includes(value) ?  todoApi.push(e) : null)

    let kkk = await Recipe.findAll({
        where:{ title: {[Op.iLike]: `%${value}%`} },
        include:{model: Diet , through: {attributes: []}}
    })
    let infoBDD2 = await devuelveBdd(kkk)
        todoApi.push(...infoBDD2)

    return todoApi
}

const getRecipeById = async (id) => {
    let foundApi= await axios.get(url);
    let infoAPI = foundApi.data.results
    let asi = await devuelveApi(infoAPI)
    let infoBDD = await Recipe.findAll({include:{model: Diet , through: {attributes: []}}})
    let infoBDD2 = await devuelveBdd(infoBDD)
    let todos = [...asi, ...infoBDD2]

    let encontrados = todos.find((e) => e.id == id)
    return encontrados
}

const primerosDiez = async () => {
    let esto = await axios.get(url)
    let todoAPI = await devuelveApi(esto.data.results)
    let infoBDD = await Recipe.findAll({include:{model: Diet , through: {attributes: []}}})
    let infoBDD2 = await devuelveBdd(infoBDD)
    let todos = [ ...infoBDD2, ...todoAPI ]

    return todos
}

const deleteRecipe = async (id) => {
        Recipe.destroy({
            where:{
                id: id
            }
        })
        return { reci : 'se ha borrado exitosamente'}
}


//----------------------------------------------------------------------------------------
const devuelveApi = async (arreglo) => {
    let newArreglo = []
    await arreglo.forEach((e) => {
            newArreglo.push({
                id: e.id,
                title:e.title,
                summary: e.summary, 
                healthScore: e.healthScore, 
                image: e.image, 
                diets: e.diets,
                dishTypes: e.dishTypes,
                steps: e.analyzedInstructions[0]?.steps.map((e) => {
                    return `${e.number} ${e.step}`
                })

            })
    })
    return newArreglo
}

const devuelveBdd = async (arreglo) => {
    nuevoArreglo = []

    await arreglo.forEach((e) => {

        nuevoArreglo.push({
        id: e.id,
        title: e.title,
        summary: e.summary,
        score: e.score,
        healthyness: e.healthyness,
        image: e.image,
        dishTypes: e.dishTypes ? e.dishTypes.split('-') : [], //ver q lo tengo q escribir de una forma especial al hacer el post
        steps: e.steps ? e.steps.split('-') : [], //ver q lo tengo q escribir de una forma especial al hacer el post
        healthScore: e.healthScore,
        diets: e.diets.map((el) => el.name) //hacer un select
        }) 
    })

    return nuevoArreglo
}

module.exports = {createRecipe, getRecetas,  getRecipeById, primerosDiez, deleteRecipe}


