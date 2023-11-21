import React from 'react';
import HoverImg from '../components/HoverImg';
// import company logos according to tier
import logo_plat1 from '../assets/sponsor-logo/5.png';
import logo_gold1 from '../assets/sponsor-logo/1.png';
import logo_gold2 from '../assets/sponsor-logo/2.png';
import logo_gold3 from '../assets/sponsor-logo/3.png';
import logo_gold4 from '../assets/sponsor-logo/4.png';
import logo_silver1 from '../assets/sponsor-logo/6.png';
import logo_silver2 from '../assets/sponsor-logo/7.png';
import logo_silver3 from '../assets/sponsor-logo/8.png';
import logo_bronze1 from '../assets/sponsor-logo/10.png';
import logo_bronze2 from '../assets/sponsor-logo/12.png';
import logo_bronze3 from '../assets/sponsor-logo/11.png';
import logo_bronze4 from '../assets/sponsor-logo/9.png'
import logo_material1 from '../assets/sponsor-logo/13.png';
import logo_material2 from '../assets/sponsor-logo/14.png';
import Pdf from '../assets/sponsors-package/Sponsorship_Information.pdf';

function Sponsors() {
    // adjust the size of the sponsors' logos
    let class_margin_top = "60px";
    let plat_col_size = "col-6"
    let gold_col_size = "col-5"
    let silver_col_size = "col-4"
    let bronze_col_size = "col-3"
    let material_col_size = "col-2"
    // note that there should be 1 per row for platinum, 2 per row for gold, 3 per row for silver, 4 per row for bronze, and 5 per row for material


    return (
        <div className="About" style={{marginTop: "30px", padding: "10%", alignContent: "center", minHeight: "80vh"}}>

        <h1>Support the team</h1>

        <p>
        The UWaterloo Concrete Canoe Team operates primarily on sponsorship. 
        By sponsoring our team, you are providing students with an invaluable experiential learning opportunity, and exposure to engineering design, structural analysis, sustainability assessments, construction, project management, and more. 
        We actively seek both monetary and in-kind contributions. 
        </p>
        <p>
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

        {/*Platinum Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Platinum Sponsors</h1>
            <hr style={{backgroundColor:"gray", height:'4px', border:0}}></hr>
            {/*Melloul-Blamey Construction Inc.*/}
            <div className="row justify-content-center" style={{marginBottom: "30px"}}> 
                <div className={plat_col_size}>
                    <HoverImg src={logo_plat1} hoverText='Melloul-Blamey Construction Inc.' href='https://www.melloul.com/'></HoverImg>
                </div>
            </div>
        </div>
        
        {/*Gold Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Gold Sponsors</h1>
            <hr style={{backgroundColor:"gold", height:'4px', border:0}}></hr>

            <div className="row justify-content-center" style={{marginBottom: "30px"}}> 
                {/*Brown & Beattie Ltd.*/}
                <div className={gold_col_size}>
                    <HoverImg src={logo_gold1} hoverText='Brown & Beattie Ltd.' href='https://www.brownbeattie.com/'></HoverImg>
                </div>
                {/*CanCrete Equipment Ltd.*/}
                <div className={gold_col_size}>
                    <HoverImg src={logo_gold2} hoverText='CanCrete Equipment Ltd.' href='https://www.cancrete.ca/'></HoverImg>
                </div>
            </div>
            <div className="row justify-content-center" style={{marginBottom: "30px"}}> 
                {/*Dillon Consulting*/}
                <div className={gold_col_size}>
                    <HoverImg src={logo_gold3} hoverText='Dillon Consulting' href='https://www.dillon.ca/'></HoverImg>
                </div>
                 {/*GHD*/}
                <div className={gold_col_size}>
                    <HoverImg src={logo_gold4} hoverText='GHD Group' href='https://www.ghd.com/'></HoverImg>
                </div>
            </div>

        </div>

        {/*Silver Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Silver Sponsors</h1>
            <hr style={{backgroundColor:"silver", height:'4px', border:0}}></hr>
            
            <div className="row justify-content-center" style={{marginBottom: "30px"}}> 
                {/*Mansteel Rebar Ltd.*/}
                <div className={silver_col_size}>
                    <HoverImg src={logo_silver1} hoverText='Mansteel Rebar Ltd.' href='https://ca.linkedin.com/company/mansteel-rebar?trk=public_post_follow-view-profile' ></HoverImg>
                </div>
                {/*PCL*/}
                <div className={silver_col_size}>
                    <HoverImg src={logo_silver2} hoverText='PCL Construction' href='https://www.pcl.com/ca/en' ></HoverImg>
                </div>
                {/*SOPREMA*/}
                <div className={silver_col_size}>
                    <HoverImg src={logo_silver3} hoverText='SOPREMA' href='https://www.soprema.ca/en/' ></HoverImg>
                </div>
            </div>

            
        </div>

        {/*Bronze Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Bronze Sponsors</h1>
            <hr style={{backgroundColor:"darkgoldenrod", height:'4px', border:0}}></hr>

            
            <div className="row justify-content-center" style={{marginBottom: "30px"}}> 
                {/*Arcadis Ltd.*/}
                <div className={bronze_col_size}>
                    <HoverImg src={logo_bronze1} hoverText='Arcadis' href='https://www.arcadis.com/en?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_content=GreaterTorontoAreaCA'></HoverImg>
                </div>

                {/*GIP Ltd.*/}
                <div className={bronze_col_size}>
                    <HoverImg src={logo_bronze2} hoverText='Global Infrastructure Partners Inc.' href='https://gipi.com/'></HoverImg>
                </div>

                {/*MTE Consultants Inc. */}
                <div className={bronze_col_size}>
                    <HoverImg src={logo_bronze3} hoverText='MTE Consultants Inc.' href='https://www.mte85.com/'></HoverImg>
                </div>
            
                {/*Alberici Constructors Ltd.*/}
                <div className={bronze_col_size}>
                    <HoverImg src={logo_bronze4} hoverText='Alberici Constructors Ltd.' href='https://alberici.com/' ></HoverImg>
                </div>
            </div>

        </div>
        
        {/*Material Class*/}
        <div className="row justify-content-center text-center" style={{marginTop: class_margin_top}}>
            <h1>Material Sponsors</h1>
            <hr style={{backgroundColor:"black", height:'4px', border:0}}></hr>

            
            <div className="row justify-content-center" style={{marginBottom: "30px"}}>
                {/*Master Builders Solutions Canada Inc. */}
                <div className={material_col_size}>
                    <HoverImg src={logo_material1} hoverText='Master Builders Solutions Canada Inc.' href='https://www.master-builders-solutions.com/en-us'></HoverImg>
                </div>

                {/*rainfresh*/}
                <div className={material_col_size}>
                    <HoverImg src={logo_material2} hoverText='Rainfresh' href='https://rainfresh.ca/'></HoverImg>
                </div>
            </div>
            

        </div>
        
        </div>
    );
}

export default Sponsors;

