const SubChildPD = ({ user }) => {
    return (
        <>
            <p className="card-text">Sub Child Component</p>
            <p className="card-text">Name: {user.name}</p>
        </>
    );
};

export default SubChildPD;