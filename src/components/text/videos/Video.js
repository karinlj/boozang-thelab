import youtubeLogo from "../../../img/youtube_logo.png";
const Video = ({ video }) => {
  return (
    <li>
      <a href={video.url} target="_blank" rel="noopener">
        <img src={youtubeLogo} alt="YouTube logo" className="youtube_logo" />
        {video.text}
      </a>
    </li>
  );
};

export default Video;
