import React from "react";
import canoe2022 from '../assets/past-canoes/2022.jpg';
import canoe2021 from '../assets/past-canoes/2021.jpg';
import canoe2020 from '../assets/past-canoes/2020.jpg';
import canoe2019 from '../assets/past-canoes/2019.jpg';
import canoe2018 from '../assets/past-canoes/2018.jpg';
import canoe2016 from '../assets/past-canoes/2016.jpg';
import canoe2015 from '../assets/past-canoes/2015.jpg';
// new canoe import goes anywhere above this comment ^

function PastCanoe(picture: string, name: string, blurb: string) {
    return (
        <div className="row justify-content-center" style={{marginTop: "1.5%", marginBottom: "1.5%"}}>
            <div className="col-5">
                <img src={picture} className="img-fluid" alt={name}></img>
            </div>
            <div className="col-5">
                <h3>{name}</h3>
                <p>{blurb}</p>
            </div>
        </div>
    )
}

function PastCanoes() {
    // add a PastCanoe following the same format as the other ones listed
    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center" style={{marginTop: "75px", marginBottom: "1.5%"}}><h1>Past Canoes</h1></div>

            {/** new canoe info goes below this comment! (do not remove this comment) */}
            {PastCanoe(canoe2022, "THE FLYING GOOSEMAN (2022)", "The Flying Gooseman was a pirate themed canoe developed for the 2022 CNCCC competition in Sherbrooke, Quebec. This was the first competition back in person in two years due to the COVID-19 pandemic and the team brought home the award for the Most Sustainable Mix.")}
            {PastCanoe(canoe2021, "ONLINE COMPETITION (2021)", "The 2021 CNCCC competition was conducted online, where instead of designing and constructing an altogether new canoe, competitors were required to analyze and reverse-engineering a previous prototype and provide additional design recommendations. The Waterloo team conducted a review of their 2019 prototype, and placed 3rd in the overall rankings. ")}
            {PastCanoe(canoe2020, "THE GREY GOOSE (2020)", "The 2020 competition was cancelled due to the COVID-19 pandemic. At this point, all work was halted on the Grey Goose, a canoe themed after the wild beasts known to chase Waterloo students across campus— Canadian geese. ")}
            {PastCanoe(canoe2019, "THE LIGHTNING BOLT (2019)", "The Lightning Bolt was Waterloo’s design for the 2019 CNCCC. This design involved significant innovation in the hull design, improving the canoe’s speed and stability without compromising its maneuverability.")}
            {PastCanoe(canoe2018, "THE WATERLOO ICEBERG (2018)", "The 2018 CNCCC was hosted in Waterloo and the team presented The Waterloo Iceberg. This canoe was designed using a new custom-built Grasshopper program, which was used to generate and analyze various hull canoe configurations, speeding up the team’s iterative optimization for the hull design. ")}
            {PastCanoe(canoe2016, "THE TITANIC (2016)", "Waterloo’s submission to the 2016 CNCCC held in Montreal, was ironically named The Titanic, themed after the James Cameron classic. Ironically, she did not sink. Innovation in the canoe design included the elimination of structural ribs and the inclusion of a waterproofing admixture within the concrete mix.")}
            {PastCanoe(canoe2015, "THE DARK HORSE (2015)", "The 2015 CNCCC was the Waterloo Concrete Canoe design team’s first competition. This canoe was a 500-pound invincible beast.")}

        </div>
    );
}

export default PastCanoes;
