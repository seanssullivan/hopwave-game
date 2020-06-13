
import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Iframe.scss";

export default function Iframe() {
  let [loading, setLoading] = useState(true);

  // returns a boolean
  // let isIframeLoaded = function () {
  //   let iframe = document.getElementById("iframe");
  //   let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  //   return iframeDoc.readyState === "complete";
  // };

  return (
    <>
      <div className={"outer"}>
        {/* <div id={"circular-progress"} className={"inner"}>
          {loading ? <CircularProgress color={"red"} size={180} /> : null}
        </div> */}
        <div id={"spotify-iframe"} className={"inner"}>
          <iframe
            display={!loading ? "block" : "none"}
            id={"iframe"}
            title="Spotify"
            src="https://open.spotify.com/embed/playlist/3PPbbsJhktmX5Cp6syx7gR"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </>
  );
}
