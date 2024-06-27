import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { getPostById, updatePost } from "../../services/postService";
import "./posts.css";


export const EditPost = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    getPostById(postId).then((data) => {
      const postObj = data;
      setPost(postObj);
    });
  }, [postId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedPost = {
      id: post.id,
      userId: post.userId,
      message: post.message,
      timestamp: post.timestamp,
    };
    updatePost(editedPost).then(() => {
      navigate("/posts");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2>Edit Post</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={post.message}
              onChange={(event) => {
                const postCopy = { ...post };
                postCopy.message = event.target.value;
                setPost(postCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              type="date"
              className="form-control"
              placeholder={post.timestamp}
              onChange={(event) => {
                const postCopy = { ...post };
                postCopy.timestamp = event.target.value;
                setPost(postCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <Button onClick={handleSave}>
            Save Post
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
