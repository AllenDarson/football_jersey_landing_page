import React from "react";
import "../assets/Css/Loaders.css";


function Loader() {
  return (
   <div class="kickedge-loader-container">
    <div class="kickedge-ball-wrapper">
        <div class="kickedge-ball">
            <div class="kickedge-ball-inner">
                <div class="kickedge-line"></div>
                <div class="kickedge-line kickedge-line--two"></div>
                <div class="kickedge-oval"></div>
                <div class="kickedge-oval kickedge-oval--two"></div>
            </div>
        </div>
        <div class="kickedge-shadow"></div>
    </div>
</div>
  );
}

export default Loader;
