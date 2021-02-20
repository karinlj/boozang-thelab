import VideoList from "./VideoList";

//Home, overview, intro
export const HomeVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/x0TqzRIIsSM",
      text: "Welcome to The Lab",
    },
    {
      id: 2,
      url: "https://youtu.be/guQlg80v3V8",
      text: "Boozang Promotion",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
export const IntroductionVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/-91YkYkmjZk",
      text: "Why learn test automation",
    },
    {
      id: 2,
      url: "https://youtu.be/850MnrHoEYc",
      text: "Signing up",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
export const OverviewVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/u7HRbyUAFDg",
      text: "Recording a first test",
    },
    {
      id: 2,
      url: "https://youtu.be/POqOQ-hQuTk",
      text: "Overview of the Boozang tool",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
//Lists
export const SortedListVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/9zIJX5v9vhE",
      text: "Adding items to a list",
    },
    {
      id: 2,
      url: "https://youtu.be/SgEpi29xTQ0",
      text: "Adding item based on data parameter",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};

export const UnsortedListVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/Fh1HH-BVJkE",
      text: "Re-using sorted list test cases for unsorted module",
    },
    {
      id: 2,
      url: "https://youtu.be/3c4ZX7IESyM",
      text: "Cleanup item in unsorted list",
    },
    {
      id: 3,
      url: "https://youtu.be/nFzlyKzNHHg",
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
export const CatShelterVideos = () => {
  const videos = [];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
//Forms
export const FormValidationVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/6L6CLCKSf1s",
      text: "Doing a form using static data",
    },
    {
      id: 2,
      url: "https://youtu.be/1blw4gEsr9M",
      text: "Doing a form fill with dynamic data",
    },
    {
      id: 3,
      url: "https://youtu.be/xBMvng8KDx0",
      text: "Adding data validation",
    },
    {
      id: 4,
      url: "https://youtu.be/6fp2SNvSE-g",
      text: "Randomly generating form data",
    },
    {
      id: 5,
      url: "https://youtu.be/l3pFnkSVrMs",
      text: "Autofilling forms using Boozang regexp engine",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};

//Timing
export const SpeedGameVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/92CUwz7s4sM",
      text: "Handling re-tries for dynamic elements",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
export const WaitGameVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/0uanO5fNJYc",
      text: "Handling explicit waits",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
//Bug reporting
export const VisualBugsVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/Z4Cvpx8aPIE",
      text: "Using the comment function to annotate bugs",
    },
    {
      id: 2,
      url: "https://youtu.be/xB3RPQKUNRM",
      text: "Reporting bugs and team work",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
//Conditional logic
export const YellowOrBlueVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/_yhTQ_WJc1Q",
      text: "Conditional Logic",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};

export const CatOrDogVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/vIcb8hGayGk",
      text: "Conditional Logic Cat or Dog",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
//DOM changes
export const ScrambleItemsVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/qDmnE3e6Npc",
      text: "Robustness of tests and how to use AI repair",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
export const MultiScrambleVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/Wkterst3HPo",
      text: "Repairing a multi-action tests using AI",
    },
  ];
  return (
    <div className="video_section">
      <VideoList videos={videos} />
    </div>
  );
};
