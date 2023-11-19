import React from 'react';
// import company logos
import logo_1 from '/workspaces/UWaterlooConcreteCanoe.github.io/src/assets/sponsor-logo/Melloul-Blamey Logo (for Light Background).jpg';
import logo_2 from '/workspaces/UWaterlooConcreteCanoe.github.io/src/assets/sponsor-logo/brown and beattie.png';
import logo_3 from '/workspaces/UWaterlooConcreteCanoe.github.io/src/assets/sponsor-logo/cancrete.png';

function Sponsors() {
    return (
        <div className="About" style={{marginTop: "50px", padding: "10%", alignContent: "center", minHeight: "80vh"}}>
        
        <p>
        The UWaterloo Concrete Canoe Team operates primarily on sponsorship. 
        By sponsoring our team, you are providing students with an invaluable experiential learning opportunity, and exposure to engineering design, structural analysis, sustainability assessments, construction, project management, and more. 
        We actively seek both monetary and in-kind contributions. 
        Without the generous contributions of our sponsors our team would not exist, and we are extremely grateful for their efforts continual efforts to enhance our education and support experiential learning. 
        </p>

        <p style={{marginTop: "30px"}}>
            <b>Interested in sponsoring us? Email us or click on the package below for more information!</b>
        </p>

        {/*button for email*/}
        <a href="mailto:concretecanoe@uwaterloo.ca"> {/*replace with correct email*/}
        <button type="button" style={{marginRight: "30px"}} className="btn btn-warning">Email</button>
        </a>

        {/*button for sponsorship pdf*/}
        <a href="/workspaces/UWaterlooConcreteCanoe.github.io/src/assets/Sponsorship_Information.pdf" download target='blank'>
        <button type="button" className="btn btn-warning">Sponsor Package</button>
        </a>

        {/*Diamond Class, img max width=600px*/}
        <div className="row justify-content-center text-center" style={{marginTop: "60px"}}>
            <h1>Diamond Sponsors</h1>
        
        </div>

        {/*Platinum Class, img max width=450px*/}
        <div className="row justify-content-center text-center" style={{marginTop: "60px"}}>
            <h1>Platinum Sponsors</h1>

            <div className="company" style={{marginBottom: "30px"}}> 
            {/*clickable name of company*/}
            <a style={{textDecoration:"none"}} href="https://www.melloul.com/" target='blank'>
                <h3 style={{color:"black"}}>
                    Melloul-Blamey Construction Inc. 
                </h3>
            </a>
            {/*clickable picture of company*/}
            <a href="https://www.melloul.com/" target='blank'>
                <img style={{width: 450, height:"100%"}} src={logo_1} alt='Melloul-Blamey Construction Inc. Logo'></img>
            </a>
            </div>
        </div>

        {/*Gold Class, img max width=400px*/}
        <div className="row justify-content-center text-center" style={{marginTop: "60px"}}>
            <h1>Gold Sponsors</h1>

            <div className="company" style={{marginBottom: "30px"}}> 
            <a style={{textDecoration:"none"}} href="https://www.brownbeattie.com/" target='blank'>
                <h3 style={{color:"black"}}>
                    Brown & Beattie Ltd.  
                </h3>
            </a>

            <a href="https://www.brownbeattie.com/" target='blank'>
                <img style={{width: 400, height:"100%"}} src={logo_2}></img>
            </a>
            </div>

            <div className="company" style={{marginBottom: "30px"}}> 
            <a style={{textDecoration:"none"}} href="https://www.cancrete.ca/" target='blank'>
                <h3 style={{color:"black"}}>
                    CanCrete Equipment Ltd.   
                </h3>
            </a>
            <a href="https://www.cancrete.ca/" target='blank'>
                <img src={logo_3}></img>
            </a>
            </div>
        </div>
  

        </div>
    );
    
    
    //pictures of each sponsor
    //hover feature for pictures
    //click feature for pictures
}

export default Sponsors;

