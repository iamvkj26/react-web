import { useState, useEffect } from "react";

const React7 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    useEffect(() => {
        console.log("Component updated");
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Running...");
        }, 5000);

        return () => {
            clearInterval(interval);
            console.log("Component unmounted");
        };
    }, []);

    return (
        <>
            <h5 className="card-title">This is 7th Question</h5>
            <p className="card-text">Count: {count}</p>
            <button type="button" className="btn btn-outline-light" onClick={() => setCount(count + 1)}>Increment</button>
            <hr />
        </>
    );
};

export default React7;