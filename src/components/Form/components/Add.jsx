import * as React from "react";
import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export function Add ({type, ingredients, steps}){
    const [idCount, setIdCount] = React.useState(1);
    const [ids, setIds] = React.useState([`${type}0`]);
    const [data, setData] = React.useState([]);

    const handleAdd = () =>{
        setIds(state => [...state, `${type}${idCount}`]);
        setIdCount(state => state + 1);
    };

    const handleRemove = (event) =>{
        setIds(ids.filter(id => id !== event.target.id))
    };

    const handleData = (data) =>{
        if(typeof(data) === 'object'){
            if(data.length > 0){
                let dataIdCount = 1;
                let dataIds = [`${type}0`];
                let newData = [];
                for (let i = 0; i < data.length -1; i++){
                    dataIds.push(`${type}${dataIdCount}`);
                    dataIdCount +=1;
                };
                setIds(dataIds);
                setIdCount(dataIdCount);
                for (let i = 0; i < data.length; i++){
                    newData[i] = data[i];
                    newData[i].id = dataIds[i];
                }
                setData(newData);
            };
        };
    };

    React.useEffect(()=>{
        handleData(ingredients);
        handleData(steps);
    }, []);

    return(
        <fieldset className={type}>
            <legend><h4>{type}s:</h4></legend>
            {ids.map((id, key) =>{
                if(type === "ingredient"){
                    let ingredient = data.filter(ingredient => ingredient.id === id);
                    return <Ingredient key={`ingredient${key}`} id={id} rowNum={key} ingredient={ingredient} handleRemove={handleRemove} />
                } else if(type === "step"){
                    let step = data.filter(step => step.id === id);
                    return <Step key={`step${key}`} id={id} rowNum={key} step={step} handleRemove={handleRemove} />;
                };
            })}
            <button className="add-btn" onClick={handleAdd}>Add {type}</button>
        </fieldset>
    );
};