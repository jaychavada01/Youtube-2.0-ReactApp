import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data.js";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoList_url)
      .then((respone) => respone.json())
      .then((data) => setData(data.items));
  };

  // to run fetchdata we will use useEffect
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="feed">
      {data.map((item) => {
        return (
          <Link
            key={item}
            to={`Video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default Feed;
