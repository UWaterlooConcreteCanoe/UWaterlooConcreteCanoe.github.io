import React from 'react';
import logo from '../assets/ConcreteCanoeLogoImage.png';
import headImage from '../assets/ConcreteCanoeHeadImage-crop.jpg';
import pastCanoes from '../assets/HomePastCanoes.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        <div className="col-12 col-md-3">
          <img src={logo} className="img-fluid" alt="Concrete Canoe Logo" />
          <p className="display-5 text-center">University of Waterloo Concrete Canoe</p>
        </div>
        <div className="col-12 col-md-9">
          <img src={headImage} className="img-fluid" alt="Concrete Canoe Head" />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-md-4 text-center">
          <Link to={`/about`} className="display-6 link-dark">Who We Are</Link>
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