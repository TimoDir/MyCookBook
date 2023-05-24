import * as React from "react";
import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export function Add ({type}){
    const [idCount, setIdCount] = React.useState(1);
    const [ids, setIds] = React.useState([`${type}0`]);

    const handleAdd = () =>{
        setIds([...ids, `${type}${idCount}`]);
        const newCount = idCount + 1;
        setIdCount(newCount);
    }

    const handleRemove = (event) =>{
        setIds(ids.filter(id => id !== event.target.id))
    }

    return(
        <fieldset className={type}>
            <legend><h4>{type}s:</h4></legend>
            {ids.map((id, key) =>{
                if(type === "ingredient"){
                    return <Ingredient key={`ingredient${key}`} id={id} rowNum={key} handleRemove={handleRemove} />
                } else if(type === "step"){
                    return <Step key={`step${key}`} id={id} rowNum={key} handleRemove={handleRemove} />;
                };
            })}
            <button className="add-btn" onClick={handleAdd}>Add {type}</button>
        </fieldset>
    );
};