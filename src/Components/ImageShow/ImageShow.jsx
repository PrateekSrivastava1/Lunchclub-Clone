import { useEffect, useRef, useState, React } from "react";

import "./ImageShow.css";

function ImageShow() {

  // an array to store all image url
  const imgs = [
    "https://lunchclub.com/static/media/tell.9ad906c2.svg",
    "https://lunchclub.com/static/media/connection.5e02f461.svg",
    "https://lunchclub.com/static/media/conversation.5acf03c4.svg",
  ];

  // using useRef to control image show
  const indexRef = useRef(1);

  // using useState to change state and to set the current state
  const [currImg, setCurrImg] = useState(
    "https://lunchclub.com/static/media/conversation.5acf03c4.svg"
  );

  useEffect(() => {
    
    // using set timeout method to change images on every 1000ms 
    // and incrementing indexRef by one to access diff index.  
    const variable = setTimeout(() => {
      setCurrImg(imgs[indexRef.current]);
      indexRef.current = indexRef.current + 1;
      if (indexRef.current === imgs.length) indexRef.current = 0;
    }, 1000);
    return () => clearTimeout(variable);  
  }, [currImg]);
  // console.log(currImg);

  // showing images by changing background image 
  const imgStyle = {
    backgroundImage: `url(${currImg})`, 
    transition: " all 0.2s ease", 
  };

  return (
    <>
      <div className="pt-5">
        <div
          className="showImg"
          style={imgStyle}
        ></div>
      </div>
    </> 
  );
}

export default ImageShow;
