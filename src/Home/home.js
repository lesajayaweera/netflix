import './Home.css';
import  Featured from '../Compornents/Featured/Featured.js'

import Navbar from './../Compornents/Navbar/Navbar.js';
const home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Featured />
    </div>
  )
}

export default home
