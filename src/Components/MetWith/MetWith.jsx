import {React, useState } from "react";
import "./MetWith.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import { Link } from "react-router-dom";
function MetWith({firstPersonDP, firstPersonName, secondPersonName, time, secondPersonDP, aboutSecondPerson, }) {
  
  
  //using usestate hooks to give functionality to like button
  // is "liked" is true then we will change the text.
  const [liked, setLiked] = useState(false);

  const likeChange = () => {
    setLiked(!liked);
  };

  return (
    <div className="mt-2 connectionBody">
      <div className=" container mb-3">
        <div className="metWith">
          <img className="upperImg" src={firstPersonDP} alt="" />
          <div className="name">
            <span className="upperName firstPerson">{firstPersonName}</span>
            <span className="upperName"> met </span>
            <span className="upperName secondPerson">{secondPersonName}</span>
          </div>
        </div>
        <div className="metWithTime info">Met on {time}</div>
        <div className="container metWithBottom">
          <div className="bottomBody">
            <img className="lowerImg" src={secondPersonDP} alt="" /> 
            <span className="lowerName"> {secondPersonName} </span>
            <p className="info">{aboutSecondPerson}</p>
            <Link to="/Invite">
              <button className="meetPeopleButton lowerName">
                Meet people like {secondPersonName}
              </button>
            </Link>
          </div>
        </div>
        <div className="likeBody mr-2 mt-1 mb-3"> 
          <span
            className={liked ? "likedButton upperName" : "likeButton upperName"}
          >
            {/* using onclick event to call likeChange function to set liked state */}
            <ThumbUpAltOutlinedIcon onClick={likeChange} />
            {liked ? "Liked" : "Like"} 
          </span>
        </div>
      </div>
    </div>
  );
}

export default MetWith;
