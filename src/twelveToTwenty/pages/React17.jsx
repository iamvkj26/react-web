import React, { useCallback, useState } from "react";

const Child = ({ onClick }) => {
    console.log("Child renderd");
    return <button type="button" className="btn btn-outline-light m-2" onClick={onClick}>Click Me</button>
};

const MemoizedChild = React.memo(Child);

const React17 = () => {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return (
        <>
            <h5 className="card-title">This is 17th Question</h5>
            <p className="card-text">You clicked {count} times</p>
            <button type="button" className="btn btn-outline-light m-2" onClick={() => setCount(count + 1)}>{count}</button>
            <MemoizedChild onClick={handleClick} />
            <hr />
        </>
    );
};

export default React17;