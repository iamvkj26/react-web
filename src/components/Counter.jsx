const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <>
            <p className="card-text">Count is: {count}</p>
            <button type="button" className="btn btn-outline-light m-2" onClick={increment}>+</button>
            <button type="button" className="btn btn-outline-light m-2" onClick={reset}>Reset</button>
            <button type="button" className="btn btn-outline-light m-2" onClick={decrement}>-</button>
        </>
    );
};

export default Counter;