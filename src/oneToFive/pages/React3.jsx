import { useState } from "react";

const React3 = () => {

    const [name, setName] = useState("John");

    return (
        <>
            <h5 className="card-title">This is 3rd Question</h5>
            <p className="card-text">Hello, {name}!</p>
            <button type="button" className="btn btn-outline-light" onClick={() => setName("Joshi")}>Change Name</button>
            <hr />
        </>
    );
};

export default React3;