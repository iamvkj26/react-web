import React1 from "./pages/React1";
import React2 from "./pages/React2";
import React3 from "./pages/React3";
import React4 from "./pages/React4";
import React5 from "./pages/React5";

const OneToFive = () => {
    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <React1 />
                    <React2 />
                    <React3 />
                    <React4 names="John DoeX" />
                    <React5 />
                </div>
            </div>
        </>
    );
};

export default OneToFive;