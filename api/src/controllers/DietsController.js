const axios = require('axios');
const {Diet} = require("../db");

let arr= [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto ovo vegetarian",
  "vegan",
  "pescatarian",
  "paleolithic",
  "primal",
  "whole 30",
  "dairy free",
  "fodmap friendly"
]

async function diets() {

    for (const i of arr){
      await Diet.create({ name: `${i}` })
    }
    let dietas = await Diet.findAll()
    return dietas
  }
  
  module.exports = {
    diets,
  };
  
