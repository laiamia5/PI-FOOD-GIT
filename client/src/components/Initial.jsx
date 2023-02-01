import React from "react";
import {Link} from "react-router-dom"
import '../styles/initial.css'
import '../styles/comida.png'

export default function Initial (){
    return(

        <div className= 'body'>
            <div className="overlay">
                <div className="overlay__inner">
                    <h1 className="overlay__title">
                    seek a healthy life with a nutritious and balanced diet!
                    </h1>
                    <p className="overlay__description">
                    a page to find the best healthy recipes for any type of diet. many types of dishes to 
                    choose from, with a filter for recipes, in alphabetical or healscore order
                        <strong className='strong'> create your new life today.</strong>
                    </p>
                    {/* <!-- Buttons --> */}
                    <div className="overlay__btns">
                        <button className="overlay__btn overlay__btn--transparent">
                            create recipe
                        </button>
                        <button className="overlay__btn overlay__btn--colors">
                            <Link to='/home' style={{textDecoration: 'none', color: 'black'}}><span>Home</span></Link>  
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}