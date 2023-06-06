import { createSlice } from "@reduxjs/toolkit";
/*
export const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        recipes:[],
    },
    reducers: {
        addRecipe: state =>{
            let recipe = {};
            for (let i = 0; i < action.payload.length; i++) {
                switch (action.payload.target[i].id){
                    case "title":
                        recipe.title = action.payload.target[i].value;
                        break;
                    case "dish-type":
                        recipe.dishType = action.payload.target[i].value;
                        break;
                    case "portion-quantity":
                        recipe.portion = {num: action.payload.target[i].value};
                        break;
                    case "portion-unit":
                        if(action.payload.target[i].value){
                            recipe.portion.type = action.payload.target[i].value;
                            break;
                        } else break;
                    case "Easy", "Medium", "Difficult":
                        if(action.payload.target[i].checked){
                            recipe.portion = action.payload.target[i].id;
                            break;
                        }else break;
                    case "Cheap", "Ordinnary", "Expensive":
                        if(action.payload.target[i].checked){
                            recipe.portion = action.payload.target[i].id;
                            break
                        }else break;
                    case "image-url":
                        recipe.imageUrl = action.payload.target[i].value;
                        break;
                    case "Preparation":
                        recipe.Preparation = action.payload.target[i].value;
                        break;
                    case "Cooking time":
                        recipe.CookingTime = action.payload.target[i].value;
                        break;
                    case "Rest time":
                        recipe.RestTime = action.payload.target[i].value;
                        break;
                    case "Rest time":
                        recipe.RestTime = action.payload.target[i].value;
                        break
                    case action.payload.target[i].id.startsWith("ingredient"):
                        if(action.payload.target[i].localname === "button"){
                            break;
                        };
                        recipe.ingredients = {
                            ingredient: action.payload.target[i].value,
                            quantity: action.payload.target[i+1].value
                        };
                        if(action.payload.target[i+2].value){
                            recipe.ingredients.unit = action.payload.target[i+2].value;
                        };
                        break;
                    case action.payload.target[i].id.startsWith("step"):
                        if(action.payload.target[i].localname === "button"){
                            break;
                        };
                        recipe.step.push() = action.payload.target[i].value;
                        break;
                    case "tags":
                        if(action.payload.target[i].value){
                            recipe.tags = action.payload.target[i].value.split('#');
                            recipe.tags = recipe.tags.forEach(tag =>{
                                if(tag.search(' ')){
                                    let space = tag.search(' ');
                                    return "#" + tag.slice(0, space);
                                }else return '#' + tag;
                            });
                            break;
                        };
                        break;
                    default:
                        break;                        
                };    
            };
            console.log(recipe)
            return{
                ...state,
                recipes: [...state.recipes, recipe]
            }
        } 
    }
})*/