import { useParams } from "react-router";
import React21 from "./pages/React21";
import React24 from "./pages/React24";
import React25 from "./pages/React25";

const TwentyOneToTwentyFive = () => {

    const { id } = useParams();

    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <React21 />
                    <React24 id={id} />
                    <React25 />
                </div>
            </div>
        </>
    );
};

export default TwentyOneToTwentyFive;