import * as React from "react";
import { useLocation } from "react-router-dom";
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
            <button>Modify</button>
            <button onClick={handlePrint}>Print</button>
            <RecipePrint ref={componentRef} recipe={recipe} />
        </div>
    )
}