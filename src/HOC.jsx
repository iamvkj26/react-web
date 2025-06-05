import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import Counter from "./components/Counter";
import withLoading from "./components/hoc/withLoading";
import withCounter from "./components/hoc/withCounter";
import usersData from "./data/users";

const UserListWithLoading = withLoading(UserList);
const EnhancedCounter = withCounter(Counter);

const HOC = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUsers(usersData);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <h5 className="card-title">Users App</h5>
                    <UserListWithLoading isLoading={isLoading} users={users} />
                    <hr />
                    <h5 className="card-title">Counter App</h5>
                    <EnhancedCounter />
                </div>
            </div>
        </>
    );
};

export default HOC;