import React from "react";

function ImageGallery({ id, Imagelink, Title }) {
  return (
    <div className="col-lg-3 col-md-4 col-6 mb-3">
      <div className="image pt-3 d-block h-100 border rounded">
        <img className="img-fluid " src={Imagelink} alt="" />
        <p className="info">
          <strong>{Title}</strong>
        </p>
      </div>
    </div>
  );
}

export default ImageGallery;
