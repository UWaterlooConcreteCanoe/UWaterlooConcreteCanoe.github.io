import React from "react";

function CarouselItem(props: {first: boolean, image: string, width: string, height: string}) {
    return (
        <div className={"carousel-item" + (props.first ? " active" : "")} data-bs-interval="3000" >
            <img src={props.image} className="d-block mx-auto" alt="" style={{height: props.height, width: props.width}}/>
        </div>
    );
}

export default CarouselItem;