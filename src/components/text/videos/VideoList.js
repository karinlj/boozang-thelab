import Video from "./Video";

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.length > 0 && (
        <div>
          <h3 className="">Related videos on YouTube</h3>
          <ul>
            {videos.map((video) => (
              <Video video={video} key={video.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default VideoList;
