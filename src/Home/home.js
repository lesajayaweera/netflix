import "./Home.css";
import Featured from "../Compornents/Featured/Featured.js";
import Navbar from "./../Compornents/Navbar/Navbar.js";
import List from "../Compornents/List/list.js";
const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Series" />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default home;
