import SubChildPD from "./SubChildPD";

const ChildPD = ({ user }) => {
    return (
        <>
            <p className="card-text">Child Component</p>
            &darr;
            <SubChildPD user={user} />
        </>
    );
};

export default ChildPD;