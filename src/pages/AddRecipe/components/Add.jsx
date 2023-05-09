import * as React from "react";
import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export function Add ({type}){
    const [idCount, setIdCount] = React.useState(1);
    const [ids, setIds] = React.useState([`${type}0`]);

    const handleAdd = () =>{
        setIds([...ids, `ingredient${idCount}`]);
        const newCount = idCount + 1;
        setIdCount(newCount);
    }

    const handleRemove = (event) =>{
        setIds(ids.filter(id => id !== event.target.id))
    }
    return(
        <fieldset>
            <legend><h4>{type}s:</h4></legend>
            {ids.map((id, key) =>{
                if(type === "ingredient"){
                    return <Ingredient id={id} rowNum={key} handleRemove={handleRemove} />
                } else if(type === "step"){
                    return <Step id={id} rowNum={key} handleRemove={handleRemove} />;
                };
            })}
            <button onClick={handleAdd}>Add {type}</button>
        </fieldset>
    );
};