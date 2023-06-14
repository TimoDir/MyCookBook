import * as React from "react";
import { useSelector} from "react-redux";
import "./css/RecipesList.css";

export const RecipesList = () =>{
    // extraction of the recipes in my store
    const selectRecipes = useSelector(state => state.recipes);
    // create state for filter the recipes with the search title and the tags
    const [recipes, setRecipes] = React.useState(selectRecipes);
    const [searchTitle, setSearchTitle] = React.useState('');
    const [searchTag, setSearchTag] = React.useState([]);
    
    // Function that set the state of searchTitle
    const handleSearchTitle = (event) =>{
        event.preventDefault();
        setSearchTitle(event.target[0].value);
    };

    // Function that set the state of searchTag
    const handleSearchTag = (event) =>{
        if(searchTag.includes(event.target.innerText)){
            return;
        };
        setSearchTag([...searchTag, event.target.innerText]);
    };
     // Function that filter the state of searchTag by removing the select tags of the array
    const handleRemoveSearchTag = (event) =>{
        setSearchTag(searchTag.filter(tag => tag !== event.target.innerText));
    };
    // Helper funciton that will filter the recipes by the searchTitle state
    function filterRecipesTitle(filters){
        return filters.filter(recipe =>{
            let recipeFormat = recipe.title.toLowerCase();
            let searchTitleFormat = searchTitle.toLowerCase();
            return recipeFormat.includes(searchTitleFormat);
        });
    };
    // Helper funciton that will filter the recipes by the searchTag state
    function filterRecipesTags(filters){
        return filters.filter(recipe =>{
            return searchTag.every(tag => recipe.tags.includes(tag))
        });
    };
    // useEffect will listent the change made for the state searchTitle and searchTag and according they different value filter the recipes to display
    React.useEffect(() =>{
        setRecipes(selectRecipes);
        if(searchTitle && searchTag.length === 0){
            setRecipes(recipes => filterRecipesTitle(recipes));
            return
        } else if(!searchTitle && searchTag.length !== 0){
            setRecipes(recipes => filterRecipesTags(recipes));
            return
        } else if(searchTitle && searchTag.length !== 0){
            setRecipes(recipes => filterRecipesTitle(recipes));
            setRecipes(recipes => filterRecipesTags(recipes));
            return
        }        
    }, [searchTitle, searchTag])

    return (
        <div className="RecipesList">
            <div className="SearchBar">
                <form onSubmit={handleSearchTitle}>
                    <label htmlFor="">Search: </label>
                    <input type="text" />
                </form>
                {searchTag && 
                    searchTag.map(tag => <button onClick={handleRemoveSearchTag}>{tag}</button>)
                }
            </div>
            <div className="RecipesContainer">
                {recipes.map(recipe => {
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
                            <div className="RecipeImg" style={{ backgroundImage: `url(${recipe.imageUrl}`}}></div>
                            <div className="RecipeTags">
                                {recipe.tags.map(tag =><button onClick={handleSearchTag}>{tag}</button>)}
                            </div>
                        </div>
                    )})
                }
            </div>
            
    </div>
    )
}