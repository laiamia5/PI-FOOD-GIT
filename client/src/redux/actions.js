export const SEARCH_RECIPES_BY_QUERY = 'SEARCH_RECIPES_BY_QUERY'
export const SEARCH_RECIPES_BY_ID= 'SEARCH_RECIPES_BY_ID'
export const ALL_RECIPES = 'ALL_RECIPES'
export const DESCENDING_ORDER_TITLE = 'DESCENDING_ORDER_TITLE'
export const ASCENDING_ORDER_TITLE = 'ASCENDING_ORDER_TITLE'
export const ASCENDING_HEALTH_SCORE = 'ASCENDING_HEALTH_SCORE'
export const DESCENDING_HEALTH_SCORE = 'DESCENDING_HEALTH_SCORE'
export const FILTER_FOR_DIETS = 'FILTER_FOR_DIETS'

export const searchById = (id) => async (dispatch) => {
    return fetch(`http://localhost:3001/recipes/${id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return dispatch({type:SEARCH_RECIPES_BY_ID, payload: data})
    })
    .catch((err) => console.log(err))
}

export const searchByQuery= (query) => async (dispatch) => {
    return fetch(`http://localhost:3001/recipes?title=${query}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return dispatch({type:SEARCH_RECIPES_BY_QUERY, payload: data})
    })
    .catch((err) => console.log(err))
}

export const allRecipes = () => async (dispatch) => {
    return fetch('http://localhost:3001/recipes/diez')
    .then((res) => res.json())
    .then((result) =>{ 
        return dispatch({type:ALL_RECIPES, payload: result}) 
    })
    .catch((err) => console.log(err) )
}

export const descendingTitle = () => {
    return {type: DESCENDING_ORDER_TITLE}
}

export const ascendingTitle = () => {
    return {type: ASCENDING_ORDER_TITLE}
}

export const descendingHealthScore = () => {
    return {type: DESCENDING_HEALTH_SCORE}
}

export const ascendingHealthScore = () => {
    return {type: ASCENDING_HEALTH_SCORE }
}

export const filterForDiets = (value) => async (dispatch) => {
    return fetch('http://localhost:3001/recipes/diez')
    .then((res) => res.json())
    .then((result) =>{ 
        console.log(result)
        return dispatch({type: FILTER_FOR_DIETS, payload: result, value: value}) 
    })
    .catch((err) => console.log(err) )
}