export function Step({id, rowNum, handleRemove}){
    return (
        <div className="Step" id={id}>
            <label htmlFor={`step${rowNum}`}>
                <span>step {rowNum+1} - </span>
                <textarea name={`step${rowNum}`} id={`step${rowNum}`} cols="75" rows="3" required/>
            </label>
            <button id={id} onClick={handleRemove}>X</button>
        </div>
    );
};