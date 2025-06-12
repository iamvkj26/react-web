import api from "./api";

export const postUser = async (addData) => {
    try {
        const response = await api.post("/post", addData);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const getUsers = async () => {
    try {
        const response = await api.get("/getAll");
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const updateUser = async (_id, email, name, age, gender, city) => {
    try {
        const response = await api.patch(`/update/${_id}`, { email, name, age, gender, city });
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    };
};