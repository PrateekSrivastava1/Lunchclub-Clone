import React from "react";
import Image1 from "/lunch-club-clone/src/SignInPageImages/Image1.svg";
import Image2 from "/lunch-club-clone/src/SignInPageImages/Image2.svg";
import Image3 from "/lunch-club-clone/src/SignInPageImages/Image3.svg";

function ImageShow() {
  window.onload = () => {
    // setTime();
  };
  const setTime = () => {
    setInterval(imageShow, 1000);
  };
  var index = 1;

  const imageShow = () => {
    var imageData;
    if (index === 1) {
      imageData = { Image1 };
    } else if (index === 2) {
      imageData = { Image2 };
    } else if (index === 3) {
      imageData = { Image3 };
    } else { 
      index = 1; 
    }
    document.getElementById("image").src = "" + imageData;
    index++;
  };
  return (
    <div id="imageData" className="pt-5">
      <img src={Image1} width="250px" height="250px" alt="Image" id="image" />
    </div>
  );
}

export default ImageShow;
