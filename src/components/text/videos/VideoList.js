import Video from "./Video";

const VideoList = ({ videos }) => {
  return (
    <>
      {videos.length > 0 && (
        <>
          <h3 className="">Related videos on YouTube</h3>
          <ul>
            {videos.map((video) => (
              <Video video={video} key={video.id} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default VideoList;
