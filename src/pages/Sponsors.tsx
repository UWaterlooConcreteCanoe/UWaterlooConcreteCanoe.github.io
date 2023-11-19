import React from 'react';
import HoverImg from '../components/HoverImg';
// import company logos according to tier
import logo_plat1 from '../assets/sponsor-logo/Melloul-Blamey Logo (for Light Background).jpg';
import logo_gold1 from '../assets/sponsor-logo/brown and beattie.png';
import logo_gold2 from '../assets/sponsor-logo/cancrete.png';
import logo_gold3 from '../assets/sponsor-logo/dillon.jpg';
import logo_gold4 from '../assets/sponsor-logo/GHD_Logo_Black_RGB.jpg';
import logo_silver1 from '../assets/sponsor-logo/Mansteel-Logo.gif';
import logo_silver2 from '../assets/sponsor-logo/PCL Logo.png';
import logo_silver3 from '../assets/sponsor-logo/soprema-logo.jpg';
import logo_bronze1 from '../assets/sponsor-logo/Arcadis.jpeg';
import logo_bronze2 from '../assets/sponsor-logo/GIP Logo.jpg';
import logo_bronze3 from '../assets/sponsor-logo/MTE_Colour.jpg';
import logo_material1 from '../assets/sponsor-logo/MBS_logo.jpg';
import logo_material2 from '../assets/sponsor-logo/Rainfresh.jpg';
import Pdf from '../assets/sponsors-package/Sponsorship_Information.pdf';

/*
// name, website, location of logo
const plat = new Map([
    ['Melloul-Blamey Construction Inc.', ['https://www.melloul.com/', '/workspaces/UWaterlooConcreteCanoe.github.io/src/assets/sponsor-logo/Melloul-Blamey Logo (for Light Background).jpg']]
]);

const gold = new Map([
    ['Brown & Beattie', ["https://www.brownbeattie.com/", '/workspaces/UWaterlooConcreteCanoe.github.io/src/assets/sponsor-logo/brown and beattie.png']],
    ['CanCrete Equipment Ltd.', ["https://www.cancrete.ca/", '/workspaces/UWaterlooConcreteCanoe.github.io/src/assets/sponsor-logo/cancrete.png']]
]);
*/

