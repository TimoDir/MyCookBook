export function Ingredient({id, rowNum, handleRemove}){
    return (
        <div className="ingredientRow" id={id}>
            <div className="ingredient">
                <label htmlFor={`ingredient${rowNum}`}>
                    <span>ingredient*</span>
                    <input type="text" name={`ingredient${rowNum}`} id={`ingredient${rowNum}`} required/>
                </label>
            </div>
            <div className="quantity">
                <label htmlFor={`quantity${rowNum}`}>
                    <span>quantity*</span>
                    <input type="number" name={`quantity${rowNum}`} id={`quantity${rowNum}`} min="0" required/>
                </label>
            </div>
            <div className="unit">
                <label htmlFor={`unit${rowNum}`}>
                    <span>Unit</span>
                    <input type="text" name={`unit${rowNum}`} id={`unit${rowNum}`}/>
                </label>
            </div>
            {rowNum === 0 ? "" : <button id={id} onClick={handleRemove}>X</button>}
        </div>
    );
};