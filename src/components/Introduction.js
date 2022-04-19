import { IntroductionVideos } from "./text/videos/VideoSections";
import { IntroductionIntro } from "./text/Intros";

const Introduction = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-xl-7">
        <IntroductionIntro />
      </div>

      <div className="col-12 col-md-4">
        <IntroductionVideos />
      </div>
    </div>
  );
};
export default Introduction;
