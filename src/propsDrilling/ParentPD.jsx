import ChildPD from "./ChildPD";

const ParentPD = ({ user }) => {
    return (
        <>
            <p className="card-text">Parent Component</p>
            &darr;
            <ChildPD user={user} />
        </>
    );
};

export default ParentPD;