import * as React from "react";
import { Link } from "react-router-dom";
import { Add } from "./components/Add";
import "./css/AddRecipe.css";


export function AddRecipe(){

    //extraction of the value in the form:
    const handleSubmit = (event) =>{
        event.preventDefault();
        let i = 1;
        console.log(event.target[i].value); // title
        i++; // i=2
        console.log(event.target[i].value); // dish-type
        i++; // i=3
        // portion num
        i++; // i=4
        // portion type
        i++; // i=5 
        let difficulty = [event.target[i], event.target[i+1], event.target[i+2]]
        console.log(difficulty.filter(dif => dif.checked === true)[0].id); // difficulty
        i+=3; // i=8
        let cost = [event.target[i], event.target[i+1], event.target[i+2]]
        console.log(cost.filter(cos => cos.checked === true)[0].id); // cost
        i+=3; // i=11
        event.target[i].value ? console.log(event.target[9].value) : console.log("no value"); // image-url
        i+=2; // i=13
        console.log(event.target[i].value); // Preparation
        i++; // i=14
        console.log(event.target[i].value); // Cooking time
        i++; // i=15
        event.target[i].value ? console.log(event.target[i].value) : console.log("no value"); // Rest time
        i+=2; // i=17
        while(event.target[i].localName === "input"){
            if(i === 17){
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
        };

        i+=2;
        while(event.target[i].localName === "textarea"){
            console.log(event.target[i].value); //step
            i+=2;
        };
        i+=2;
        event.target[i].value ? console.log(event.target[i].value) : console.log("no value"); //tags
        console.log("--------- the end of the form ---------");
        //console.log(event);
    }
    return(
        <div className="AddRecipe">
        <h2>Add Recipe</h2>
        <form onSubmit={handleSubmit} action="">
            
            <fieldset className="General">
                <legend><h3>General recipe info:</h3></legend>
                
                <div className="form-container">
                    <label htmlFor="title"><h4>Recipe name*:</h4></label>
                    <input type="text" name="title" id="title" required/>
                </div>
                
                <div className="form-container">
                    <label htmlFor="dish-type"><h4>Dish type*:</h4></label> 
                    <select name="dish-type" id="dish-type" required>
                        <option value="Entree">Entree</option>
                        <option value="Main dish">Main dish</option>
                        <option value="Desert">Desert</option>
                        <option value="Side dish">Side dish</option>
                        <option value="Appetizer">Appetizer</option>
                        <option value="Sauce">Sauce</option>
                        <option value="Beverage">Beverage</option>
                        <option value="Confectionery">Confectionery</option>
                        <option value="Utility/other">Utility/other</option>
                    </select>
                </div>

                <div className="form-container">
                    <h4>Portion*:</h4>
                    <div className="Portion-container">
                        <div className="Portion-info">
                            <label htmlFor="portion-quantity">For* </label>
                            <input type="number" name="portion-quantity" id="portion-quantity" min="1"/>
                        </div>
                        <div className="Portion-info">
                            <input type="text" name="portion-unit" id="portion-unit" min="1" placeholder="person, cake, dough, litre... "/>
                        </div>

                    </div>
                </div>

                <div className="form-container">
                    <div className="difficulty">
                        <h4>Difficulty*:</h4>
                        <div className="Radio-container">
                            <div className="Radio-option">
                                <label htmlFor="Easy">Easy </label><input type="radio" name="difficulty" id="Easy" defaultChecked/>
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="Medium">Medium </label><input type="radio" name="difficulty" id="Medium" />
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="Difficult">Difficult </label><input type="radio" name="difficulty" id="Difficult" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="form-container">
                    <div className="Cost">
                        <h4>Cost*:</h4>
                        <div className="Radio-container">
                            <div className="Radio-option">
                                <label htmlFor="Cheap">$ </label><input type="radio" name="Cost" id="Cheap" defaultChecked/>
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="Ordinary">$$ </label><input type="radio" name="Cost" id="Ordinary" />
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="Expensive">$$$ </label><input type="radio" name="Cost" id="Expensive" />
                            </div>
                        </div>               
                    </div>
                </div>
                
                <div className="form-container">
                    <label htmlFor="image-url"> <h4>Image url link:</h4></label>
                    <input type="url" name="image-url" id="image-url"/>
                </div> 
                
            </fieldset>

            <fieldset className="Time">
                <legend><h4>Time:</h4></legend>

                <div className="form-container">
                    <label htmlFor="Preparation"><h4>Preparation time*:</h4></label>
                    <input type="time" name="Preparation" id="Preparation" required/>
                </div>
                
                <div className="form-container">
                    <label htmlFor="Cooking time"><h4>Cooking time*:</h4></label>
                    <input type="time" name="Cooking time" id="Cooking time" required/>
                </div>
                
                <div className="form-container">
                    <label htmlFor="Rest time"><h4>Rest time:</h4></label>
                    <input type="time" name="Rest time" id="Rest time"/>
                </div>
                
            </fieldset>

            <Add type="ingredient" />

            <Add type="step" />

            <fieldset className="Form-tags">
                <legend><h4>Tags</h4></legend>
                <textarea name="tags" id="tags" cols="75" rows="7"></textarea>
            </fieldset>
            <br />
            <div className="Submit">
                <input className="add-btn" type="submit" value="Submit" />
            </div>
        </form>
        </div>
    )
}