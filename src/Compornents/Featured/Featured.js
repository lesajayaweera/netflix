import './Featured.css';

import { React } from 'react';
import FeaturedImg from "../../images/deadpool-wolverine.jpg";
const Featured =()=>{
    return (
      <div className="Featured">
        <img className="featured-image" src={FeaturedImg} alt="Featured-img"/>
        <div className="info">
              
        </div>
      </div>
    );
}
export default Featured;


