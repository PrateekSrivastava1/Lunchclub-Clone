import React from "react";
import { useEffect, useRef, useState } from "react";
// import "./styles.css";

import Image1 from "/lunch-club-clone/src/SignInPageImages/Image1.svg";
import Image2 from "/lunch-club-clone/src/SignInPageImages/Image2.svg";
import Image3 from "/lunch-club-clone/src/SignInPageImages/Image3.svg";

function ImageShow() {
  const imgs = [
    "https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-14.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg",
    "https://www.wallpaperbetter.com/wallpaper/753/862/502/lake-blue-evening-calm-nature-2K-wallpaper.jpg",
    "https://www.marshallsindia.com/images/younique/nature/nature-cover-slider-6.jpg",
    "https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
    "https://cdn.pixabay.com/photo/2016/11/01/12/53/blur-1788144_960_720.jpg",
  ];

  const indexRef = useRef(1);

  const [currImg, setCurrImg] = useState(
    "https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-14.jpg"
  );

  useEffect(() => {
    const variable = setTimeout(() => {
      setCurrImg(imgs[indexRef.current]);
      indexRef.current = indexRef.current + 1;
      if (indexRef.current === imgs.length) indexRef.current = 0;
    }, 1000);
    return () => clearTimeout(variable);
  }, [currImg]);

  const imgStyle = {
    backgroundImage: `url(${currImg})`,
    transition: " all 0.5s ease",
  };

  return (
    <>
      <div className="pt-5">
        <div
          className="img"
          style={imgStyle}
        ></div>
      </div>
    </>
  );
}

export default ImageShow;
