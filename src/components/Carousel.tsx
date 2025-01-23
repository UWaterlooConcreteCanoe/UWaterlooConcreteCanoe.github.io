import { ReactNode } from "react";

export default function Carousel(props: {items : ReactNode[]}) {
  // carousel of logos
  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner center">
        {props.items.map((item : ReactNode, index : number) => (
          <div className={`tw-flex tw-space-x-8 ${"carousel-item" + (index === 0 ? " active" : "")}`} data-bs-interval="3000" >
              {item}
              {props.items[(index+1) % props.items.length]}
              {props.items[(index+2) % props.items.length]}
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev tw-bg-gradient-to-l tw-from-transparent tw-to-neutral-800 tw-justify-start tw-p-8"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next tw-bg-gradient-to-r tw-from-transparent tw-to-neutral-800 tw-justify-end tw-p-8"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}