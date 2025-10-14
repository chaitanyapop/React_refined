import { useEffect, useState } from "react";
import api from "./api";

export default function ApiMain() {
  let [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  async function getPostData(controller: any) {
    try {
      let res = await api.get("/posts", { signal: controller.signal });
      setPosts(res.data.slice(0, 5));
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  }

  async function createPost() {
    try {
      let res = await api.post("/posts", newPost);
      setPosts([res.data, ...posts]);
    } catch (err) {
      console.error("Error doing posts:", err);
    }
  }

  async function updatePost(id: any) {
    try {
      let res = await api.put(`/posts/${id}`, {
        title: "Updated title",
        body: "Updated body",
      });
      setPosts((prevData: any) => {
        return prevData.map((p: any) => (p.id == id ? res.data : p));
      });
    } catch (err) {
      console.error("Error updating posts:", err);
    }
  }

  async function deletePost(id: any) {
    try {
      await api.delete(`/posts/${id}`);
      setPosts((prevData: any) => {
        return prevData.filter((p: any) => p.id != id);
      });
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  }

  useEffect(() => {
    let controller = new AbortController();
    getPostData(controller);

    return () => {
      controller.abort();
      controller.signal;
    };
  }, []);
  return (
    <div>
      <h1>CRUD with Axios</h1>

      {/* Create New Post */}
      <input
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={createPost}>Add Post</button>
      {posts.map((post: any) => {
        return (
          <div
            key={post.id}
            style={{ border: "1px solid black", margin: "10px" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => updatePost(post.id)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
