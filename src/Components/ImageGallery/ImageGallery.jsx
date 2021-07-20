import React from "react";

function ImageGallery({ id, Imagelink, Title, verify }) { 
  return (
    // using image ternary operator to use ImageGallery file for different classes
    <div className= {verify ? "col-lg-4 col-md-4 col-12 mb-3" : "col-lg-3 col-md-4 col-6 mb-3"}>
      <div className={verify ? "image pt-3 d-block h-100 "  : "image pt-3 d-block h-100 border rounded" }>
        <img className="img-fluid " src={Imagelink} alt="" /> 
        <p className="info"> 
          <strong>{Title}</strong>
        </p>  
      </div>
    </div> 
  );
}

export default ImageGallery;
