import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface SubteamsProps {
    name: string;
    description: string;
}

const subteams: SubteamsProps[] = [
    {
        name: "Hull Design",
        description: "The hull design subteam generates the design of the canoe using modelling and CFD analysis. Currently the team uses an in-house grasshopper file to design the canoe’s shape, which is also used to generate the CNC mold for the canoe, and to produce shear force and bending moment diagrams. Joining the hull design team is a great opportunity to learn and improve parametric design skills through interdisciplinary collaboration between engineering and architecture students."
    },
    {
        name: "Concrete Mix Design",
        description: "The mix team is tasked with the responsibility of designing the concrete component of the concrete canoe. They optimize the concrete mixture to be lightweight, have high tensile strength, and have a reduced environmental impact. Currently, we are exploring the feasibility of incorporating alternative aggregates in our mix and adopting sustainable practices to further optimize our work. Joining the mix team presents an excellent opportunity to become involved in the project, including those who don’t have any experience."
    },
    {
        name: "Spirit",
        description: "The spirit subteam is responsible for the aesthetic design of the canoe, as well as the final report, the technical display, and team merch. They also manage PR items such as running the team social medias, planning team events, community engagement activities and the team’s overall recruiting strategy. This subteam is a great opportunity to flex your creativity, learn a variety of visual design programs, plan team events, and develop your project management skills."
    },
    {
        name: "Programming",
        description: "The programming team is tasked with running a structural analysis of the canoe. They coordinate the canoe’s hull in 3D space and other variable inputs and use them to perform calculations in Python. The scripts that they manage measure several key properties of the canoe, such as flexural stress, shear force, punching shear and bending moment. Our task for the 2023/24 season is to improve the accuracy, capability, and usability of these structural analysis scripts so that they are easier to debug, update, and understand."
    },
    {
        name: "Construction",
        description: "The construction subteam manages the physical creation of the canoe and other related items, such as cross sections. This includes designing and processing foam molds, casting the canoe, managing curing conditions, and finishing cured pieces. The construction team is a great opportunity for hands-on learning, as you will learn how to use many different types of software and power tools. Finishing coordinators use power tools such as palm and orbital sanders, angle grinders, and dremels to ensure a streamline exterior finish to canoe shapes. Form coordinators use CAD programs such as Rhino7 to generate foam forms. Joining the construction team is a great way to experience a wide spread of what the concrete canoe team has to offer."
    },
    {
        name: "Paddling",
        description: "The paddling subteam trains for the races at competition and hosts paddle practices at nearby conservation areas. Training sessions are inclusive and open to all team members no matter their skill level. The team also coordinates several clean up days each season for the local parks and conservation areas that we use, to ensure that we keep these places better than before we arrived, and to give back to the communities that support us."
    },
    {
        name: "Finance",
        description: "The finance team focuses on sustainable planning and helps track team budget and expenditures, sources funding and sponsorships, and manages the sponsor relationships. This team is an excellent way to learn financial planning, flex your networking and marketing skills and contribute to the team’s long-term strategic planning."
    },
    {
        name: "Structural",
        description: "The structural team is responsible for designing the canoe reinforcement design. This includes designing the concrete reinforcement, performing punching shear, bending, and shear calculations for the canoe hull, and analyzing the final design with python structural analysis programming and new programs that we develop."
    },
    {
        name: "Sustainability",
        description: "The sustainability sub team is responsible for the environmental, financial and social sustainability of the team. We work closely with the other sub teams to keep our environmental impact low, keep our team finances sustainable and give back to our community. Our primary responsibilities include calculating the team’s GHG emissions, analyzing the team’s environmental impacts and developing mitigation measures to reduce the team’s impact. We are currently working on our netzero plan."
    }
]

function Subteams() {

    // Make it possible to set the state (subteam selected) on load with a param.
    const [subteamId, setSubteamId] = useSearchParams();

    const [selectedSubteam, setSelectedSubteam] = useState<SubteamsProps>(subteams[subteamId.get("team") ? parseInt(subteamId.get("team")!.toString()) : 0]);

    return (
        <div className="About" style={{marginTop: "30px", padding: "10%", alignContent: "center", minHeight: "80vh"}}>

        <h1>Subteams</h1>

        <p>Learn more about each team that makes our concrete canoes possible.</p>
        <p style={{ marginTop: "30px" }}>
          <b>
            Interested in joining? Email us at concretecanoe@uwaterloo.ca or fill out the form! 
          </b>
        </p>

        {/*button for email*/}
        <a href="mailto:concretecanoe@uwaterloo.ca">
          {/*replace with correct email*/}
          <button
            type="button"
            style={{ marginRight: "30px" }}
            className="btn btn-warning"
          >
            Email
          </button>
        </a>

        {/*form*/}
        <a href="/#/contact">
          <button
            type="button"
            style={{ marginRight: "30px" }}
            className="btn btn-warning"
          >
            Form
          </button>
        </a>

        <ul className="nav nav-tabs justify-content-center" style={{ marginTop: "30px" }}>
            {
                subteams.map(s => {
                    return (
                      <li className="nav-item">
                        <button type="button" className="nav-link" onClick={() => setSelectedSubteam(s)}>{s.name}</button>
                      </li>
                    );
                })
            }
        </ul>

        {   
            selectedSubteam &&
                <div style={{ marginTop: "30px" }}>
                    <h3>{selectedSubteam?.name}</h3>
                    <p>{selectedSubteam?.description}</p>
                </div>
        }
        </div>
    );
}

export default Subteams;

