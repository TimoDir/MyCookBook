export function Ingredient({id, rowNum, handleRemove, ingredient}){
    let name = "";
    let quantity = "";
    let unit = "";

    if(ingredient[0]){
        name = ingredient[0].ingredient;
        quantity = ingredient[0].quantity;
        unit = ingredient[0].unit;
    }
    return (
        <div className="ingredientRow" id={id}>
            <div className="ingredient-info ingredient-type">
                <label htmlFor={`ingredient${rowNum}`}>
                    <p>ingredient* :</p>
                    <input type="text" name={`ingredient${rowNum}`} id={`ingredient${rowNum}`} defaultValue={name} required/>
                </label>
            </div>
            <div className="ingredient-info quantity">
                <label htmlFor={`quantity${rowNum}`}>
                    <p>quantity* :</p>
                    <input type="number" name={`quantity${rowNum}`} id={`quantity${rowNum}`} min="0" defaultValue={quantity} required/>
                </label>
            </div>
            <div className="ingredient-info unit">
                <label htmlFor={`unit${rowNum}`}>
                    <p>Unit :</p>
                    <input type="text" name={`unit${rowNum}`} id={`unit${rowNum}`} defaultValue={unit}/>
                </label>
            </div>
            <div className="ingredient-info ingredient-del-btn">
                {rowNum === 0 ? "" : <button className="delete-btn" id={id} onClick={handleRemove}>X</button>}
            </div>
        </div>
    );
};