//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const {postData} = props
  console.log(postData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
     {postData.map((postObj) => {
        return <Post key = {postObj.username} post={postObj}/>
      })}
    </div>
  );
};

export default PostsPage;
