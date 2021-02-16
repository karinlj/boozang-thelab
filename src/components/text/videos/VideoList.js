import Video from "./Video";

const VideoList = ({ videos }) => {
  return (
    <div className="video_section">
      <h5>Related videos on YouTube</h5>
      <ul>
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </ul>
    </div>
  );
};
export default VideoList;
