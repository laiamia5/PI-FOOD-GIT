import React from "react";
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {searchById} from '../redux/actions'
import { useEffect, useState } from "react";
import '../styles/detail.css'

export default function Detail (){
    const {id} = useParams()
    const dispatch = useDispatch()
    const cardById = useSelector((state) =>  state.byId)
    let numberId; // Number(id)
    id.includes('a') || id.includes('e')|| id.includes('i')||id.includes('o')||id.includes('u') ? numberId = id : numberId = Number(id)

    useEffect(() => {
        dispatch(searchById(numberId)) 
        console.log(cardById)
    }, [])

    // let resumen = document.getElementById('summaryHTML')
    // resumen.innerHTML = `${cardById?.summary}`

    return(
        <>
            <div className="detail_padre">
                {cardById
                ? (<div className="contieneDetail">
                        <div className="detail_summary" id='summaryHTML'>
                            <h4>summary</h4>{cardById?.summary}
                        </div>
                        <h2 className="detail_title">{cardById?.title}</h2> 
                        <p className="detail_diets">{cardById?.diets}</p>  
                        <img src={cardById?.image} className='detail_img'/>
                        <p className="detail_healthScore">{cardById?.healthScore}</p>
                        <div className="detail_steps">
                            {cardById?.steps.map((e) => {
                                return <p className="detail_steps_parrafo">{e}</p>
                            })}
                        </div>
                        <div className="detail_dish">
                        { cardById?.dishTypes.map((e) => {
                            return <p className="detail_dish_parrafo"> {e} </p>
                        })}
                        </div>
                </div>)
                : <p>cargando...</p>}
            </div>
        </>
    )
}