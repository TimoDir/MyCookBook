import * as React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Form } from "../../../../components/Form/Form";
import { action } from "../../../../store/store" 
import "./css/ModifRecipe.css";


export function ModifRecipe(){
    const location = useLocation();
    const recipe = location.state;
    const dispatch = useDispatch();
    //extraction of the value in the form:
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event);
        console.log(event);
        dispatch(action.modifRecipe(event.target, recipe.id));
        dispatch(action.addAllTags(event.target));
    };

    return(
        <div className="AddRecipe">
        <h2>Modify Recipe</h2>
        <form onSubmit={handleSubmit} action="">
            <Form currentRecipe={recipe} />
            <br />
            <div className="Submit">
                <input className="add-btn" type="submit" value="Modify" />
            </div>
        </form>
        </div>
    )
}