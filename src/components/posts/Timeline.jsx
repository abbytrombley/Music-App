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
import { deletePost, getAllPosts } from "../../services/postService";

export const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postArray) => {
        setPosts(postArray)
    })
  }, [])

  useEffect(() => {
        document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/ba/c1/11/bac111ba4d24cbc8e7caa9c762f4903d.jpg)`
      } , [])

      const handleDelete = (post) => {
            deletePost(post.id).then(() => {
              getAllPosts().then((postsArray) => {
                setPosts(postsArray);
              });
            });
          };
      

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
        <div>
            <Link to="/post/newPost">
                <Button className="button">Make New Post</Button>
            </Link>
            </div>
          {posts.map((post) => {
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

export default Timeline;







// {
//     user: "abby",
//     postImage:
//       "https://i.pinimg.com/474x/7f/57/f3/7f57f35ab113c3ce26cedd2107d08176.jpg",
//       caption: "New photo, this is my caption",
//     likes: 12,
//     timestamp: "2d",
//   },
//   {
//     user: "Barry",
//     postImage:
//       "https://i.pinimg.com/474x/a5/e9/f5/a5e9f59e8f2dea67bf44aadd009dbfac.jpg",
//       caption: "This is an upcoming show",
//     likes: 120,
//     timestamp: "2d",
//   },
//   {
//     user: "liam",
//     postImage:
//       "https://i.pinimg.com/736x/ab/d7/92/abd7921535b094d9eb0ed570155768d5.jpg",
//       caption: "Stevie Nicks",
//     likes: 12,
//     timestamp: "2d",
//   },
