import youtubeLogo from "../../../img/youtube_logo.png";
const Video = ({ video }) => {
  return (
    <li>
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="youtube_link"
        aria-label={`Video at YouTube for: ${video.text} opens in new window`}
      >
        <img src={youtubeLogo} alt="YouTube logo" className="youtube_logo" />
        <span> {video.text}</span>
      </a>
    </li>
  );
};

export default Video;
