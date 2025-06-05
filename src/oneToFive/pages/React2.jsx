import { useState } from "react";

const React2 = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h5 className="card-title">This is the 2nd Question</h5>
            <button type="button" className="btn btn-outline-light" onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
            <hr />
        </>
    );
};

export default React2;