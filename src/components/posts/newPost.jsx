import { useState } from "react";
import "./posts.css";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { createPost } from "../../services/postService";


export const NewPost = ({currentUser}) => {
  const [newPost, setNewPost] = useState({
    message: "",
    timestamp: "",
  });

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()

    const post = {
        message: newPost.message,
        timestamp: newPost.timestamp,
        userId: currentUser.id
    }
    createPost(post).then(() => {
        navigate("/posts")
    })

  }

  return (
    <div className="form">
      <form className="post-form">
        <h2>New Post</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Post Name"
            onChange={(event) => {
              const postCopy = { ...newPost };
              postCopy.message = event.target.value;
              setNewPost(postCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            type="date"
            className="form-control"
            placeholder="Timestamp"
            onChange={(event) => {
              const postCopy = { ...newPost };
              postCopy.timestamp = event.target.value;
              setNewPost(postCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <Button onClick={handleSave}>
            Submit New Post
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
