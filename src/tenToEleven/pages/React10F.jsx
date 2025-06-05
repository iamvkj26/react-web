import React from "react";

const React10F = React.memo(({ name }) => {
    return (
        <>
            <h5 className="card-title">This is also 10th Question using Functional Component</h5>
            <p className="card-text">"Rendering Pure Component"</p>
            <p className="card-text">Hello, {name}</p>
        </>
    );
});

export default React10F;