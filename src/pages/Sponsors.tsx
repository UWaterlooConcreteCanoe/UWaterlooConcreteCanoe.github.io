import React from 'react';

function Sponsors() {
    return (
        <div className="About" style={{marginTop: "50px", padding: "10%", alignContent: "center", minHeight: "80vh"}}>
        The UWaterloo Concrete Canoe Team operates primarily on sponsorship. By sponsoring our team, you are providing students with an invaluable experiential learning opportunity, and exposure to engineering design, structural analysis, sustainability assessments, construction, project management, and more. We actively seek both monetary and in-kind contributions. 
        
        Without the generous contributions of our sponsors our team would not exist, and we are extremely grateful for their efforts continual efforts to enhance our education and support experiential learning. 

        <p style={{marginTop: "30px"}}>Interested in sponsoring us? Email us or click on the package below for more information! </p>

        <button type="button" style={{marginRight: "30px"}} className="btn btn-warning">Email</button>
        <button type="button" className="btn btn-warning">Sponsor Package</button>
        </div>
    );
    //button for sponsorship pdf
    //button for email
    //pictures of each sponsor
    //hover feature for pictures
    //click feature for pictures
}

export default Sponsors;