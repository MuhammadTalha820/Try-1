import React from 'react';
import "./Post.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import postdata from "./PostData.jsx"

const Post = () => {
  return (
    <div>
      {postdata.map((val, index) => (
        <div className='Post' key={index}>
          <div className="PostItem">
            <div className="Posttop">
              <img src={val.postprofile} alt="" />
              <div className="postinfo">
                <h3>{val.postName}</h3>
                <p>{val.posttime}</p>
              </div>
            </div>

            <div className="post_title">
              <h3>{val.post_title}</h3>
            </div>

            <div className="PostMid">
              <img src={val.postimage} alt="" />
            </div>

            <div className="Postbottom">
              <div className="PostAction">
                <div className="PostActioninfo">
                  <ThumbUpOffAltIcon /> Like
                </div>
                <div className="PostActioninfo">
                  <ChatBubbleOutlineIcon /> Comment
                </div>
                <div className="PostActioninfo">
                  <ShareIcon /> Share
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
