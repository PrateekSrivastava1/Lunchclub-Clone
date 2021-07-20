import { useEffect, useRef, useState, React } from "react";

import "./ImageShow.css";

function ImageShow() {

  const imgs = [
    "https://lunchclub.com/static/media/tell.9ad906c2.svg",
    "https://lunchclub.com/static/media/connection.5e02f461.svg",
    "https://lunchclub.com/static/media/conversation.5acf03c4.svg",
  ];

  const indexRef = useRef(1);

  const [currImg, setCurrImg] = useState(
    "https://lunchclub.com/static/media/conversation.5acf03c4.svg"
  );

  useEffect(() => {
    const variable = setTimeout(() => {
      setCurrImg(imgs[indexRef.current]);
      indexRef.current = indexRef.current + 1;
      if (indexRef.current === imgs.length) indexRef.current = 0;
    }, 1000);
    return () => clearTimeout(variable);  
  }, [currImg]);
  // console.log(currImg);

  const imgStyle = {
    backgroundImage: `url(${currImg})`, 
    transition: " all 0.2s ease", 
  };

  return (
    <>
      <div className="pt-5">
        <div
          className="showImg"
          width="250px"
          height="250px"
          style={imgStyle}
        ></div>
      </div>
    </> 
  );
}

export default ImageShow;
