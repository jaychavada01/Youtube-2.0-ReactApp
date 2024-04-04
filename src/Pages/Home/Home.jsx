import { useState } from "react";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/SideBar/Sidebar";
import "./Home.css";

const Home = ({ sidebar }) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  );
};
export default Home;
