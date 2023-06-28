import { configureStore } from "@reduxjs/toolkit";
import { extractForm } from "./Js/helperFunction";
import { recipes } from "./Js/data";

// Initial State
////////////////////////////////////////

const initialState = {
    recipes: recipes,
    AllTags: [
        "#Entree", "#MainDish", "#Desert", "#SideDish", "#Appetizer", "#Sauce", "#Beverage", "#Confectionery", "#Utility",
        "#Easy", "#Medium", "#Difficult",
        "#LowCost", "#ModerateCost", "#HighCost",
        "#FlatFood", "#FrenchFood", "#FingerFood", "#Sweet", "#AsianFood", "#BreadBasedFood", "#ItalianFood", "#Chicken",
    ],
}

export const blankRecipe = {
    title: "",
    dishType: "",
    portion: {num:0, type:""},
    difficulty:"",
    cost: "",
    imageUrl: 'https://cdn.pixabay.com/photo/2014/03/24/17/19/chef-295359_1280.png',
    Preparation: "",
    CookingTime: "",
    RestTime: "",
    ingredients:[],
    steps:[],
    tags:[],
    id: ""
};

// Action Creators
////////////////////////////////////////

const addRecipe = (form) =>{
    return {type:'addRecipe', payload: form };
};

const removeRecipe = (recipe) =>{
    return {type:'removeRecipe', payload: recipe };
};

const addAllTags = (form) =>{
    return {type:'addTags', payload: form};
};

const modifyRecipe = (form, id) =>{
    return {type: 'modifyRecipe', payload:{form: form, id:id}};
};

export const action = {
    addRecipe: addRecipe,
    removeRecipe: removeRecipe,
    addAllTags: addAllTags,
    modifyRecipe: modifyRecipe,
}

// Reducer
////////////////////////////////////////

const cookBookReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'addRecipe':
            let recipe = extractForm(blankRecipe, action);
            // ID creatore using date
            let ID = new Date().getTime();
            recipe.id = recipe.title.replace(/[^\w]/g, '') + ID;
            return state.recipes.push(recipe);
        case 'removeRecipe':
            return state.recipes.filter(recipe => recipe.id !== action.payload.id);
        case 'addTags':
            let tags = [];
            for (let i = 0; i < action.payload.length; i++){
                if(action.payload[i].id === "tags" &&            // extract Tags
                action.payload[i].value.includes('#') &&
                action.payload[i].value){
                    // Use regular expression to find hashtags /#[\w]+/g
                    tags = action.payload[i].value.match(/#[\w]+/g).map(tag =>{
                        // Remove special characters and spaces using regular expression
                        const filteredTag = tag.replace(/[^\w]/g, '');
                        return `#${filteredTag}`;
                    });
                };
            };
            tags.forEach(tag =>{
                if(state.AllTags.includes(tag)){
                    return;
                } else state.AllTags.push(tag);
            });
        case 'modifyRecipe':
            recipe = extractForm(blankRecipe, action.payload.form);
            // ID creatore using date
            ID = action.payload.id;
            recipe.id = ID;
            state.recipes = state.recipes.filter(recipe => recipe.id !== ID);
            return state.recipes.push(recipe);
        default:
            return state;
    };
};

export const store = configureStore({
    reducer: cookBookReducer,
});