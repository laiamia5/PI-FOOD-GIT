import React from "react";
import {styleCard, styleforh} from '../styles/styleObj'
import {styleForImg, noLink, ajaj} from '../styles/styleObj' 
import {Link} from 'react-router-dom'
import { useEffect } from "react";
import '../styles/Card.css'


export default function Card(props){

    return(
        <div className='conteiner_card' key={props.id}>
            <img src={props.image} className= 'styleForImg'/>
                <h4 className = 'titulo'>{props.title}</h4>
            <div className='conteiner_diets'>
             { props.diets.map((e) =>{ 
            return(<p className="dietas">{e}</p>) 
             })}
             </div>
            <Link to={`/detailRecipe/${props.id}`} className='noLink'>
             <p className= 'readme'>Read more ➜</p>
             </Link>
        </div>
    )
}
