import { configureStore } from "@reduxjs/toolkit";

// Initial State
////////////////////////////////////////

const initialState = {
    recipes: [
        {
            title: "",
            dishType: "",
            portion: {num:0, type:""},
            difficulty:"",
            cost: "",
            imageUrl: "",
            Preparation: "",
            CookingTime: "",
            RestTime: "",
            ingredients: [
                {ingredient:"", quantity:"", unit:""},
            ],
            steps:[],
            tags:[]
        },
    ],
    AllTags: [],
}

// Action Creators
////////////////////////////////////////

const addRecipe = (form) =>{
    return {type:'addRecipe', payload: form }
};

const removeRecipe = (idRecipe) =>{
    return {type:'removeRecipe', payload: idRecipe }
};

const addTags = (tagList) =>{
    return {type:'addTags', payload: tagList}
};

export const action = {
    addRecipe: addRecipe,
    removeRecipe: removeRecipe,
    addTags: addTags,
}

// Reducer
////////////////////////////////////////

const cookBookReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'addRecipe':
            let recipe = {steps:[], ingredients:[]};
            for (let i = 0; i < action.payload.length; i++) {
                if(action.payload[i].id === "title"){
                    recipe.title = action.payload[i].value;
                } else if(action.payload[i].id === "dish-type"){
                    recipe.dishType = action.payload[i].value;
                } else if(action.payload[i].id === "portion-quantity"){
                    recipe.portion = {num: action.payload[i].value};
                } else if(action.payload[i].id === "portion-unit"){
                    recipe.portion.type = action.payload[i].value;
                } else if(action.payload[i].id === "Easy" || 
                action.payload[i].id === "Medium" || 
                action.payload[i].id === "Difficult"){
                    if(action.payload[i].checked){
                        recipe.portion = action.payload[i].id;
                    };
                } else if(action.payload[i].id === "Cheap" || 
                action.payload[i].id === "Ordinnary" || 
                action.payload[i].id === "Expensive"){
                    if(action.payload[i].checked){
                        recipe.portion = action.payload[i].id;
                    };
                } else if(action.payload[i].id === "image-url"){
                    recipe.imageUrl = action.payload[i].value;
                } else if(action.payload[i].id === "Preparation"){
                    recipe.Preparation = action.payload[i].value;
                } else if(action.payload[i].id === "Cooking time"){
                    recipe.CookingTime = action.payload[i].value;
                } else if(action.payload[i].id === "Rest time"){
                    recipe.RestTime = action.payload[i].value;
                } else if(action.payload[i].id.startsWith("ingredient") &&
                action.payload[i].localName === "input"){
                    recipe.ingredients.push({
                        ingredient: action.payload[i].value,
                        quantity: action.payload[i+1].value,
                        unit : action.payload[i+2].value,
                    });
                } else if(action.payload[i].id.startsWith("step") &&
                action.payload[i].localName !== "button"){
                    if(action.payload[i].value){
                        recipe.steps.push(action.payload[i].value);
                    };
                } else if(action.payload[i].id === "step" && 
                action.payload[i].value){
                    recipe.tags = action.payload[i].value.split('#');
                    recipe.tags = recipe.tags.forEach(tag =>{
                        if(tag.search(' ')){
                            let space = tag.search(' ');
                            return "#" + tag.slice(0, space);
                        }else return '#' + tag;
                    });
                };
            };
            console.log(recipe)
            return {
                ...state,
                recipes: [
                    ...state.recipes, 
                    recipe
                ]};
        case 'removeRecipe':
            return state;
        case 'addTags':
            return state;
        default:
            return state;
    };
};

export const store = configureStore({
    reducer: cookBookReducer,
});