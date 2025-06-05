import { useState, useRef } from "react";

const React25 = () => {

    const [name, setName] = useState("");
    const inputRef = useRef();

    const handleStateSubmit = () => alert(`Input value is: ${name}`);
    const handleRefSubmit = () => alert(`Input value is: ${inputRef.current.value}`);

    return (
        <>
            <h5 className="card-title">This is 25th Question</h5>
            <div>
                <p className="card-text">Controlled Component</p>
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)}></input>
                <button type="button" className="btn btn-outline-light m-2" onClick={handleStateSubmit}>Submit State</button>
            </div>
            <div>
                <p className="card-text">Uncontrolled Component</p>
                <label htmlFor="exampleFormControlInput2" className="form-label">Input</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" ref={inputRef}></input>
                <button type="button" className="btn btn-outline-light m-2" onClick={handleRefSubmit}>Submit Ref</button>
            </div>
        </>
    );
};

export default React25;