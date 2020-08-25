//Dependencies
import React from "react";
import Vbio from "./vbio.jpeg";

//Create functional component to render bio photo and photo border
function BioPic() {
  return (
    <>
      <div>
        <div id="preview-shadow">
          <div id="preview">
            <img id="profile_pic" src={Vbio} alt="bio_pic" />
            <div id="corner-tl" className="corner"></div>
            <div id="corner-tr" className="corner"></div>

            <div id="corner-br" className="corner"></div>
            <div id="corner-bl" className="corner"></div>
          </div>
        </div>
      </div>
    </>
  );
}

//Export component
export default BioPic;
