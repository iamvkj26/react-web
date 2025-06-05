import useCounter from "../hooks/useCounter";

const CustomHook = () => {

    const { count, increment, decrement, reset } = useCounter();

    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <h5 className="card-title">Custom Hook</h5>
                    <p className="card-text">Count: {count}</p>
                    <button type="button" className="btn btn-outline-light m-2" onClick={increment}>+</button>
                    <button type="button" className="btn btn-outline-light m-2" onClick={reset}>Reset</button>
                    <button type="button" className="btn btn-outline-light m-2" onClick={decrement}>-</button>
                </div>
            </div>
        </>
    );
};

export default CustomHook;