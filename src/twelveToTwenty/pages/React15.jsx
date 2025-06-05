import { useReducer } from "react";

const React15 = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            case "reset":
                return { count: 0 };
            default:
                return state;
        };
    };

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <h5 className="card-title">This is 15th Question</h5>
            <p className="card-text">Count: {state.count}</p>
            <button type="button" className="btn btn-outline-light m-2" onClick={() => dispatch({ type: "increment" })}>+</button>
            <button type="button" className="btn btn-outline-light m-2" onClick={() => dispatch({ type: "reset" })}>0</button>
            <button type="button" className="btn btn-outline-light m-2 " onClick={() => dispatch({ type: "decrement" })}>−</button>
            <hr />
        </>
    );
};

export default React15;