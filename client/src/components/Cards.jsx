import React from "react";
import { useEffect, useState } from "react";
import Card from './Card'
import {conteinerCards, jeje} from '../styles/styleObj'
import { useSelector} from "react-redux";
import imagen from '../styles/comida.png'

export default function Cards(){
    const allcard = useSelector((state) =>  state.todos)
    const [page, setPage] = useState(0)

    var pagedCard;
    allcard ? pagedCard = [...allcard]?.splice(page,9) : pagedCard = []

    const nextHandle = () => {
        if(page < allcard.length - 9) setPage(page + 9)
        else alert('no hay mas paginas')
    }
    const prevHandle = () => {
        if( page !== 0 ) setPage(page - 9) 
        else alert('no se encontraron paginas anteriores')
    }
    useEffect(() => {
        setPage(0)
    },[allcard])

    let paginaslength = allcard?.length / 9


    return(
        <>
        {/* {allcard[0]?.length !== 0 ?( */}
            <div style={jeje}>
                <p style={hancho}>{allcard?.length !== 100 && `se han encontrado ${allcard?.length} resultados`}</p>
                <div style={contieneCards}>
                    {pagedCard?.map((e, index) => {
                        return(
                            <Card
                                key={index}
                                title = {e.title}
                                id = {e.id}
                                image = {e.image}
                                diets = {e.diets}
                            ></Card>
                        )
                    })}
                </div>
                <div style={paginado}>
                    <button onClick={() => prevHandle()}>prev</button>
                    {page/9 + 1} / {Math.round(paginaslength) + 1}
                    <button onClick={() => nextHandle() }>next</button>
                </div>
            </div>
            {/* ) : <p>no se encontraron recetas con ese nombre</p>} */}

        </>
    )
}


const contieneCards = {display:'flex', flexWrap:'wrap', justifyContent: 'center' }
const hancho={height: '5vh'}
const paginado = {height: '10vh', marginTop: '2%'}