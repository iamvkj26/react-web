import { useState, useRef, useEffect } from "react";
import { postUser, getUsers, deleteUser } from "../api/users";
import AxiosUpdate from "./AxiosUpdate";

const Axios = () => {

    const [postUsers, setPostUsers] = useState({ email: "", name: "", age: "", gender: "", city: "" });
    const [getUsers1, setGetUsers1] = useState([]);
    const [updateUsers, setUpdateUsers] = useState({ id: "", eemail: "", ename: "", eage: "", egender: "", ecity: "" });
    const refOpenCanvas = useRef(null);

    const handleAddUsers = async () => {
        try {
            await postUser(postUsers);
            alert("User added successfully");
            setPostUsers({ email: "", name: "", age: "", gender: "", city: "" });
            fetchUsers();
        } catch (err) {
            console.error("Add failed:", err.message);
        };
    };

    const changeAddUser = (e) => setPostUsers({ ...postUsers, [e.target.name]: e.target.value });

    const fetchUsers = () => {
        getUsers()
            .then(res => setGetUsers1(res))
            .catch(err => console.error(err));
    };

    const updateUser = (currentUser) => {
        refOpenCanvas.current.click();
        setUpdateUsers({ id: currentUser.id, eemail: currentUser.email, ename: currentUser.name, eage: currentUser.age, egender: currentUser.gender, ecity: currentUser.city })
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            alert("User deleted successfully");
            fetchUsers();
        } catch (err) {
            console.error("Delete failed:", err.message);
        };
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Axios</h5>
                    <h6 className="card-text">Create User</h6>
                    <form className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Add email..." id="email" name="email" value={postUsers.email} onChange={changeAddUser} required />
                        <input type="text" className="form-control" placeholder="Add name..." id="name" name="name" value={postUsers.name} onChange={changeAddUser} required />
                        <input type="number" className="form-control" placeholder="Add age..." id="age" name="age" value={postUsers.age} onChange={changeAddUser} required />
                        <input type="text" className="form-control" placeholder="Add gender..." id="gender" name="gender" value={postUsers.gender} onChange={changeAddUser} required />
                        <input type="text" className="form-control" placeholder="Add city..." id="city" name="city" value={postUsers.city} onChange={changeAddUser} required />
                        <button className="btn btn-outline-secondary" type="button" onClick={handleAddUsers} disabled={postUsers.length === 5}>Add User</button>
                    </form>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h6 className="card-text">All Users</h6>
                        </div>
                        {
                            getUsers1?.length === 0 ? (
                                <h6 className="card-body">No users created yet!</h6>
                            ) : (
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">City</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getUsers1?.map((element, index) => {
                                                return (
                                                    <tr key={element.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{element.email}</td>
                                                        <td>{element.name}</td>
                                                        <td>{element.age}</td>
                                                        <td>{element.gender}</td>
                                                        <td>{element.city}</td>
                                                        <td><button className="btn btn-outline-warning" onClick={() => { updateUser(element) }}>Edit</button> | <button className="btn btn-outline-danger" onClick={() => handleDelete(element.id)}>Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            )}
                    </div>
                </div>
            </div>

            <AxiosUpdate refOpenCanvas={refOpenCanvas} updateUsers={updateUsers} setUpdateUsers={setUpdateUsers} fetchUsers={fetchUsers} />
        </>
    );
};

export default Axios;