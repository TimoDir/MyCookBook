import * as React from "react";
import "../css/Recipe.css";

class RecipePrint extends React.Component{        
    render() {
        // Access the props passed to the component
        const {recipe} = this.props;
      
        // Do something with the props
        function costFormat(cost){
            if(cost === "LowCost"){
                return "$";
            } else if(cost === "ModerateCost"){
                return "$$";
            } else if(cost === "HighCost"){
                return "$$$";
            } else return;
        }
      
        return (
            <div className="RecipePrint">
                <div className="Photo" style={{backgroundImage: `url(${recipe.imageUrl})`}}></div>
                <div className="GeneralInfo">
                    <h3>{recipe.title}</h3>
                    <div className="TimeDifficulty">
                        <ul>
                            <li><p>Difficulty: {recipe.difficulty}</p></li>
                            <li><p>Cost: {costFormat(recipe.cost)}</p></li>
                        </ul>
                        <ul>
                            <li><p>Preparation: {recipe.Preparation}</p></li>
                            <li><p>Cooking Time: {recipe.CookingTime}</p></li>
                            {recipe.RestTime &&
                            <li><p>Rest Time: {recipe.RestTime}</p></li>}
                        </ul>
                    </div>
                </div>
                <div className="Ingredients">
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingredient.ingredient}>
                                <p className="ingredientName">
                                    {ingredient.ingredient}
                                </p>
                                <p className="ingredientQuantity">
                                    {ingredient.quantity} {ingredient.unit}
                                </p>    
                            </li>    
                        )}
                    </ul>
                </div>
                <div className="Steps">
                    <ul>
                        {recipe.steps.map(step =>
                            <li key={`${step}${step.length}`}>
                                <p>{step}</p>
                            </li>    
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RecipePrint;