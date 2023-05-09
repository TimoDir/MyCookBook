import * as React from "react";
import { Link } from "react-router-dom";
import { Add } from "./components/Add";


export function AddRecipe(){

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target[1].value); // title
        console.log(event.target[2].value); // dish-type
        console.log(event.target[3].value); // difficulty
        console.log(event.target[4].value); // cost
        event.target[5].value ? console.log(event.target[5].value) : console.log("no value"); // image-url

        console.log(event.target[7].value); // Preparation
        console.log(event.target[8].value); // Cooking time
        event.target[9].value ? console.log(event.target[9].value) : console.log("no value"); // Rest time
        
        let i = 11;
        while(event.target[i].localName === "input"){
            if(i === 11){
                console.log(event.target[i].value); //ingredient
                i++;
                console.log(event.target[i].value); //quantity
                i++;
                event.target[i].value ? console.log(event.target[i].value) : console.log("no value"); //unit
                i++;
            };
            if(!event.target[i].value){
                break;
            };
            console.log(event.target[i].value); //ingredient
            i++;
            console.log(event.target[i].value); //quantity
            i++;
            event.target[i].value ? console.log(event.target[i].value) : console.log("no value"); //unit
            i+=2;
            console.log(i)
        };

        i+=2;
        while(event.target[i].localName === "textarea"){
            console.log(event.target[i].value); //step
            i+=2;
        };
        console.log("--------- the end of the form ---------")
    }
    return(
        <>
        <h2>Add Recipe</h2>
        <form onSubmit={handleSubmit} action="">
            <fieldset>
                <legend><h4>General recipe info:</h4></legend>
                <label for="title"><h4>Recipe name*: <input type="text" name="title" id="title" required/></h4></label>
                <label for="dish-type"><h4>Dish type*: <select name="dish-type" id="dish-type" required>
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
                <label for="image-url"><h4>Image url link: <input type="url" name="image-url" id="image-url"/></h4></label>
            </fieldset>
            <fieldset>
                <legend><h4>Time</h4></legend>
                <label for="Preparation"><h4>Preparation time*: <input type="time" name="Preparation" id="Preparation" required/></h4></label>
                <label for="Cooking time"><h4>Cooking time*: <input type="time" name="Cooking time" id="Cooking time" required/></h4></label>
                <label for="Rest time"><h4>Rest time: <input type="time" name="Rest time" id="Rest time"/></h4></label>
            </fieldset>
            <Add type="ingredient" />
            <Add type="step" />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}