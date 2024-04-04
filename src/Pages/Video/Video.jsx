import { useParams } from "react-router-dom";
import Playvideo from "../../components/PlayVideo/Playvideo";
import Recommended from "../../components/Recommended/Recommended";
import "./Video.css";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};
export default Video;
