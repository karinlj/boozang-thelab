import { HomeVideos } from "./text/videos/VideoSections";
import { HomeIntro } from "./text/Intros";
const Home = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-xl-7">
        <HomeIntro />
      </div>
      <div className="col-12 col-md-4">
        <HomeVideos />
      </div>
    </div>
  );
};
export default Home;
