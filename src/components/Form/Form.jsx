import * as React from "react";
import { Add } from "./components/Add";
import { blankRecipe } from "../../store/store";

export function Form ({currentRecipe = blankRecipe}){
    const [recipe, setRecipe] = React.useState(currentRecipe);
    return(
        <>
         <fieldset className="General">
                <legend><h3>General recipe info:</h3></legend>
                
                <div className="form-container">
                    <label htmlFor="title"><h4>Recipe name*:</h4></label>
                    <input type="text" name="title" id="title" defaultValue={recipe.title} required/>
                </div>
                
                <div className="form-container">
                    <label htmlFor="dish-type"><h4>Dish type*:</h4></label> 
                    <select name="dish-type" id="dish-type" defaultValue={recipe.dishType} required>
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
                            <label htmlFor="portion-quantity" >For* </label>
                            <input type="number" name="portion-quantity" id="portion-quantity" min="1" defaultValue={recipe.portion.num} required/>
                        </div>
                        <div className="Portion-info">
                            <input type="text" name="portion-unit" id="portion-unit" min="1" placeholder="person, cake, dough, litre... " defaultValue={recipe.portion.type}/>
                        </div>

                    </div>
                </div>

                <div className="form-container">
                    <div className="difficulty">
                        <h4>Difficulty*:</h4>
                        <div className="Radio-container">
                            <div className="Radio-option">
                                <label htmlFor="Easy">Easy </label><input type="radio" name="difficulty" id="Easy" defaultChecked={recipe.difficulty === "Easy" || recipe.difficulty === ""}/>
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="Medium">Medium </label><input type="radio" name="difficulty" id="Medium" defaultChecked={recipe.difficulty === "Medium"}/>
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="Difficult">Difficult </label><input type="radio" name="difficulty" id="Difficult" defaultChecked={recipe.difficulty === "Difficult"}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="form-container">
                    <div className="Cost">
                        <h4>Cost*:</h4>
                        <div className="Radio-container">
                            <div className="Radio-option">
                                <label htmlFor="LowCost">$ </label><input type="radio" name="Cost" id="LowCost" defaultChecked={recipe.cost === "LowCost" || recipe.cost === ""}/>
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="ModerateCost">$$ </label><input type="radio" name="Cost" id="ModerateCost" defaultChecked={recipe.cost === "ModerateCost"}/>
                            </div>
                            <div className="Radio-option">
                                <label htmlFor="HighCost">$$$ </label><input type="radio" name="Cost" id="HighCost" defaultChecked={recipe.cost === "HighCost"}/>
                            </div>
                        </div>               
                    </div>
                </div>
                
                <div className="form-container">
                    <label htmlFor="image-url"> <h4>Image url link:</h4></label>
                    <input type="url" name="image-url" id="image-url" defaultValue={recipe.imageUrl? recipe.imageUrl : ""}/>
                </div> 
                
            </fieldset>

            <fieldset className="Time">
                <legend><h4>Time:</h4></legend>

                <div className="form-container">
                    <label htmlFor="Preparation"><h4>Preparation time*:</h4></label>
                    <input type="time" name="Preparation" id="Preparation" defaultValue={recipe.Preparation} required/>
                </div>
                
                <div className="form-container">
                    <label htmlFor="Cooking time"><h4>Cooking time*:</h4></label>
                    <input type="time" name="Cooking time" id="Cooking time" defaultValue={recipe.CookingTime} required/>
                </div>
                
                <div className="form-container">
                    <label htmlFor="Rest time"><h4>Rest time:</h4></label>
                    <input type="time" name="Rest time" id="Rest time" defaultValue={recipe.RestTime}/>
                </div>
                
            </fieldset>

            <Add type="ingredient" ingredients={recipe.ingredients}/>

            <Add type="step" steps={recipe.steps} />

            <fieldset className="Form-tags">
                <legend><h4>Tags</h4></legend>
                <textarea name="tags" id="tags" cols="75" rows="7" defaultValue={recipe.tags}></textarea>
            </fieldset>
        </>
    )
}