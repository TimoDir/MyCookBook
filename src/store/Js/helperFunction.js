export function extractForm (blankRecipe, action){
    let recipe = blankRecipe;
            for (let i = 0; i < action.payload.length; i++) {
                if(action.payload[i].id === "title"){                   // extract title
                    recipe.title = action.payload[i].value;             
                } else if(action.payload[i].id === "dish-type"){        // extract Dish type
                    recipe.dishType = action.payload[i].value;
                } else if(action.payload[i].id === "portion-quantity"){ // extract Portion quantity
                    recipe.portion = {num: action.payload[i].value};
                } else if(action.payload[i].id === "portion-unit" &&    // extract Portion unit
                action.payload[i].value){
                    recipe.portion.type = action.payload[i].value;
                } else if(action.payload[i].id === "Easy" ||            // extract Difficulty
                action.payload[i].id === "Medium" || 
                action.payload[i].id === "Difficult"){
                    if(action.payload[i].checked){
                        recipe.difficulty = action.payload[i].id;
                    };
                } else if(action.payload[i].id === "LowCost" ||           // extract Cost
                action.payload[i].id === "ModerateCost" || 
                action.payload[i].id === "HighCost"){
                    if(action.payload[i].checked){
                        recipe.cost = action.payload[i].id;
                    };
                } else if(action.payload[i].id === "image-url"){        // extract URL image
                    recipe.imageUrl = action.payload[i].value;
                } else if(action.payload[i].id === "Preparation"){      // extract Preparation time
                    recipe.Preparation = action.payload[i].value;
                } else if(action.payload[i].id === "Cooking time"){     // extract Cooking time
                    recipe.CookingTime = action.payload[i].value;
                } else if(action.payload[i].id === "Rest time"){        // extract Rest time
                    recipe.RestTime = action.payload[i].value;
                } else if(action.payload[i].id.startsWith("ingredient") &&  // extract Ingredients
                action.payload[i].localName === "input"){
                    recipe.ingredients.push({
                        ingredient: action.payload[i].value,
                        quantity: action.payload[i+1].value,
                        unit : action.payload[i+2].value,
                    });
                } else if(action.payload[i].id.startsWith("step") &&    // extract Steps
                action.payload[i].localName !== "button" &&
                action.payload[i].value){
                    if(action.payload[i].value){
                        recipe.steps.push({step: action.payload[i].value});
                    };
                } else if(action.payload[i].id === "tags" &&            // extract Tags
                action.payload[i].value.includes('#') &&
                action.payload[i].value){
                    // Use regular expression to find hashtags /#[\w]+/g
                    recipe.tags = action.payload[i].value.match(/#[\w]+/g).map(tag =>{
                        // Remove special characters and spaces using regular expression
                        const filteredTag = tag.replace(/[^\w]/g, '');
                        return `#${filteredTag}`;
                    })
                };
            };
            // tags dish type, price, difficulty
            const complementaryTags = [`#${recipe.dishType}`, `#${recipe.difficulty}`, `#${recipe.cost}`];
            complementaryTags.forEach(tag => recipe.tags.push(tag));
            return recipe;
}