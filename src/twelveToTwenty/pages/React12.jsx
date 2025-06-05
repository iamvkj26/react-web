import { useState, useEffect } from "react";

const React12 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
        return () => console.log("Component unmounted");
    }, []);

    return (
        <>
            <h5 className="card-title">This is 12th Question</h5>
            <p className="card-text">You clicked {count} times</p>
            <button type="button" className="btn btn-outline-light" onClick={() => setCount(count + 1)}>Click Me</button>
            <hr />
        </>
    );
};

export default React12;