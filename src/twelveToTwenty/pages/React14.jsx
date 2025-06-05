import { useEffect } from "react";

const React14 = () => {

    useEffect(() => {
        console.log("Component mounted");
        return () => console.log("Component will unmount");
    }, []);

    useEffect(() => console.log("Component updated"));
    useEffect(() => console.log("Count changed!"), []);

    useEffect(() => {
        const timer = setInterval(() => console.log("Running..."), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <h5 className="card-title">This is 14th Question</h5>
            <p className="card-text">Hello, useEffect()</p>
            <hr />
        </>
    );
};

export default React14;