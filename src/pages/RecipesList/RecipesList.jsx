import * as React from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import "./css/RecipesList.css";

export const RecipesList = () =>{
    // extraction of the recipes in my store
    const selectRecipes = useSelector(state => state.recipes);
    const selectAllTags = useSelector(state => state.AllTags);
    // create state for filter the recipes with the search title and the tags
    const [recipes, setRecipes] = React.useState(selectRecipes);
    const [searchTitle, setSearchTitle] = React.useState('');
    const [searchTags, setSearchTags] = React.useState([]);
    
    // Function that set the state of searchTitle
    const handleSearchTitle = (event) =>{
        event.preventDefault();
        setSearchTitle(event.target[0].value);
    };

    const handleRemoveSearchTitle = () =>{
        setSearchTitle('');
    }
    // Function that set the state of searchTag
    const handleSearchTag = (event) =>{
        event.preventDefault();
        let value;
        if(event.target.localName === "button"){
            value = event.target.innerText;
        } else if(event.target.localName === "form"){
            value = "#" + event.target[0].value.replace(/[^\w]/g, '');
        }
        if(searchTags.includes(value)){
            return;
        };
        setSearchTags([...searchTags, value]);
    };
     // Function that filter the state of searchTag by removing the select tags of the array
    const handleRemoveSearchTag = (event) =>{
        setSearchTags(searchTags.filter(tag => tag !== event.target.innerText));
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
            return searchTags.every(tag => recipe.tags.includes(tag))
        });
    };
    // useEffect will listent the change made for the state searchTitle and searchTag and according they different value filter the recipes to display
    React.useEffect(() =>{
        setRecipes(selectRecipes);
        if(searchTitle && searchTags.length === 0){
            setRecipes(recipes => filterRecipesTitle(recipes));
            return
        } else if(!searchTitle && searchTags.length !== 0){
            setRecipes(recipes => filterRecipesTags(recipes));
            return
        } else if(searchTitle && searchTags.length !== 0){
            setRecipes(recipes => filterRecipesTitle(recipes));
            setRecipes(recipes => filterRecipesTags(recipes));
            return
        }        
    }, [searchTitle, searchTags])

    return (
        <div className="RecipesList">

            <div className="SearchBar">
                <div className="SearchTitle">
                    <form onSubmit={handleSearchTitle}>
                        <label htmlFor="SearchTitle">Search by name: </label>
                        <input type="search" list="title" id="SearchTitle" name="SearchTitle"/>
                        <datalist id="title">
                            {selectRecipes.map(recipe => <option key={recipe.title} value={recipe.title} />)}
                        </datalist>
                    </form>
                    <div className="Result">
                        {searchTitle && <> Result for <button onClick={handleRemoveSearchTitle}>{searchTitle}</button></>}
                    </div>
                </div>
                
                <div className="SearchTags">
                    <form onSubmit={handleSearchTag}>
                        <label htmlFor="SearchTags">Search by tags: </label>
                        <input type="search" list="Tags" id="SearchTags" name="SearchTags"/>
                        <datalist id="Tags">
                            {selectAllTags.map(tag =><option key={tag} value={tag}/>)}
                        </datalist>
                    </form>
                    <div className="Result">
                        {searchTags && searchTags.map(tag => 
                            <button onClick={handleRemoveSearchTag}>{tag}</button>
                        )}
                    </div>
                </div>
            </div>

            <div className="RecipesContainer">
                {recipes.map(recipe => {
                    return(
                        <div className="RecipeCard">
                            <Link style={{display: "contents"}} to={'../RecipesList/Recipe'} state={recipe} >
                                <div className="RecipeTitle">
                                    <h4>{recipe.title}</h4>
                                </div>

                                <div className="RecipeDifficulty CardInfo">
                                    <ul>
                                        <li key ={"difficulty" + recipe.id}>
                                            Difficutly: {recipe.difficulty}
                                        </li>
                                        <li key={`cost${recipe.id}`}>
                                            Cost: {recipe.cost}
                                        </li>
                                    </ul>
                                </div>

                                <div className="RecipeTime CardInfo">
                                    <ul>
                                        <li key={`Prep${recipe.id}`}>
                                            Prep. time: {recipe.Preparation}
                                        </li>
                                        <li key={`Cook${recipe.id}`}>
                                            Cook. time: {recipe.CookingTime}
                                        </li>
                                        {recipe.RestTime && <li key={`Rest${recipe.id}`}>Rest time: {recipe.RestTime}</li>}
                                    </ul>
                                </div>

                                <div className="RecipeImg" style={{ backgroundImage: `url(${recipe.imageUrl}`}}></div>
                            </Link>

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