import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

const Post = ({userName, caption, imageURL }) => {
  return (
    <div className="post">
      <div className="post__header">
        {/* header avatar username */}
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <h1>{userName}</h1>
      </div>
      {/* Images */}
      <img className="post__image" src={imageURL} alt="" />

      {/* Username Caption */}
      <h4 className="post__text">
        <strong>{userName}</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
