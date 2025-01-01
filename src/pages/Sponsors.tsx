import React from 'react';
import HoverImg from '../components/HoverImg';
// import company logos according to tier
import { Sponsor, sponsors } from '../assets/sponsor-logo/sponsors-helper';
import Pdf from '../assets/sponsors-package/Sponsorship_Information.pdf';


function Tier(tier: string, max: number, col_size: string, sponsors: Sponsor[]) {
    // put a maximum number of sponsors per row
    let rows = [];
    while (sponsors.length > 0) {
        rows.push(sponsors.splice(0, max));
    }
    console.log(rows);
    // make react row 
    return (
        <div className="row justify-content-center text-center" style={{ marginTop: "60px" }}>
            <h1>{tier} Sponsors</h1>
            <hr style={{ backgroundColor: "gray", height: "4px", border: 0 }}></hr>
            {rows.map((row, index) => {
                return (
                    <div className="row justify-content-center" style={{ marginBottom: "30px" }}>
                        {row.map((sponsor, index) => {
                            return (
                                <div className={col_size}>
                                    <HoverImg src={sponsor.logo} hoverText={sponsor.name} href={sponsor.link}></HoverImg>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );

}

function Sponsors() {
    // adjust the size of the sponsors' logos
    let diamond_col_size = "col-12"
    let plat_col_size = "col-5"
    let gold_col_size = "col-4"
    let silver_col_size = "col-3"
    let bronze_col_size = "col-2"
    let material_col_size = "col-1"
    let diamond_max = 1;
    let plat_max = 2;
    let gold_max = 3;
    let silver_max = 4;
    let bronze_max = 5;
    let material_max = 6;
    // if on mobile, material should be bigger
    if (window.innerWidth < 768) {
      diamond_col_size = "col-12"
      plat_col_size = "col-6"
      gold_col_size = "col-5"
      silver_col_size = "col-4"
      bronze_col_size = "col-3"
      material_col_size = "col-2"
      diamond_max = 1;
      plat_max = 1;
      gold_max = 2;
      silver_max = 3;
      bronze_max = 4;
      material_max = 6;
    }

    
    
    //filter sponsors by tier and sort by name alphabetically
    const diamond_sponsors = sponsors.filter(s => s.tier === "Diamond").sort((a, b) => a.name.localeCompare(b.name));
    const platinum_sponsors = sponsors.filter(s => s.tier === "Platinum").sort((a, b) => a.name.localeCompare(b.name));
    const gold_sponsors = sponsors.filter(s => s.tier === "Gold").sort((a, b) => a.name.localeCompare(b.name));
    const silver_sponsors = sponsors.filter(s => s.tier === "Silver").sort((a, b) => a.name.localeCompare(b.name));
    const bronze_sponsors = sponsors.filter(s => s.tier === "Bronze").sort((a, b) => a.name.localeCompare(b.name));
    const material_sponsors = sponsors.filter(s => s.tier === "Material").sort((a, b) => a.name.localeCompare(b.name));

    return (
      <div
        className="About"
        style={{
          marginTop: "30px",
          padding: "10%",
          alignContent: "center",
          minHeight: "80vh",
        }}
      >
        <h1>Support the team</h1>

        <p>
          The UWaterloo Concrete Canoe Team operates primarily on sponsorship.
          By sponsoring our team, you are providing students with an invaluable
          experiential learning opportunity, and exposure to engineering design,
          structural analysis, sustainability assessments, construction, project
          management, and more. We actively seek both monetary and in-kind
          contributions.
        </p>
        <p>
          Without the generous contributions of our sponsors our team would not
          exist, and we are extremely grateful for their efforts continual
          efforts to enhance our education and support experiential learning.
        </p>

        <p style={{ marginTop: "30px" }}>
          <b>
            Interested in sponsoring us? Email us or click on the package below
            for more information!
          </b>
        </p>

        {/*button for email*/}
        <a href="mailto:concretecanoe@uwaterloo.ca">
          {" "}
          {/*replace with correct email*/}
          <button
            type="button"
            style={{ marginRight: "30px" }}
            className="btn btn-warning"
          >
            Email
          </button>
        </a>

        {/*button for sponsorship pdf*/}
        <a href={Pdf} download target="blank">
          <button type="button" className="btn btn-warning">
            Sponsor Package
          </button>
        </a>

        {/*Diamond Class*/}
        {Tier("Diamond", diamond_max, diamond_col_size, diamond_sponsors)}

        {/*Platinum Class*/}
        {Tier("Platinum", plat_max, plat_col_size, platinum_sponsors)}

        {/*Gold Class*/}
        {Tier("Gold", gold_max, gold_col_size, gold_sponsors)}

        {/*Silver Class*/}
        {Tier("Silver", silver_max, silver_col_size, silver_sponsors)}

        {/*Bronze Class*/}
        {Tier("Bronze", bronze_max, bronze_col_size, bronze_sponsors)}

        {/*Material Class*/}
        {Tier("Material", material_max, material_col_size, material_sponsors)}

      </div>
    );
}

export default Sponsors;

