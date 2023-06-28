import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import RecipePrint from "./component/RecipePrint";
import './css/Recipe.css'

export const Recipe = () =>{
    const location = useLocation();
    const componentRef = React.useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });
    const recipe = location.state;
    return(
        <div>
            <Link to={'../RecipesList/Recipe/ModifRecipe'} state={recipe}><button>Modify</button></Link>
            <button onClick={handlePrint}>Print</button>
            <RecipePrint ref={componentRef} recipe={recipe} />
        </div>
    )
}