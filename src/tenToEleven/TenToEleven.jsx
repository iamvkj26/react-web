import React10 from "./pages/React10";
import React10F from "./pages/React10F";
import React11 from "./pages/React11";

const TenToEleven = () => {
    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <React10 />
                    <React11 >
                        <React10F name="John" />
                    </React11>
                </div>
            </div>
        </>
    );
};

export default TenToEleven;