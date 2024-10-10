import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, Telegram } from "@mui/icons-material";


export const Post = ({user, postImage, likes, timestamp}) => {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerAuthor">
                    <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                    {user} <span>{timestamp}</span>
                </div> 
             <MoreHorizIcon/>
            </div>
            <div className="post__image">
                <img className="post-image-size"
                src={postImage}
                alt=""
                />
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post_iconsMain">
                        <FavoriteBorder className="postIcon" />
                        <ChatBubbleOutline className="postIcon" />
                        <Telegram className="postIcon" /> 
                    /* </div>
                    <div className="post__iconSave">
                        <BookmarkBorder className="postIcon" />
                    </div>
                </div>
                Liked by {likes}
            </div>
        </div>
    );}
