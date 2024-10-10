import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { getPostById, updatePost } from "../../services/postService";
import "./posts.css";


export const EditPost = ({currentUser}) => {

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
      postImage: post.postImage,
      caption: post.caption,
      likes: post.likes,
      timestamp: post.timestamp,
      userId: currentUser.id
    };
    updatePost(editedPost).then(() => {
      navigate("/post"); //I SWITCHED THIS TO POST INSTEAD OF POSTS
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2 className="edit__post">Edit Post</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={post.postImage}
              onChange={(event) => {
                const postCopy = { ...post };
                postCopy.postImage = event.target.value;
                setPost(postCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={post.caption}
              onChange={(event) => {
                const postCopy = { ...post };
                postCopy.caption = event.target.value;
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
              value={post.timestamp}
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
