import * as React from "react";
import { Link } from "react-router-dom";
import { Add } from "./components/Add";


export function AddRecipe(){
    //create a components for the ingredients part:
    const [idCount, setIdCount] = React.useState(1);
    const [idIngredients, setIdIngredients] = React.useState(["ingredient0"]);

    const handleAddIngredient = () =>{
        setIdIngredients([...idIngredients, `ingredient${idCount}`]);
        const newCount = idCount + 1;
        setIdCount(newCount);
        //console.log(idCount)
    }

    const handleRemoveIngredient = (event) =>{
        setIdIngredients(idIngredients.filter(id => id !== event.target.id))
    }

    return(
        <>
        <h2>Add Recipe</h2>
        <form action="">
            <fieldset>
                <legend><h4>General recipe info:</h4></legend>
                <label for="title"><h4>Recipe name*: <input type="text" id="title" required/></h4></label>
                <label for="Dish type"><h4>Dish type*: <select name="Dish type" required>
                        <option value="Entree">Entree</option>
                        <option value="Main dish">Main dish</option>
                        <option value="Desert">Desert</option>
                        <option value="Side dish">Side dish</option>
                        <option value="Appetizer">Appetizer</option>
                        <option value="Sauce">Sauce</option>
                        <option value="Beverage">Beverage</option>
                        <option value="Confectionery">Confectionery</option>
                        <option value="Utility/other">Utility/other</option>
                    </select></h4></label>
                    <label for="difficulty"><h4>Difficulty*: 
                    <select name="difficulty" id="difficulty" required>
                        <option value="Easy">Easy *</option>
                        <option value="Medium">Medium **</option>
                        <option value="Difficult">Difficult ***</option>
                    </select>
                </h4></label>
                <label for="Cost"><h4>Cost*: 
                    <select name="Cost" id="Cost" required>
                        <option value="Cheap">$</option>
                        <option value="Ordinary">$$</option>
                        <option value="Expensive">$$$</option>
                    </select>
                </h4></label>
            </fieldset>
            <fieldset>
                <legend><h4>Time</h4></legend>
                <label for="Preparation"><h4>Preparation time*: <input type="time" name="Preparation" id="Preparation" required/></h4></label>
                <label for="Cooking time"><h4>Cooking time*: <input type="time" name="Cooking time" id="Cooking time" required/></h4></label>
                <label for="Rest time"><h4>Rest time: <input type="time" name="Rest time" id="Rest time"/></h4></label>
            </fieldset>
            <Add type="ingredient" />
            <Add type="step" />
            <input type="submit" value="Submit" onSubmit={console.log(SubmitEvent)}/>
        </form>
        </>
    )
}