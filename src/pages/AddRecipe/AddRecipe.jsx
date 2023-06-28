import * as React from "react";
import { useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { action } from "../../store/store";
import "./css/AddRecipe.css";


export function AddRecipe(){
    const dispatch = useDispatch();
    //extraction of the value in the form:
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event);
        dispatch(action.addRecipe(event.target));
        dispatch(action.addAllTags(event.target));
    };

    return(
        <div className="AddRecipe">
        <h2>Add Recipe</h2>
        <form onSubmit={handleSubmit} action="">
            <Form />
            <br />
            <div className="Submit">
                <input className="add-btn" type="submit" value="Submit" />
            </div>
        </form>
        </div>
    )
}