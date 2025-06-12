import { useRef } from "react";
import { updateUser } from "../api/users";

const AxiosUpdate = ({ refOpenCanvas, updateUsers, setUpdateUsers, fetchUsers }) => {

    const refCloseCanvas = useRef(null);

    const handleUpdateUsers = async () => {
        try {
            await updateUser(updateUsers._id, updateUsers.eemail, updateUsers.ename, updateUsers.eage, updateUsers.egender, updateUsers.ecity);
            alert("User updated successfully")
            refCloseCanvas.current.click();
            fetchUsers();
        } catch (err) {
            console.error("Update failed:", err.message);
        };
    };

    const changeUpdateUser = (e) => setUpdateUsers({ ...updateUsers, [e.target.name]: e.target.value });

    return (
        <>
            <button ref={refOpenCanvas} className="d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"></button>

            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Update User</h5>
                    <button ref={refCloseCanvas} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInput1" className="form-label">Enter your email address...</label>
                            <input type="email" className="form-control" id="exampleInput1" name="eemail" value={updateUsers.eemail} onChange={changeUpdateUser} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInput2" className="form-label">Enter your full name...</label>
                            <input type="text" className="form-control" id="exampleInput2" name="ename" value={updateUsers.ename} onChange={changeUpdateUser} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInput3" className="form-label">Enter your age...</label>
                            <input type="number" className="form-control" id="exampleInput3" name="eage" value={updateUsers.eage} onChange={changeUpdateUser} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInput4" className="form-label">Enter your gender...</label>
                            <input type="text" className="form-control" id="exampleInput4" name="egender" value={updateUsers.egender} onChange={changeUpdateUser} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInput5" className="form-label">Enter your city...</label>
                            <input type="text" className="form-control" id="exampleInput4" name="ecity" value={updateUsers.ecity} onChange={changeUpdateUser} required />
                        </div>
                        <button className="btn btn-outline-secondary" type="button" onClick={handleUpdateUsers} disabled={updateUsers.length === 5}>Update User</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AxiosUpdate;