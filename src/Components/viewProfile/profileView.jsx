import React from "react";
import "./profileView.css";
function profileView() {
  return (
    <div>
      <div className="profileViewBody">
        <p className="info">
          Your network score
          <strong className="underlineEffects">See breakdown</strong>
        </p>

        {/* <strong className="netScore">net score</strong> */}
      </div>
    </div>
  );
}

export default profileView;
