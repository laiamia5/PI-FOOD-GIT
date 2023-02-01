import React from "react";
import {navList} from '../styles/styleObj'
import {useState} from 'react'
import { useDispatch} from "react-redux";
import { 
    searchByQuery,
    filterForDiets
    } from "../redux/actions";

export default function OnSearch(props){
    const [search, setSearch] = useState()
    const dispatch = useDispatch()

    const clearAndSearch = () => {
      document.getElementById("input1").value = "";
        dispatch(searchByQuery(search))
    }

    return(
        <div style={{marginLeft:'80%', position: 'absolute', top:'30px'}}>
            <input 
            placeholder="search..."
            style={navList} 
            onChange ={(e) => setSearch(e.target.value)}
            id = "input1" ></input>
            <button onClick={() => clearAndSearch()}>search</button> 
        </div>
    //    <div class="container">
    //     <div class="search">
    //       <button class="btn"><i data-feather="search"></i></button>
    //       <input type="text" class="input" placeholder="Search..." />
    //       <button class="cancel"><i data-feather="x"></i></button>
    //     </div>
    //   </div>
    )
}