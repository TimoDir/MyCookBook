export function Step({id, rowNum, step, handleRemove}){
    //console.log(step)
    let stepContent;
    if(step[0]){
        stepContent = step[0].step;
    };

    return (
        <div className="step-container" id={id}>
            <label htmlFor={`step${rowNum}`}><p>step {rowNum+1} - </p></label>
            <textarea name={`step${rowNum}`} id={`step${rowNum}`} cols="75" rows="7" defaultValue={stepContent} required/>
            <button className="delete-btn" id={id} onClick={handleRemove}>X</button>
        </div>
    );
};