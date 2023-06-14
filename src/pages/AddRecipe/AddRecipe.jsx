import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import { Add } from "./components/Add";
import { action } from "../../store/store";
import "./css/AddRecipe.css";


export function AddRecipe(){
    const selectRecipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    //extraction of the value in the form:
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event);
        dispatch(action.addRecipe(event.target));
    };


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
                        <option value="MainDish">Main dish</option>
                        <option value="Desert">Desert</option>
                        <option value="SideDish">Side dish</option>
                        <option value="Appetizer">Appetizer</option>
                        <option value="Sauce">Sauce</option>
                        <option value="Beverage">Beverage</option>
                        <option value="Confectionery">Confectionery</option>
                        <option value="Utility">Utility/other</option>
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
                                <label htmlFor="LowCost">$ </label><input type="radio" name="Cost" id="LowCost" defaultChecked/>
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="ModerateCost">$$ </label><input type="radio" name="Cost" id="ModerateCost" />
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="HighCost">$$$ </label><input type="radio" name="Cost" id="HighCost" />
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