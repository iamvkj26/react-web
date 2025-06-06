import { useState } from "react";

const LS = () => {

    const [posts, setPosts] = useState(() => {
        const stored = localStorage.getItem("posts");
        return stored ? JSON.parse(stored) : [];
    });
    const [newPost, setNewPost] = useState({ title: "", body: "" });
    const [editId, setEditId] = useState(null);
    const [editPost, setEditPost] = useState({ title: "", body: "" });

    const saveToLocalStorage = (data) => localStorage.setItem("posts", JSON.stringify(data));

    const createPost = () => {
        const post = { id: Date.now(), ...newPost };
        const updatedPosts = [...posts, post];
        setPosts(updatedPosts);
        saveToLocalStorage(updatedPosts);
        setNewPost({ title: "", body: "" });
    };

    const deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
        saveToLocalStorage(updatedPosts);
    };

    const startEdit = (post) => {
        setEditId(post.id);
        setEditPost({ title: post.title, body: post.body });
    };

    const updatePost = () => {
        const updatedPosts = posts.map(post => post.id === editId ? { ...post, ...editPost } : post);
        setPosts(updatedPosts);
        saveToLocalStorage(updatedPosts);
        setEditId(null);
        setEditPost({ title: "", body: "" });
    };

    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <h5 className="card-title">Local Storage</h5>
                    <h5 className="card-text">Create Post</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add title..." value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
                        <input type="text" className="form-control" placeholder="Add body..." value={newPost.body} onChange={(e) => setNewPost({ ...newPost, body: e.target.value })} />
                        <button className="btn btn-outline-secondary" type="button" onClick={createPost} disabled={newPost.title.length === 0 || newPost.body.length === 0}>Create Library</button>
                    </div>
                    {editId && (
                        <>
                            <h5 className="card-text">Edit Post</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add title..." value={editPost.title}
                                    onChange={(e) => setEditPost({ ...editPost, title: e.target.value })} />
                                <input type="text" className="form-control" placeholder="Add body..." value={editPost.body} onChange={(e) => setEditPost({ ...editPost, body: e.target.value })} />
                                <button className="btn btn-outline-secondary" type="button" onClick={updatePost} disabled={editPost.title.length === 0 || editPost.body.length === 0}>Edit Library</button>
                            </div>
                        </>
                    )}
                    <h5 className="card-text">All Posts</h5>
                    {posts.length === 0 ? (
                        <p className="card-text">No posts created yet.</p>
                    ) : (
                        posts.map((post) => (
                            <div key={post.id}>
                                <h6 className="card-title">{post.title}</h6>
                                <h6 className="card-text mx-2">{post.body}</h6>
                                <button className="btn btn-outline-secondary ms-2" onClick={() => startEdit(post)}>Edit</button>
                                <button className="btn btn-outline-secondary ms-2" onClick={() => deletePost(post.id)}>Delete</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default LS;