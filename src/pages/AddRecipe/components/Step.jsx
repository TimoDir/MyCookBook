export function Step({id, rowNum, handleRemove}){
    return (
        <div className="step-container" id={id}>
            <label htmlFor={`step${rowNum}`}><p>step {rowNum+1} - </p></label>
            <textarea name={`step${rowNum}`} id={`step${rowNum}`} cols="75" rows="7" required/>
            <button className="delete-btn" id={id} onClick={handleRemove}>X</button>
        </div>
    );
};