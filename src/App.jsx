import React from "react" ; 
import  Navbar   from "./Navbar"
import About from "./About"
import Services from "./Services"
import NoFound from "./NoFound"
import "./index.css"
import Card from "./Card"
import { BrowserRouter ,  Redirect, Route, Switch} from "react-router-dom"
export default function App(){
    return (
       
        <>
        
        
<Switch>
   <Route exact path="/" component={About}></Route>
   <Route exact path="/About" component={About}></Route>

</Switch>



        </>
    )
}