import * as React from "react";
import { useLocation } from "react-router-dom";

export const Recipe = () =>{
    const location = useLocation();
    const recipe = location.state;
    return(
        <div>
            <h3>{recipe.title}</h3>
            <button>Modify</button>
            <button>Print</button>
        </div>
    )
}