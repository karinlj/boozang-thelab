import VideoList from "./VideoList";

//Lists
export const SortedListVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/9zIJX5v9vhE",
      text: "Adding items to a list",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/SgEpi29xTQ0",
      text: "Adding item based on data parameter",
    },
  ];

  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
{
}
export const UnsortedListVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/Fh1HH-BVJkE",
      text: "Re-using sorted list test cases for unsorted module",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/3c4ZX7IESyM",
      text: "Cleanup item in unsorted list",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/nFzlyKzNHHg",
      text: "Creating a data loop with cleanup",
    },
    {
      id: 4,
      url: "Adding validation condition to loop",
      text: "Adding item based on data parameter",
    },
  ];

  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
