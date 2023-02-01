import {
    SEARCH_RECIPES_BY_QUERY,
    SEARCH_RECIPES_BY_ID,
    ALL_RECIPES,
    DESCENDING_ORDER_TITLE,
    ASCENDING_ORDER_TITLE,
    ASCENDING_HEALTH_SCORE,
    DESCENDING_HEALTH_SCORE,
    FILTER_FOR_DIETS
} from './actions'

const initialState = {
    todos: [],
    byId: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_RECIPES:
            return{
                ...state,
                todos: action.payload
            }
        case SEARCH_RECIPES_BY_QUERY:
            return{
                ...state,
                todos: action.payload
            }
        case DESCENDING_ORDER_TITLE:
            return{
                ...state,
                todos: [...state.todos.sort((a,b) => (a.title > b.title ? -1 : a.title < b.title ? 1 : 0))]
            }
        case ASCENDING_ORDER_TITLE:
            return{
                ...state,
                todos: [...state.todos.sort((a,b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))]
            }
        case DESCENDING_HEALTH_SCORE:
            return{
                ...state,
                todos: [...state.todos.sort((a,b) => (a.healthScore > b.healthScore ? -1 : a.healthScore < b.healthScore ? 1 : 0))]
            }
        case ASCENDING_HEALTH_SCORE:
            return{
                ...state,
                todos: [...state.todos.sort((a,b) => (a.healthScore > b.healthScore ? 1 : a.healthScore < b.healthScore ? -1 : 0))]
            }
        case SEARCH_RECIPES_BY_ID:
            return{
                ...state,
                byId: action.payload
            }
        case FILTER_FOR_DIETS:
            return{
                ...state,
                todos: action.payload.filter((e) => e.diets.includes(action.value))
            }
        default:
            return state.todos
    }
}

export default reducer
