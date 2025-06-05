import { useState } from "react";

const React5 = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h5 className="card-title">This is 5th Question</h5>
            <p className="card-text">You clicked {count} times</p>
            <button type="button" className="btn btn-outline-light" onClick={() => setCount(count - 1)}>Click Me</button>
        </>
    );
};

export default React5;