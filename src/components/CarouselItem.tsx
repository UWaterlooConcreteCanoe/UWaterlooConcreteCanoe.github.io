import React from "react";

function CarouselItem(props: {first: boolean, image: string}) {
    return (
        <div className={"carousel-item" + (props.first ? " active" : "")}>
            <img src={props.image} className="d-block w-100 mx-auto" alt="" />
        </div>
    );
}

export default CarouselItem;