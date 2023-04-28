import * as React from "react"
import { Link } from "react-router-dom"
import "./css/Header.css"

export function Header(){
    return(
        <>
        <nav id="NavBar">
            <Link to="">
                <div className="BookMark">Home</div>
            </Link>
            <Link to="../AddRecipe">
                <div className="BookMark">Add recipe</div>
            </Link>
            <Link to="../RecipesList">
                <div className="BookMark">Recipes</div>
            </Link>
            <Link to="../MenuCreator">
                <div className="BookMark">Menu creator</div>
            </Link>      
        </nav>
        <a href="#NavBar"><button className="ArrowUp" >^</button></a>
        </>
    )
}