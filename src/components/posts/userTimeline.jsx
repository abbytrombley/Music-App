import React from "react";
import "./Timeline.css";
import { Post } from "./Post";
import { useState } from "react";
import { Avatar } from "@mui/material";
import "./posts.css"
import { useEffect } from "react";
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, Telegram } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { deletePost, getPostByUserId} from "../../services/postService";


export const UserTimeline = ({currentUser}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostByUserId(currentUser.id).then((postArray) => {
        setPosts(postArray)
    })
  }, [currentUser])

  useEffect(() => {
        document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/ba/c1/11/bac111ba4d24cbc8e7caa9c762f4903d.jpg)`
      } , [])

      const handleDelete = (post) => {
            deletePost(post.id).then(() => {
            getPostByUserId(currentUser.id).then((postArray) => {
                setPosts(postArray)
                })
            });
          };
      

  return (
    <div className="timeline">
      <div className="timeline__left">
      <div>
            <Link to="/post/newPost">
                <Button className="button">Make New Post</Button>
            </Link>
            </div>
        <div className="timeline__posts">
          {posts?.map((post) => {
            return (
            <div className="post" key={post.id}>
              <div className="post__header">
                <div className="post__headerAuthor">
                  <Avatar>{post.user.username.charAt(0).toUpperCase()}</Avatar>
                  {post.user.username} 
                </div>
              </div>
              <div className="post__image">
                <img src={post.postImage} alt="" />
              </div>
              <div className="post__footer">
                <div className="post__footerIcons">
                  <div className="post_iconsMain">
                    <FavoriteBorder className="postIcon" />
                    <ChatBubbleOutline className="postIcon" />
                    <Telegram className="postIcon" />
                    {" "}
                  </div>
                  <div className="post__iconSave">
                    <BookmarkBorder className="postIcon" />
                  </div>
                </div>
                <div>Liked by {post.likes}</div>
                <div>{post.timestamp}</div>
                <div>
                    <h2>{post.caption}</h2>
                </div>
                <Link to={`/post/${post.id}/editPost`}>
                       <Button color="primary" size="sm" style={{ margin: 5 }}>
                        Edit
                      </Button>
                </Link>
                     <Button
                      color="danger"
                      size="sm"
                      style={{ margin: 5 }}
                      onClick={() => handleDelete(post)}>
                      Delete
                    </Button>
              </div>
            </div>
          )})}
            <div>
            <Link to="/post/newPost">
                <Button className="button">Make New Post</Button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserTimeline;





