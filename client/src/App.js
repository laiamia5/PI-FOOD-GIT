import './App.css';
import {Routes, Route} from "react-router-dom"
import Create from './components/Create.jsx'
import Detail from './components/Detail.jsx'
import Home from './components/Home.jsx'
import Initial from './components/Initial.jsx'
import Nav from './components/Nav.jsx'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {allRecipes, searchByQuery} from './redux/actions'

function App() {
  let location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
        dispatch(allRecipes())
      //  dispatch(searchByQuery())
  },[])

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav/>}
      <Routes>
          <Route exact path='/' element={<Initial/>}></Route>
          <Route path='/createRecipe' element={<Create/>}></Route>
          <Route path='/detailRecipe/:id' element={<Detail/>}> </Route>
          <Route path='/home' element={<Home/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
