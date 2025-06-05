import ParentPD from "./ParentPD";

const PropsDrilling = (props) => {

    const { user } = props;

    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <h5 className="card-title">Props Drilling</h5>
                    <p className="card-text">Grand Parent Component</p>
                    &darr;
                    <ParentPD user={user} />
                </div>
            </div>
        </>
    );
};

export default PropsDrilling;