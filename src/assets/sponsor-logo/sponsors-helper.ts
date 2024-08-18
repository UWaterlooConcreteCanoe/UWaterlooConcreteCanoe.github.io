import logo_plat1 from './5.png';
import logo_plat2 from './17.png';
import logo_gold1 from './1.png';
import logo_gold2 from './2.png';
import logo_gold3 from './3.png';
import logo_gold4 from './4.png';
import logo_gold5 from './15.png';
import logo_silver1 from './6.png';
import logo_silver2 from './7.png';
import logo_silver3 from './8.png';
import logo_silver4 from './16.png';
import logo_silver5 from './18.png';
import logo_bronze1 from './10.png';
import logo_bronze2 from './12.png';
import logo_bronze3 from './11.png';
import logo_bronze4 from './9.png';
import logo_bronze5 from './19.png';
import logo_bronze6 from './22.png';
import logo_bronze7 from './23.png';
import logo_material1 from './13.png';
import logo_material2 from './14.png';
import logo_material3 from './20.png';
import logo_material4 from './21.png';

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
        logo: logo_plat1,
        link: "https://www.melloul.com/"
    },
    {
        tier: "Platinum",
        name: "Waterloo Engineering Endowment Fund",
        logo: logo_plat2,
        link: "https://uwaterloo.ca/engineering-endowment-foundation/"
    },
    {
        tier: "Gold",
        name: "Brown & Beattie Ltd.",
        logo: logo_gold1,
        link: "https://www.brownbeattie.com/"
    },
    {
        tier: "Gold",
        name: "CanCrete Equipment Ltd.",
        logo: logo_gold2,
        link: "https://www.cancrete.ca/"
    },
    {
        tier: "Gold",
        name: "Dillon Consulting",
        logo: logo_gold3,
        link: "https://www.dillon.ca/"
    },
    {
        tier: "Gold",
        name: "GHD Group",
        logo: logo_gold4,
        link: "https://www.ghd.com/"
    },
    {
        tier: "Gold",
        name: "EBC Inc",
        logo: logo_gold5,
        link: "https://ebcinc.com/en/?doing_wp_cron=1710357869.4692909717559814453125"
    },
    {
        tier: "Silver",
        name: "Mansteel Rebar Ltd.",
        logo: logo_silver1,
        link: "https://ca.linkedin.com/company/mansteel-rebar?trk=public_post_follow-view-profile"
    },
    {
        tier: "Silver",
        name: "PCL Construction",
        logo: logo_silver2,
        link: "https://www.pcl.com/ca/en"
    },
    {
        tier: "Silver",
        name: "SOPREMA",
        logo: logo_silver3,
        link: "https://www.soprema.ca/en/"
    },
    {
        tier: "Silver",
        name: "Gillam Group",
        logo: logo_silver4,
        link: "https://gillamgroup.com"
    },
    {
        tier: "Silver",
        name: "Lightweight Concrete Solutions Inc.",
        logo: logo_silver5,
        link: "https://www.lwcsi.com"
    },
    {
        tier: "Bronze",
        name: "Arcadis",
        logo: logo_bronze1,
        link: "https://www.arcadis.com/en?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_content=GreaterTorontoAreaCA"
    },
    {
        tier: "Bronze",
        name: "Global Infrastructure Partners Inc.",
        logo: logo_bronze2,
        link: "https://gipi.com/"
    },
    {
        tier: "Bronze",
        name: "MTE Consultants Inc.",
        logo: logo_bronze3,
        link: "https://www.mte85.com/"
    },
    {
        tier: "Bronze",
        name: "Alberici Constructors Ltd.",
        logo: logo_bronze4,
        link: "https://alberici.com/"
    },
    {
        tier: "Bronze",
        name: "EngSoc",
        logo: logo_bronze5,
        link: "https://www.engsoc.uwaterloo.ca"
    },
    {
        tier: "Bronze",
        name: "Lafarge",
        logo: logo_bronze7,
        link: "https://www.lafarge.ca/en"
    },
    {
        tier: "Bronze",
        name: "Edison Engineers Inc.",
        logo: logo_bronze6,
        link: "https://edisonengineers.ca"
    },
    {
        tier: "Material",
        name: "Master Builders Solutions Canada Inc.",
        logo: logo_material1,
        link: "https://www.master-builders-solutions.com/en-us"
    },
    {
        tier: "Material",
        name: "Rainfresh",
        logo: logo_material2,
        link: "https://rainfresh.ca/"
    },
    {
        tier: "Material",
        name: "Sika",
        logo: logo_material3,
        link: "https://can.sika.com/"
    },
    {
        tier: "Material",
        name: "St Mary's Cement",
        logo: logo_material4,
        link: "https://www.stmaryscement.com/"
    },
];