import { useState, useMemo } from "react";

const React20 = () => {

    const [count, setCount] = useState(0);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1e9; i++) {
            return num * 2;
        };
    };

    const result = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <>
            <h5 className="card-title"> This is 20th Question</h5>
            <p className="card-text">Result: {result}</p>
            <button type="button" className="btn btn-outline-light m-2" onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};

export default React20;