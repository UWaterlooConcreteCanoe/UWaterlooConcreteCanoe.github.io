
import ConcreteMixDesign from './ConcreteMixDesign.jpg'
import Construction from './Construction.jpg'
import HullDesign from './HullDesign.png'
import Paddling from './Paddling.jpg'
import Programming from './Programming.png'
import Spirit from './Spirit.png'
import Structural from './Structural.png'
import Sustainability from './Sustainability.png'

export interface CarouselTeam {
    name: string;
    image: string;
    link: string;
}

export const carouselTeams: CarouselTeam[] = [
    {
        name: "Hull Design",
        image: HullDesign,
        link: "http://localhost:3000/#/subteams/?team=0"
    },
    {
        name: "Concrete Mix Design",
        image: ConcreteMixDesign,
        link: "http://localhost:3000/#/subteams/?team=1"
    },
    {
        name: "Spirit",
        image: Spirit,
        link: "http://localhost:3000/#/subteams/?team=2"
    },
    {
        name: "Programming",
        image: Programming,
        link: "http://localhost:3000/#/subteams/?team=3"
    },
    {
        name: "Construction",
        image: Construction,
        link: "http://localhost:3000/#/subteams/?team=4"
    },
    {
        name: "Paddling",
        image: Paddling,
        link: "http://localhost:3000/#/subteams/?team=5"
    },
    // {
    //     name: "Finance",
    //     image: Structural,
    //     link: "http://localhost:3000/#/subteams/?team=6"
    // },
    {
        name: "Structural",
        image: Structural,
        link: "http://localhost:3000/#/subteams/?team=7"
    },
    {
        name: "Sustainability",
        image: Sustainability,
        link: "http://localhost:3000/#/subteams/?team=8"
    },
];
