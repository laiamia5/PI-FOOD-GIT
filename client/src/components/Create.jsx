import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import axios from 'axios'
import '../styles/create.css'
import si from '../styles/comida.png'
import {
    validartitle, 
    validarnum, 
    validarImg,
    validarSummary,
    validarDishtypes,
    dishTypesArray,
    validarSteps,
    stepsArray
} from '../validation/validationA.js'
import CreateDetail from "./CreateDetail";

export default function Create (){

    const [label , setLabel] = useState({steps: false, dish: false, preview: false})
    const [input, setInput] = useState({
        title: null,
        summary: null,
        score: null,
        healthyness: null,
        image:null ,
        steps: null,
        healthScore: null ,
        dishTypes: null,
        diets: [],
    })
    console.log(input)
    const [error, setError] = useState({
        title: null,
        summary: null,
        score: null,
        healthyness: null,
        image:null ,
        steps: null,
        healthScore: null ,
        dishTypes: null,
        diets: null,
    })

    const handleInputChange = (evento) => {
        const valueInput = evento.target.value;
        const nameInput = evento.target.name;
        setInput({...input, [nameInput]:valueInput})
      }

    const handleSubmit = async (e) => {
        if(input.title == null || input.summary == null) alert('debes llenar los campos obligatorios')
        else{
        e.preventDefault()
        await axios.post('http://localhost:3001/recipes', input)
        } 
    }

    let dishTypeText = ''
    let stepsText = ''
    const vaciaryMandar = (value) => {
        if(value == 'dishTypes'){
            setInput({...input, dishTypes: validarDishtypes(dishTypeText)})
            document.getElementById("input_dish").value = "";

        }else{
            setInput({...input, steps: validarSteps(stepsText)})
            document.getElementById("input_steps").value = "";
            console.log(input.steps)
        }   
    }

    const handleDiets = (value) => {
       setInput({...input, diets:[...input.diets, value]})
    }

    return(
        <div className="contenedor_all" >
            <form onSubmit={handleSubmit}>
            <div className="contenedor_create">
                <h1 className="h1_create">Create your Recipe!</h1>
                    <div className="texto">
                        <div class="col-3 input-effect">
                            <input class="effect-21 tamaño1" type="text"  name='title' value={input.title} onChange={(e) => {
                                handleInputChange(e) 
                                setError({...error, title: validartitle(e.target.value)} )}}/>
                            <label className={input.title == null ? "effect_label" : 'clickLabel'}>title * </label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                <p className="errores">{error.title}</p>
                        <div class="col-3 input-effect">
                            <input class="effect-21 tamaño1" type="text" name='image'  value={input.image} onChange={(e) => {
                                handleInputChange(e)
                                setError({...error, image: validarImg(e.target.value)})
                                }}/>
                            <label className={input.image == null ? "effect_label" : 'clickLabel'}>url image</label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                <p className="errores">{error.image}</p>
                        <div class="col-3 input-effect">
                            <input class="effect-21 tamaño1" id='input_dish'type="text" name='dishTypes' onChange={(e) => {
                                dishTypeText = e.target.value
                                // setLabel({...label, dish: true})
                                }}/>
                            <label className={/*label.dish == true ? */ 'clickLabel' /*: "effect_label"*/}>dish types</label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <span className = 'check c_dish' onClick={() => vaciaryMandar('dishTypes')}>✅</span>
                        <div class="col-3 input-effect">
                            <input class="effect-21 tamaño1" type="text" id='input_steps' name='steps' onChange={(e) => {
                                stepsText = e.target.value
                                // setLabel({...label, steps: true})
                                }}/>
                            <label className={/*label.steps == true ?*/  'clickLabel'/* : "effect_label"*/}>steps</label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <span className = 'check c_steps' onClick={() => vaciaryMandar('steps')}>✅</span>
                    </div>
                    <div className="numeros">
                        <div class="col-3 input-effect">
                            <input class="effect-21 tamaño1" type="number" name='score' value={input.score} onChange={(e) =>{ 
                                handleInputChange(e)
                                setError({...error, score: validarnum(e.target.value)})
                                }}/>
                            <label className={input.score == null ? "effect_label" : 'clickLabel'}>score</label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <p className="errores">{error.score}</p>
                        <div class="col-3 input-effect">
                            <input class="effect-21" type="number" name='healthScore' value={input.healthScore} onChange={(e) => {
                                handleInputChange(e)
                                setError({...error, healthScore: validarnum(e.target.value)})
                                }}/>
                            <label className={input.healthScore == null ? "effect_label" : 'clickLabel'}>healthScore</label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <p className="errores">{error.healthScore}</p>
                        <div class="col-3 input-effect">
                            <input class="effect-21" type="number" name='healthyness' value={input.healthyness} onChange={(e) => {
                                handleInputChange(e)
                                setError({...error, healthyness: validarnum(e.target.value)})
                                }}/>
                            <label className={input.healthyness == null ? "effect_label" : 'clickLabel'}>healthyness</label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <p className="errores">{error.healthyness}</p>
                    </div>
                        <div class="col-3 input-effect summary">
                            <textarea class="effect-21 tamaño1" type="text" name='summary' value={input.summary} onChange={(e) =>{ 
                                handleInputChange(e)
                                setError({...error, summary: validarSummary(e.target.value)})
                                }}/>
                            <label className={input.summary == null ? "effect_label" : 'clickLabel'}>summary *</label>
                            <span class="focus-border">
                                <i></i>
                            </span>
                        </div>
                        <p className="errores">{error.summary}</p>
                        
                        <div className="contenedor_select_dietas">
                            <ul class="navbar-nav_create">
                                <li class="nav-item_create">
                                    <span class='nav-link_create services_create'>Diets</span>
                                    <div className= "dropdown-menu_create"  >
                                        <span class="dropdown-item_create" onClick={() => handleDiets(1)}>gluten free</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(2)}>ketogenic</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(3)}>vegetarian</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(4)}>lacto ovo veg.</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(5)}>vegan</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(6)}>pescatarian</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(7)}>paleolithic</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(8)}>primal</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(9)}>whole 30</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(10)}>dairy free</span>
                                        <span class="dropdown-item_create" onClick={() => handleDiets(11)}>fodmap friendly.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="create_btns">
                            <button type='submit' className="create_btn">Create Recipe</button>
                            <button className="create_btn2" type="button" onClick={ () => setLabel({...label, preview: true})}>preview</button>
                        </div>
                </div>
            </form>
           {label.preview == true && <CreateDetail setLabel = {setLabel} label = {label} input= {input} ></CreateDetail>}
        </div>
    )
}
