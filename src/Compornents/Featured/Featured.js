import "./Featured.css";
import { React, useState } from "react";
import FeaturedImg from "../../images/FeaturedImages/deadpool-wolverine.jpg";
import images from "../../images/movies/deadpool-wolverine.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Featured = ({ type }) => {
  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered(true);
  }
  function handleHoverOut() {
    setHovered(false);
  }

  return (
    <div className="Featured">
      {type && (
        <div className="cateogory">
          <span>{type === "movies" ? "Movies" : "Tv Series"}</span>
          <select className="" name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        className={hovered ? "featured-image-hovered" : "featured-image"}
        src={FeaturedImg}
        alt="Featured-img"
      />
      <div className="information-container">
        <img
          className="image"
          src={images}
          onMouseOver={handleHover}
          onMouseLeave={handleHoverOut}
          alt="image1"
        />

        <br />

        <span className="description">
          Borderlands is a 2016 action-adventure video game developed by Sony
          Computer Entertainment and
        </span>
        <br />
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon></PlayArrowIcon>
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon></InfoOutlinedIcon>
            <span className="">info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
