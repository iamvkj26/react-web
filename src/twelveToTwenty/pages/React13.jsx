import { useState } from "react";

const React13 = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h5 className="card-title">This is 13th Question</h5>
            <p className="card-text">You clicked {count} times</p>
            <button type="button" className="btn btn-outline-light" onClick={() => setCount(count + 1)}>Increment</button>
            <hr />
        </>
    );
};

export default React13;