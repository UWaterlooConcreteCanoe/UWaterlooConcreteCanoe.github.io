import React from "react";
import gallery_1 from '../assets/gallery/gallery_001.jpg';
import gallery_2 from '../assets/gallery/gallery_002.jpg';
import gallery_3 from '../assets/gallery/gallery_003.jpg';
import gallery_4 from '../assets/gallery/gallery_004.jpg';
import gallery_5 from '../assets/gallery/gallery_005.jpg';
import gallery_6 from '../assets/gallery/gallery_006.jpg';
import gallery_7 from '../assets/gallery/gallery_007.jpg';
import gallery_8 from '../assets/gallery/gallery_008.jpg';
import gallery_9 from '../assets/gallery/gallery_009.jpg';
import gallery_10 from '../assets/gallery/gallery_010.jpg';
import gallery_11 from '../assets/gallery/gallery_011.jpg';
import gallery_12 from '../assets/gallery/gallery_012.jpg';
import gallery_13 from '../assets/gallery/gallery_013.jpg';
import gallery_14 from '../assets/gallery/gallery_014.jpg';
import gallery_15 from '../assets/gallery/gallery_015.jpg';
import gallery_16 from '../assets/gallery/gallery_016.jpg';
import gallery_17 from '../assets/gallery/gallery_017.jpg';
import gallery_18 from '../assets/gallery/gallery_018.jpg';
import gallery_19 from '../assets/gallery/gallery_019.jpg';
import gallery_20 from '../assets/gallery/gallery_020.jpg';
import gallery_21 from '../assets/gallery/gallery_021.jpg';
import gallery_22 from '../assets/gallery/gallery_022.jpg';
import gallery_23 from '../assets/gallery/gallery_023.jpg';
import gallery_24 from '../assets/gallery/gallery_024.jpg';
import gallery_25 from '../assets/gallery/gallery_025.jpg';
import gallery_26 from '../assets/gallery/gallery_026.jpg';
import gallery_27 from '../assets/gallery/gallery_027.jpg';
import gallery_28 from '../assets/gallery/gallery_028.jpg';
import gallery_29 from '../assets/gallery/gallery_029.jpg';
import gallery_30 from '../assets/gallery/gallery_030.jpg';
import gallery_31 from '../assets/gallery/gallery_031.jpg';
import gallery_32 from '../assets/gallery/gallery_032.jpg';
import gallery_33 from '../assets/gallery/gallery_033.jpg';
import gallery_34 from '../assets/gallery/gallery_034.jpg';
import gallery_35 from '../assets/gallery/gallery_035.jpg';
import gallery_36 from '../assets/gallery/gallery_036.jpg';
import CarouselItem from "../components/CarouselItem";

function Media() {
  const gallery_items = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    gallery_10,
    gallery_11,
    gallery_12,
    gallery_13,
    gallery_14,
    gallery_15,
    gallery_16,
    gallery_17,
    gallery_18,
    gallery_19,
    gallery_20,
    gallery_21,
    gallery_22,
    gallery_23,
    gallery_24,
    gallery_25,
    gallery_26,
    gallery_27,
    gallery_28,
    gallery_29,
    gallery_30,
    gallery_31,
    gallery_32,
    gallery_33,
    gallery_34,
    gallery_35,
    gallery_36,
  ];
  return (
    <div className="container-fluid" style={{marginBottom: "10vh"}}>
        <div className="row justify-content-center text-center" style={{marginTop: "75px", marginBottom: "1.5%"}}><h1>Photo Gallery</h1></div>
        <div className="row justify-content-center text-center px-5" style={{ marginBottom: "1.5%" }}>
            <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        gallery_items.map((item, index) => {
                            return (
                                <CarouselItem image={item} key={index} first={index === 0}/>
                            );
                        })
                    }
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Media;