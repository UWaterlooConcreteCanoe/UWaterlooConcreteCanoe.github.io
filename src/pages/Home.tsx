// import logo from '../assets/ConcreteCanoeLogoImage.png';
import headImage from '../assets/home-page/TitleBackground.jpg';

import aboutUs0 from '../assets/home-page/mix_mixer4.jpg';
import aboutUs1 from '../assets/home-page/place_3rd_layer_(blue)4.jpg';
import aboutUs2 from '../assets/home-page/FullWoodenFormAssembledYogaMatFitting.jpg';

import { InfiniteScrollBanner } from '../components/InfiniteScrollBanner';
import { sponsors } from '../assets/sponsor-logo/sponsors-helper';
import { carouselTeams } from '../assets/home-page/carousel-teams/carousel-helper';

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
// import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from '../components/Carousel';
import HoverImg from '../components/HoverImg';

function Home() {

  return (
    <div className='tw-my-[7.5vh]'>
      <div className="tw-overflow-hidden tw-h-[70dvh] tw-w-full">
        <img src={headImage} alt="Background" className="tw-object-cover tw-w-full tw-h-full" />
        <div className="tw-absolute tw-text-yellow-300 tw-text-6xl tw-font-bold tw-w-full tw-top-[15dvh] tw-text-center sm:tw-pl-[30dvw] md:tw-pl-[50dvw] tw-drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">University of Waterloo Concrete Canoe Team</div>
      </div>
      <div className="tw-flex tw-w-full tw-bg-amber-300 sm:tw-px-[10dvw] tw-items-center tw-text-center tw-justify-center">
        <p className="tw-text-xl tw-text-neutral-800 tw-p-10">
        For the last 30 years, Canadian universities have been building concrete canoes evaluated on academic, technical, and paddling aspects. 
        The competition offers the opportunity for students to apply theories and concepts learned in class through a formidable engineering design challenge. 
        Additionally, students gain experiential knowledge and skills through hands-on opportunities.  
        </p>
      </div>
      <div className="lg:tw-flex tw-w-full tw-bg-white tw-items-center tw-text-left tw-justify-center tw-p-10 lg:tw-space-x-10">
        <div className='tw-flex-1'>
          <h1 className="tw-text-2xl tw-font-bold tw-text-neutral-800">
            About Us
          </h1>
          <p className="tw-text-xl tw-text-neutral-800">
            The University of Waterloo’s Concrete Canoe Team is a group of approximately 50 students who design, build, and race a concrete canoe each year at the Canadian National Concrete Canoe Competition. 
            We design low density concrete and hull shape, develop construction methodology, execute structural analysis, utilize industry project management techniques, and train to become better paddlers. 
            The team strives to be a fun environment that supports student learning and provides technical skills to help students achieve their career goals. 
          </p>
        </div>
        <div className='tw-flex tw-flex-col sm:tw-flex-row tw-flex-1 sm:tw-space-x-4 tw-items-center tw-text-left tw-justify-center'>
          <div className='tw-flex tw-flex-col tw-space-y-2'>
            <img className='tw-h-32' src={aboutUs0} alt="Placeholder"/>
            <img className='tw-h-32' src={aboutUs1} alt="Placeholder"/>
          </div>
          <img className='tw-h-[16.5rem] tw-mt-4 sm:tw-mt-0' src={aboutUs2} alt="Placeholder"/>
        </div>
      </div>
      <div className="tw-w-full tw-bg-amber-300 tw-items-center tw-text-left tw-justify-center tw-py-10">
        <h1 className="tw-text-2xl tw-font-bold tw-text-neutral-800 tw-text-left tw-px-10">
          What we do
        </h1>
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={100}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Array.from(Array(9).keys()).map(e=><SwiperSlide><div className='tw-flex tw-w-full tw-h-full tw-items-center tw-justify-center'><img className="tw-w-[33dvw]" key={e} src={`https://picsum.photos/seed/${Math.random()}/200/256`} /></div></SwiperSlide>)}
        </Swiper> */}
        <Carousel
          items={carouselTeams.map((carouselTeam, index) => <div><div className='tw-flex tw-w-full tw-h-full tw-items-center tw-justify-center'><div className="tw-w-[33dvw]"><HoverImg key={index} src={carouselTeam.image} hoverText={carouselTeam.name} href={carouselTeam.link}></HoverImg></div></div></div>)}
        />
      </div>
      <div className="tw-w-full tw-bg-white tw-items-center tw-text-left tw-justify-center tw-px-10 tw-pt-8">
        <h1 className="tw-text-2xl tw-font-bold tw-text-neutral-800">
          Our Sponsors
        </h1>
      </div>
      <InfiniteScrollBanner images={sponsors.map(sponsor => sponsor.logo)} speed={25000} />
    </div>
  );
}

export default Home;
