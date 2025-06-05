import { useState, useEffect, useRef } from "react";

const React18 = () => {

    const [count, setCount] = useState(0);

    const prevCount = useRef("empty value");
    const inputRef = useRef(null);

    const focusInput = () => inputRef.current.focus();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    return (
        <>
            <h5 className="card-title">This is 18th Question</h5>
            <p className="card-text">Current Count: {count}</p>
            <p className="card-text">Previous Count: {prevCount.current}</p>
            <button type="button" className="btn btn-outline-light m-2" onClick={() => setCount(c => c + 1)}>Increment</button>
            <button type="button" className="btn btn-outline-light m-2" onClick={() => setCount(c => c - 1)}>Decrement</button>
            <input ref={inputRef} type="text" className="form-control" placeholder="Type here..." />
            <button type="button" className="btn btn-outline-light m-2" onClick={focusInput}>Focus Input</button>
            <hr />
        </>
    );
};

export default React18;