function Sponsors() {
    // adjust the size of the sponsors' logos
    let plat_max_height = "300px";
    let plat_max_width = "400px";
    let gold_max_height = "200px";
    let gold_max_width = "300px";
    let silver_max_height = "180px";
    let silver_max_width = "250px";
    let bronze_max_height = "150px";
    let bronze_max_width = "250px";
    let material_max_height = "120px";
    let material_max_width = "200px";
    let class_margin_top = "60px";

    return (
        <div className="About" style={{marginTop: "30px", padding: "10%", alignContent: "center", minHeight: "80vh"}}>

        <h1>Support Us</h1>

        <p>
        The UWaterloo Concrete Canoe Team operates primarily on sponsorship. 
        By sponsoring our team, you are providing students with an invaluable experiential learning opportunity, and exposure to engineering design, structural analysis, sustainability assessments, construction, project management, and more. 
        We actively seek both monetary and in-kind contributions. 
        Without the generous contributions of our sponsors our team would not exist, and we are extremely grateful for their efforts continual efforts to enhance our education and support experiential learning. 
        </p>

        <p style={{marginTop: "30px"}}><b>Interested in sponsoring us? Email us or click on the package below for more information!</b></p>

        {/*button for email*/}
        <a href="mailto:concretecanoe@uwaterloo.ca"> {/*replace with correct email*/}
            <button type="button" style={{marginRight: "30px"}} className="btn btn-warning">Email</button>
        </a>

        {/*button for sponsorship pdf*/}
        <a href={Pdf} download target='blank'>
            <button type="button" className="btn btn-warning">Sponsor Package</button>
        </a>

        {/*Diamond Class, img max width=500px*/}
        {/*
        <div className="row justify-content-center text-center" style={{marginTop: "60px"}}>
            <h1>Diamond Sponsors</h1>
            <hr style={{backgroundColor:"black", height:'4px', border:0}}></hr>
        
        </div>
        */}

        {/*Platinum Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Platinum Sponsors</h1>
            <hr style={{backgroundColor:"gray", height:'4px', border:0}}></hr>
            {/*Melloul-Blamey Construction Inc.*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:plat_max_width, height:plat_max_height, backgroundColor:'white', display:'flex', alignItems:'center'}}>
                    <HoverImg src={logo_plat1} hoverText='Melloul-Blamey Construction Inc.' href='https://www.melloul.com/'></HoverImg>
                </div>
            </div>
        </div>
        
        {/*Gold Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Gold Sponsors</h1>
            <hr style={{backgroundColor:"gold", height:'4px', border:0}}></hr>
            {/*Brown & Beattie Ltd.*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:gold_max_width, height:gold_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_gold1} hoverText='Brown & Beattie Ltd.' href='https://www.brownbeattie.com/'></HoverImg>
                </div>
            </div>

            {/*CanCrete Equipment Ltd.*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:gold_max_width, height:gold_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_gold2} hoverText='CanCrete Equipment Ltd.' href='https://www.cancrete.ca/'></HoverImg>
                </div>
            </div>

            {/*Dillon Consulting*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:gold_max_width, height:gold_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_gold3} hoverText='Dillon Consulting' href='https://www.dillon.ca/'></HoverImg>
                </div>
            </div>

            {/*GHD*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:gold_max_width, height:gold_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_gold4} hoverText='GHD Group' href='https://www.ghd.com/'></HoverImg>
                </div>
            </div>
        </div>

        {/*Silver Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Silver Sponsors</h1>
            <hr style={{backgroundColor:"silver", height:'4px', border:0}}></hr>
            {/*Mansteel Rebar Ltd.*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:silver_max_width, height:silver_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_silver1} hoverText='Mansteel Rebar Ltd.' href='https://ca.linkedin.com/company/mansteel-rebar?trk=public_post_follow-view-profile' height="160" width="250"></HoverImg>
                </div>
            </div>

            {/*PCL*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:silver_max_width, height:silver_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_silver2} hoverText='PCL Construction' href='https://www.pcl.com/ca/en' width="250" height = "160"></HoverImg>
                </div>
            </div>

            {/*SOPREMA*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:silver_max_width, height:silver_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_silver3} hoverText='SOPREMA' href='https://www.soprema.ca/en/' width="250" height = "160"></HoverImg>
                </div>
            </div>
        </div>

        {/*Bronze Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Bronze Sponsors</h1>
            <hr style={{backgroundColor:"darkgoldenrod", height:'4px', border:0}}></hr>
            {/*Acadis Ltd.*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:bronze_max_width, height:bronze_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_bronze1} hoverText='Acadis' href='https://www.arcadis.com/en?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_content=GreaterTorontoAreaCA' width="200" height = "150"></HoverImg>
                </div>
            </div>

            {/*GIP Ltd.*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:bronze_max_width, height:bronze_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_bronze2} hoverText='Global Infrastructure Partners Inc.' href='https://gipi.com/' width="200" height = "150"></HoverImg>
                </div>
            </div>

            {/*MTE Consultants Inc. */}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:bronze_max_width, height:bronze_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_bronze3} hoverText='MTE Consultants Inc.' href='https://www.mte85.com/' width="200" height = "150"></HoverImg>
                </div>
            </div>
            

        </div>
        
        {/*Material Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Material Sponsors</h1>
            <hr style={{backgroundColor:"black", height:'4px', border:0}}></hr>
            {/*Master Builders Solutions Canada Inc. */}
            <div className="company" style={{marginBottom: "30px"}}>
                <div className='container' style={{width:material_max_width, height:material_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_material1} hoverText='Master Builders Solutions Canada Inc.' href='https://www.master-builders-solutions.com/en-us'></HoverImg>
                </div>
            </div>

            {/*rainfresh*/}
            <div className="company" style={{marginBottom: "30px"}}> 
                <div className='container' style={{width:material_max_width, height:material_max_height, backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <HoverImg src={logo_material2} hoverText='Rainfresh' href='https://rainfresh.ca/'></HoverImg>
                </div>
            </div>
            

        </div>
        
        </div>
    );
    
    
    //pictures of each sponsor
    //hover feature for pictures
    //click feature for pictures
}

export default Sponsors;

