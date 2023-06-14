import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../store/store";
import "./css/RecipesList.css";

export const RecipesList = () =>{
    const selectRecipes = useSelector(state => state.recipes);
    return (
        <div className="RecipesList">
            <div className="SearchBar">
                <form action="">
                    <label htmlFor="">Search: </label>
                    <input type="text" />
                </form>
            </div>
            <div className="RecipesContainer">
                {selectRecipes.map(recipe => {
                    return(
                        <div className="RecipeCard">
                            <div className="RecipeTitle">
                                <h4>{recipe.title}</h4>
                            </div>
                            <div className="RecipeDifficulty CardInfo">
                                <ul>
                                    <li key={`difficulty${recipe.title}`}>
                                        Difficutly: {recipe.difficulty}
                                    </li>
                                    <li key={`cost${recipe.title}`}>
                                        Cost: {recipe.cost}
                                    </li>
                                </ul>
                            </div>
                            <div className="RecipeTime CardInfo">
                                <ul>
                                    <li key={`Prep${recipe.title}`}>
                                        Prep. time: {recipe.Preparation}
                                    </li>
                                    <li key={`Cook${recipe.title}`}>
                                        Cook. time: {recipe.CookingTime}
                                    </li>
                                    {recipe.RestTime && <li key={`Rest${recipe.title}`}>Rest time: {recipe.RestTime}</li>}
                                </ul>
                            </div>
                            <div className="RecipeImg" style={{ backgroundImage: `url(${recipe.imageUrl}`}} >
                                {/*<img src={recipe.imageUrl} alt={`image of ${recipe.title}`} />*/}
                            </div>
                            <div className="RecipeTags">
                                {recipe.tags.map(tag =><button>{tag}</button>)}
                            </div>
                        </div>
                    )})
                }
            </div>
            
    </div>
    )
}