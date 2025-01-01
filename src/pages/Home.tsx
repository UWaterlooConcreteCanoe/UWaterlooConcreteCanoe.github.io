// import logo from '../assets/ConcreteCanoeLogoImage.png';
import headImage from '../assets/ConcreteCanoeHeadImage-crop.jpg';
import { InfiniteScrollBanner } from '../components/InfiniteScrollBanner';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
// import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from '../components/Carousel';

function Home() {

  return (
    <div className='tw-my-[7.5vh]'>
      <div className="tw-overflow-hidden tw-h-[70dvh] tw-w-full">
        <img src={headImage} alt="Background" className="tw-object-cover tw-w-full tw-h-full" />
        <div className="tw-absolute tw-text-white tw-text-6xl tw-font-bold tw-w-full tw-top-[15dvh] tw-text-center sm:tw-pl-[30dvw] md:tw-pl-[50dvw]">University of Waterloo Concrete Canoe Team</div>
      </div>
      <div className="tw-flex tw-w-full tw-bg-amber-300 sm:tw-px-[10dvw] tw-items-center tw-text-center tw-justify-center">
        <p className="tw-text-xl tw-text-neutral-800 tw-p-10">
          For the last 29 years, Canadian universities are building concrete canoes and are evaluated on academic, technical and sports aspects.
          The competition offers the opportunity to engineering students to apply theories and concepts learned in class through a challenging project.
        </p>
      </div>
      <div className="lg:tw-flex tw-w-full tw-bg-white tw-items-center tw-text-left tw-justify-center tw-p-10 lg:tw-space-x-10">
        <div className='tw-flex-1'>
          <h1 className="tw-text-2xl tw-font-bold tw-text-neutral-800">
            About Us
          </h1>
          <p className="tw-text-xl tw-text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            Thanks to our sponsers and the university and stuff!!!!
          </p>
        </div>
        <div className='tw-flex tw-flex-col sm:tw-flex-row tw-flex-1 sm:tw-space-x-4 tw-items-center tw-text-left tw-justify-center'>
          <div className='tw-flex tw-flex-col tw-space-y-4'>
            <img className='tw-h-32' src="https://picsum.photos/128/78" alt="Placeholder"/>
            <img className='tw-h-28' src="https://picsum.photos/128/56" alt="Placeholder"/>
          </div>
          <img className='tw-h-64 tw-mt-4 sm:tw-mt-0' src="https://picsum.photos/128/128" alt="Placeholder"/>
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
          items={Array.from(Array(9).keys()).map(e=><div><div className='tw-flex tw-w-full tw-h-full tw-items-center tw-justify-center'><img className="tw-w-[33dvw]" key={e} src={`https://picsum.photos/seed/${Math.random()}/200/256`} alt="Placeholder" /></div></div>)}
        />
      </div>
      <div className="tw-w-full tw-bg-white tw-items-center tw-text-left tw-justify-center tw-px-10 tw-pt-8">
        <h1 className="tw-text-2xl tw-font-bold tw-text-neutral-800">
          Our Sponsors
        </h1>
      </div>
      <InfiniteScrollBanner images={Array.from(Array(32).keys()).map(e=>`https://picsum.photos/${Math.round(Math.random() * 64 + 64)}/64`)} speed={25000} />
    </div>
  );
}

export default Home;
