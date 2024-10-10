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
        postImage: newPost.postImage,
        caption: newPost.caption,
        likes: newPost.likes,
        timestamp: newPost.timestamp,
        userId: currentUser.id
    }
    createPost(post).then(() => {
        navigate("/post") //I SWITCHED THIS TO POST INSTEAD OF POSTS
    })

  }

  return (
    <div className="form">
      <form className="post-form">
        <h2 className="new__post">New Post</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Post Image URL"
            onChange={(event) => {
              const postCopy = { ...newPost };
              postCopy.postImage = event.target.value;
              setNewPost(postCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Caption"
            onChange={(event) => {
              const postCopy = { ...newPost };
              postCopy.caption = event.target.value;
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
