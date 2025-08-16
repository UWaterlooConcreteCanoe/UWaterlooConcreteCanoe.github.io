import React from "react";
import canoe2025 from '../assets/past-canoes/2025.jpg';
import canoe2024 from '../assets/past-canoes/2024.jpg';
import canoe2023 from '../assets/past-canoes/2023.jpg';
import canoe2022 from '../assets/past-canoes/2022.jpg';
import canoe2021 from '../assets/past-canoes/2021.jpg';
import canoe2020 from '../assets/past-canoes/2020.jpg';
import canoe2019 from '../assets/past-canoes/2019.jpg';
import canoe2018 from '../assets/past-canoes/2018.jpg';
import canoe2016 from '../assets/past-canoes/2016.jpg';
import canoe2015 from '../assets/past-canoes/2015.jpg';
import canoe2014 from '../assets/past-canoes/2014.jpg';
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
        <div className="container-fluid" style={{marginBottom: "10vh"}}>
            <div className="row justify-content-center text-center" style={{marginTop: "75px", marginBottom: "1.5%"}}><h1>Past Canoes</h1></div>

            {/** new canoe info goes below this comment! (do not remove this comment) */}
            {PastCanoe(canoe2025, "HER MAJESTEA (2025)", "Her Majestea was presented at the 2025 CNCCC held in Winnipeg, hosted by the University of Manitoba. This year we placed 5th overall out of 22 other teams! The team also received the Spirit Award after overcoming unexpected challenges and supporting each other throughout the competition. Our presenters accomplished 3rd place in the oral presentations and were outstanding when answering the judges’ technical questions. Regarding the reports, our Concrete Canoe Team came 4th in Project Proposals and 6th in the Enhanced Focused Area Report (EFAR). On the water, the paddling team achieved 6th and 8th in both the women’s and men’s 3 person forwards backwards races. This year marked one of the team’s most successful competitions in the past decade.")}
            {PastCanoe(canoe2024, "DUCK DUCK CANOE (2024)", "For the 2024 CNCCC hosted at Université Laval, our Concrete Canoe Team constructed Duck Duck Canoe. The rubber duck themed canoe was built using a male mould and reintroduced the use of ribs for structural support. This was the most thematic canoe in the history of Waterloo’s concrete canoes.")}
            {PastCanoe(canoe2023, "BAR-B-CANOE (2023)", "Bar-B-Canoe was a barbecue themed canoe constructed for the 2023 CNCCC at Western University. The Bar-B-Canoe came 5th place in Final Product! This was the first year to implement the in-house structural analysis Python scripts.")}
            {PastCanoe(canoe2022, "THE FLYING GOOSEMAN (2022)", "The Flying Gooseman was a pirate themed canoe developed for the 2022 CNCCC competition in Sherbrooke, Quebec. This was the first competition back in person in two years due to the COVID-19 pandemic and the team brought home the award for the Most Sustainable Mix.")}
            {PastCanoe(canoe2021, "ONLINE COMPETITION (2021)", "The 2021 CNCCC competition was conducted online, where instead of designing and constructing an altogether new canoe, competitors were required to analyze and reverse-engineering a previous prototype and provide additional design recommendations. The Waterloo team conducted a review of their 2019 prototype, and placed 3rd in the overall rankings. ")}
            {PastCanoe(canoe2020, "THE GREY GOOSE (2020)", "The 2020 competition was cancelled due to the COVID-19 pandemic. At this point, all work was halted on the Grey Goose, a canoe themed after the wild beasts known to chase Waterloo students across campus— Canadian geese. ")}
            {PastCanoe(canoe2019, "THE LIGHTNING BOLT (2019)", "The Lightning Bolt was Waterloo’s design for the 2019 CNCCC. This design involved significant innovation in the hull design, improving the canoe’s speed and stability without compromising its maneuverability.")}
            {PastCanoe(canoe2018, "THE WATERLOO ICEBERG (2018)", "The 2018 CNCCC was hosted in Waterloo and the team presented The Waterloo Iceberg. This canoe was designed using a new custom-built Grasshopper program, which was used to generate and analyze various hull canoe configurations, speeding up the team’s iterative optimization for the hull design. ")}
            {PastCanoe(canoe2016, "THE TITANIC (2016)", "Waterloo’s submission to the 2016 CNCCC held in Montreal, was ironically named The Titanic, themed after the James Cameron classic. Ironically, she did not sink. Innovation in the canoe design included the elimination of structural ribs and the inclusion of a waterproofing admixture within the concrete mix.")}
            {PastCanoe(canoe2015, "THE PHOENIX (2015)", "The Phoenix was UWaterloo Concrete Canoe’s second CNCCC. This canoe was a 500lb beast.  ")}
            {PastCanoe(canoe2014, "THE DARK HORSE (2014)", "The 2014 CNCCC was the University of Waterloo Concrete Canoe Team’s first competition. The team placed 7th overall and won the Heaviest Canoe Award at 500 lbs.")}
        </div>
    );
}

export default PastCanoes;
