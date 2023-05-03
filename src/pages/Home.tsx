import React from 'react';
import logo from '../assets/ConcreteCanoeLogoImage.png';
import headImage from '../assets/ConcreteCanoeHeadImage-crop.jpg';
import pastCanoes from '../assets/HomePastCanoes.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{marginBottom: "10vh"}}>
      <img src={headImage} className="img-fluid" alt="Concrete Canoe Head" style={{overflowX: "hidden", objectFit: "none", width: "100vw", height: "110vh", opacity: "0.4", zIndex: "0", filter: "brightness(50%)"}} />
      <div className="carousel-caption" style={{zIndex: "1", position: "absolute", top: "30vh"}}>
        <h1 className=" text-center">University of Waterloo Concrete Canoe</h1>
        <div className="row justify-content-center text-center g-0" style={{marginTop: "75px"}}>
          <div className="col-9 col-md-3 justify-content-right">
            <img src={logo} className="img-fluid" alt="Concrete Canoe Logo" style={{width: "80%", height: "auto"}}/>
            
          </div>
          <div className="col-12 col-md-9">
            <h3 className='dislay-6'>The University of Waterloo Concrete Canoe Team is a student design team that will compete in the Canadian National Concrete Canoe Competition (CNCCC)</h3>
          </div>
        </div>
      </div>

      

      <div className="row pt-3">
        <div className="col-12 col-md-4 text-center">
          <Link to={`/join-us`} className="display-6 link-dark">Join Us</Link>
        </div>
        <div className="col-12 col-md-4 text-center" style={{transform: "rotate(0)"}}>
          <Link to={`/past-canoes`} className="display-6 link-dark">
            Past Canoes
            <img src={pastCanoes} className="img-fluid w-100 p-3" alt="Past Canoes" />
          </Link>
        </div>
        <div className="col-12 col-md-4 text-center">
          <Link to={`/sponsors`} className="display-6 link-dark">Sponsors</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;