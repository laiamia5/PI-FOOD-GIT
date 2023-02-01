const { Router } = require('express');
const router = Router();

const RecipesRoutes = require('./RecipesRoutes')
const dietRoute = require('./dietRoute')


router.use('/recipes', RecipesRoutes)
router.use('/diets' , dietRoute)

module.exports = router;
