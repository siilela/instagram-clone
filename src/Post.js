import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
//import firebase from "firebase";

const Post = ({ postId, user, userName, caption, imageURL }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    let unsubscribe;
    console.log("unsubscribe", postId);
    // if ({postId}) {
    unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comment")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
    // }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComments = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postId).collection("comment").add({
      text: comment,
      userName: user.displayName,
      // timestamp:firebase.firestore.FieldValue.serverTimeStamp()
    });
    setComments("");
  };

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

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.userName} </strong>
            {comment.text}
          </p>
        ))}
      </div>
      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment...."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></input>
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComments}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
