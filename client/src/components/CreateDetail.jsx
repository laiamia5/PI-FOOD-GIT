import React from "react";
import { dishTypesArray, stepsArray } from "../validation/validationA";

export default function CreateDetail (props){

    let dietasNumbers = ["gluten free", "ketogenic", "vegetarian", "lacto ovo vegetarian", "vegan","pescatarian",
	"paleolithic","primal","whole 30","dairy free","fodmap friendly"]

    return(
        <div style={estilos_detalle}>
                <button onClick={() => props.setLabel({...props.label, preview: false})} style={boton}> X </button>
                <div style={barra}>preview👀</div>
                <div style={lugares}>
                    <h3 style={{ marginTop: '10%'}}>{props.input.title}</h3>
                    <img src={props.input.image} style={{width:'150px', height: '150px'}}></img>
                    <strong>summary: </strong><p>{props.input.summary}</p>
                    <div className="niveles">
                        <strong>score: </strong> <p>{props.input.score}</p>
                        <strong>healthyness: </strong> <p>{props.input.healthyness}</p>
                        <strong> healthScore: </strong> <p>{props.input.healthScore}</p>
                    </div>
                    <div style={{ marginTop: '5%'}}>
                        <div>
                        <strong> dishTypes: </strong>
                            {dishTypesArray.map((e) => {
                                return <p>{e}</p>
                            })}
                        </div>
                        <div>
                        <strong> steps: </strong>
                            {stepsArray.map((e) =>{
                                return <p>{e}</p>
                            } )}
                        </div>
                        <div>
                        <strong> diets: </strong>
                            {props.input.diets.map((e) => {
                                return <p>{dietasNumbers[e - 1]}</p>
                            })}
                        </div>
                    </div>
                </div>
        </div>
    )
}

const estilos_detalle = {
position: 'absolute', 
width: '50%', 
height: '70%', 
backgroundColor: 'rgb(241, 236, 236)', 
top:'20%', 
left: '20%',
borderRadius: '15px',
overflow: 'scroll',
}

const barra = {
    width: '100%',
    height: '9%',
borderRadius: '15px',
backgroundColor: '#82dfb3',
position: 'absolute',
top: '0',
 zIndex: '100'
}

const boton = {
    zIndex: '600',
    cursor: 'pointer',
    position: 'absolute',
    right: '1%',
    borderRadius: '50%',
    border: 'none',
    width: '3%',
    height: '5%'

}

const lugares = {
    display: 'grid'
}