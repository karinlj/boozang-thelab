import { useState, useEffect } from "react";

export const Video = ({ url, children }) => {
  //const [url] = useState(props.url);

  return (
    <li>
      <a href={url} target="_blank" rel="noopener">
        {children}
      </a>
    </li>
  );
};

//Lists
export const SortedListVideos = () => {
  return (
    <div className="video_section">
      <h5>Related videos on Youtube</h5>
      <ul>
        <Video url="https://www.youtube.com/embed/9zIJX5v9vhE">
          {" "}
          Adding items to a list
        </Video>
        {/* <li>
          <a
            href="https://www.youtube.com/embed/9zIJX5v9vhE"
            target="_blank"
            rel="noopener"
          >
            Adding items to a list
          </a>
        </li> */}
        <li>
          <a
            href="https://www.youtube.com/embed/SgEpi29xTQ0"
            target="_blank"
            rel="noopener"
          >
            Adding item based on data parameter
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/embed/QngusW1ODWA"
            target="_blank"
            rel="noopener"
          >
            Adding items using a data loop
          </a>
        </li>
      </ul>
    </div>
  );
};
