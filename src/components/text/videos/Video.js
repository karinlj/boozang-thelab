import youtubeLogo from "../../../img/youtube_logo.png";
const Video = ({ video }) => {
  return (
    <li>
      <a href={video.url} target="_blank" rel="noopener noreferrer" aria-label={`Video at YouTube for: ${video.text}`}>
        <img src={youtubeLogo} alt="YouTube logo" className="youtube_logo" />
        <span> {video.text}</span>
      </a>
    </li>
  );
};

export default Video;
