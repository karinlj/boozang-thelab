import { OverviewVideos } from "./text/videos/VideoSections";
import { OverviewIntro } from "./text/Intros";
const Overview = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-xl-7">
        <OverviewIntro />
      </div>

      <div className="col-12 col-md-4">
        <OverviewVideos />
      </div>
    </div>
  );
};
export default Overview;
