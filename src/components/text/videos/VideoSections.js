import VideoList from "./VideoList";
import "../text.scss";

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
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
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
      url:
        "https://www.youtube.com/watch?v=HbgZTJgm_4Q&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=1",
      text: "Introduction to the lab",
    },
    {
      id: 3,
      url:
        "https://www.youtube.com/watch?v=9wIJZ53gSvA&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=3",
      text: "Signing up",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
export const OverviewVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=9wIJZ53gSvA&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=3",
      text: "Overview of the tool",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/watch?v=m1UWhsV1008&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=4",
      text: "Recording your first test",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
//Lists
export const SortedListVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=xoxnYz-CM1E&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=8",
      text: "Introduction to lists",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/watch?v=jqvloqI5OO4&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=9",
      text: "Binding to data in sorted list",
    },
    {
      id: 3,
      url:
        "https://www.youtube.com/watch?v=Pcror2KLlrg&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=10",
      text: "Looping over array data",
    },
    {
      id: 4,
      url:
        "https://www.youtube.com/watch?v=wmroWgwcYUs&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=11",
      text: "Creating a cleanup function",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};

export const UnsortedListVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=D4ALazlS6sU&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=12",
      text: "Using copy-paste to replicate test",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/watch?v=hBsMpv5M8bQ&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=13",
      text: "Delete specific item from unsorted list",
    },
    {
      id: 3,
      url:
        "https://www.youtube.com/watch?v=0vg-m8V7c2M&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=14",
      text: "Creating a test suite",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
export const CatShelterVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=D2fWVsnH0Yc&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=20",
      text: "Automating radio buttons in cat shelter",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/watch?v=pLbc77EC9hw&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=21",
      text: "Provision a list of cats using a CSV loop",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
//Forms
export const FormFillVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=QszdZrYQw0Y&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=15",
      text: "Introduction to form fills",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/watch?v=DLOYOiEGc1U&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=16",
      text: "Using the autofill function",
    },
    {
      id: 3,
      url:
        "https://www.youtube.com/watch?v=V28qHkc3ExM&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=17",
      text: "Execute as single action",
    },
    {
      id: 4,
      url:
        "https://www.youtube.com/watch?v=VXhAns5XwOs&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=18",
      text: "Using regular expressions to generate data",
    },
    {
      id: 5,
      url:
        "https://www.youtube.com/watch?v=IB2NxuGrcqA&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=19",
      text: "Introducing data scopes",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};

//Timing
export const SpeedGameVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=cex5hf5ui6M&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=5",
      text: "Speed",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
export const WaitGameVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=ZBbYX87jXCQ&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=6",
      text: "Handling explicit waits",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
//Bug reporting
export const VisualBugsVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=PEvFPp7NO7Y&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=22",
      text: "Introduction to visual bugs",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/watch?v=-W5l3Xd9zdc&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=23",
      text: "A note on test reload policy",
    },
    {
      id: 3,
      url:
        "https://www.youtube.com/watch?v=4ICgYmVb--Y&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=24",
      text: "Adding on-screen annotations",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
//Conditional logic
export const YellowOrBlueVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=TZtC-y8W7FE&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=7",
      text: "Conditional Logic",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
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
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
//DOM changes
export const ScrambleItemsVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=52kPIvoVxcc&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=25",
      text: "Robustness of tests and how to customize the elment selector",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
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
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
//strings
export const ConcatStringsVideos = () => {
  const videos = [
    {
      id: 1,
      url:
        "https://www.youtube.com/watch?v=A1E_h42Dx10&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=26",
      text: "Introduction to Javascript and extract data action",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/watch?v=_JCb82CcYFU&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=27",
      text: "Customizing your element selectors",
    },
    {
      id: 3,
      url:
        "https://www.youtube.com/watch?v=S7a6yS84Nf8&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=28",
      text: "Using debug data view",
    },
    {
      id: 4,
      url:
        "https://www.youtube.com/watch?v=5kUhpkZOIck&list=PLhdB7gylbUzpRBVLjpi4KI-g2j7U0y9Qr&index=29",
      text: "Using breakpoints and console",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
//games
export const KittenCollectVideos = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/1g35EKDY5bo",
      text: "Playing collecting kittens",
    },
    {
      id: 2,
      url: "https://youtu.be/ScLjPwMlxe0",
      text: "Performance tuning of kitten game test",
    },
  ];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
export const CanvasGameVideos = () => {
  const videos = [];
  return (
    <section className="video_section">
      <VideoList videos={videos} />
    </section>
  );
};
