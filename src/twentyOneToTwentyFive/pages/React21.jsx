import { useState } from "react";

const React21 = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const name = "John";

    const logIn = () => setLoggedIn(true);

    return (
        <>
            <h5 className="card-title">This is 21st Question</h5>
            <p className="card-text">Hello, {name}!</p>
            {isLoggedIn ? <p className="card-text">Welcome back!</p> : <p className="card-text">Please log in...</p>}
            {isLoggedIn === false ? <button type="button" className="btn btn-outline-light m-2" onClick={logIn}>Log in</button> : <div></div>}
            <hr />
        </>
    );
};

export default React21;