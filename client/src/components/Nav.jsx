import React from "react";
import {Link} from "react-router-dom"
import OnSearch from "./OnSearch";
import {useLocation} from 'react-router-dom'
import '../styles/nav.css'
import {navList} from '../styles/styleObj'
import { useDispatch} from "react-redux";
import { 
    searchByQuery,
    descendingTitle ,
    ascendingTitle,
    allRecipes,
    descendingHealthScore,
    ascendingHealthScore,
    filterForDiets
    } from "../redux/actions";
import {divButtonSearch} from '../styles/styleObj'
import {useState, useEffect}from'react'
import verde from '../styles/imagelogo.png'

export default function Nav (){
  let location = useLocation()
  const dispatch = useDispatch()
  const handleButton = (value) => {
    dispatch(filterForDiets(value))
    }
    const [desplegar, setdesplegar] = useState({
        alphabetical: false,
        healthScore: false,
        dietas: false
    })

    console.log(desplegar)

    return(
        <div className='Nav'>
            <img src={verde} style={{width: '170px', height: '100px', position: 'absolute', transform: 'translateX(-700px)', marginLeft: '40px', top: '0'}}/>
            {/* 
            {/* -------------------------------------------------------------------------------------------------------- */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <span class="nav-link"><Link to='/createRecipe' style={navList}>Create your recipe!</Link></span>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <span class="nav-link"><Link to='/home' style={navList}>Home</Link></span>
                    </li>
                </ul>
                <ul class="navbar-nav active">
                    <li class="nav-item">
                        <span class="nav-link" value={desplegar.alphabetical} onMouseOver={() => setdesplegar({...desplegar, alphabetical:true})}>alphabetical order</span>
                        <div className= { desplegar.alphabetical === true? "dropdown-menu2" : "dropdown-menu2 menu"} value={desplegar.alphabetical} onMouseOver={() => setdesplegar({...desplegar, alphabetical: true})} onMouseOut={() => setdesplegar({...desplegar, alphabetical: false})}>
                            <span class="dropdown-item" onClick={() => dispatch(descendingTitle())} >Descending</span>
                            <span class="dropdown-item" onClick={() => dispatch(ascendingTitle())}>Ascending</span>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <span class='nav-link' value={desplegar.healthScore} onMouseOver={() => setdesplegar({...desplegar, healthScore:true})}>healthScore order</span>
                        <div className= { desplegar.healthScore === true? "dropdown-menu2" : "dropdown-menu2 menu"} onMouseOver={() => setdesplegar({...desplegar, healthScore: true})} onMouseOut={() => setdesplegar({...desplegar, healthScore: false})}>
                            <span class="dropdown-item" onClick={() => dispatch(descendingHealthScore())} value={desplegar.healthScore}>Descending</span>
                            <span class="dropdown-item" onClick={() => dispatch(ascendingHealthScore())}>Ascending</span>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <span class='nav-link services' value={desplegar.dietas} onMouseOver={() => setdesplegar({...desplegar, dietas: true})} >filter Diets</span>
                        <div className= { desplegar.dietas === true? "dropdown-menu" : "dropdown-menu menu"} value={desplegar.dietas} onMouseOver={() => setdesplegar({...desplegar, dietas: true})} onMouseOut={() => setdesplegar({...desplegar, dietas: false})}>
                            <span class="dropdown-item" onClick={() => handleButton('gluten free')}>gluten free</span>
                            <span class="dropdown-item" onClick={() => handleButton('ketogenic')}>ketogenic</span>
                            <span class="dropdown-item" onClick={() => handleButton('vegetarian')}>vegetarian</span>
                            <span class="dropdown-item" onClick={() => handleButton('lacto ovo vegetarian')}>lacto ovo veg.</span>
                            <span class="dropdown-item" onClick={() => handleButton('vegan')}>vegan</span>
                            <span class="dropdown-item" onClick={() => handleButton('pescatarian')}>pescatarian</span>
                            <span class="dropdown-item" onClick={() => handleButton('paleolithic')}>paleolithic</span>
                            <span class="dropdown-item" onClick={() => handleButton('primal')}>primal</span>
                            <span class="dropdown-item" onClick={() => handleButton('whole 30')}>whole 30</span>
                            <span class="dropdown-item" onClick={() => handleButton('dairy free')}>dairy free</span>
                            <span class="dropdown-item" onClick={() => handleButton('fodmap friendly')}>fodmap friendly.</span>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <span class='nav-link'onClick={() => dispatch(allRecipes())}>reset order</span>
                    </li>
                </ul>
            </div>
            {location.pathname !== '/createRecipe' && <OnSearch />}
        </div>
    )
}

