import melloul from './melloul.png';
import weef from './weef.png';
import ghd from './ghd.png';
import pcl from './pcl.png';
import gillam from './gillam.png';
import lightweight from './lightweight.png';
import mte from './mte.png';
import engsoc from './engsoc.png';
import edison from './edison.png';
import lafarge from './lafarge.png';
import masterbuilders from './masterbuilders.png';
import sika from './sika.png';
import stmary from './stmary.png';
import oakcrete from './oakcrete.png';
import civicon from './civicon.png';
import terrapex from './terrapex.png';
import baconsulting from './baconsulting.png';
import facca from './facca.png';
import ebc from './ebc.png';
import cancrete from './cancrete.png';
import chandos from './chandos.png';

export interface Sponsor {
    tier: string;
    name: string;
    logo: string;
    link: string;
}

export const sponsors: Sponsor[] = [
    {
        tier: "Platinum",
        name: "Melloul-Blamey Construction Inc.",
        logo: melloul,
        link: "https://www.melloul.com/"
    },
    {
        tier: "Platinum",
        name: "Waterloo Engineering Endowment Fund",
        logo: weef,
        link: "https://uwaterloo.ca/engineering-endowment-foundation/"
    },
    {
        tier: "Platinum",
        name: "GHD Group",
        logo: ghd,
        link: "https://www.ghd.com/"
    },
    {
        tier: "Silver",
        name: "PCL Construction",
        logo: pcl,
        link: "https://www.pcl.com/ca/en"
    },
    {
        tier: "Silver",
        name: "Gillam Group",
        logo: gillam,
        link: "https://gillamgroup.com"
    },
    {
        tier: "Silver",
        name: "Lightweight Concrete Solutions Inc.",
        logo: lightweight,
        link: "https://www.lwcsi.com"
    },
    {
        tier: "Bronze",
        name: "MTE Consultants Inc.",
        logo: mte,
        link: "https://www.mte85.com/"
    },
    {
        tier: "Bronze",
        name: "EngSoc",
        logo: engsoc,
        link: "https://www.engsoc.uwaterloo.ca"
    },
    {
        tier: "Bronze",
        name: "Lafarge",
        logo: lafarge,
        link: "https://www.lafarge.ca/en"
    },
    {
        tier: "Bronze",
        name: "Edison Engineers Inc.",
        logo: edison,
        link: "https://edisonengineers.ca"
    },
    {
        tier: "Material",
        name: "Master Builders Solutions Canada Inc.",
        logo: masterbuilders,
        link: "https://www.master-builders-solutions.com/en-us"
    },
    {
        tier: "Material",
        name: "Sika",
        logo: sika,
        link: "https://can.sika.com/"
    },
    {
        tier: "Material",
        name: "St Mary's Cement",
        logo: stmary,
        link: "https://www.stmaryscement.com/"
    },
    {
        tier: "Diamond",
        name: "Oakcrete",
        logo: oakcrete,
        link: ""
    },
    {
        tier: "Diamond",
        name: "Civicon Corporation",
        logo: civicon,
        link: "https://civiconcorp.com"
    },
    {
        tier: "Material",
        name: "Terrapex Environmental Ltd.",
        logo: terrapex,
        link: "https://terrapex.com"
    },
    {
        tier: "Gold",
        name: "BA Consulting Group Ltd.",
        logo: baconsulting,
        link: "https://www.bagroup.com"
    },
    {
        tier: "Material",
        name: "Facca Incorporated",
        logo: facca,
        link: "https://www.facca.com"
    },
    {
        tier: "Gold",
        name: "EBC Inc",
        logo: ebc,
        link: "https://ebcinc.com/en/"
    },
    {
        tier: "Gold",
        name: "CanCrete Equipment Ltd.",
        logo: cancrete,
        link: "https://www.cancrete.ca/"
    },
    {
        tier: "Bronze",
        name: "Chandos Construction",
        logo: chandos,
        link: "https://www.chandos.com/"
    }
];
