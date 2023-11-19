import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "./HoverImg.css"

function HoverImg(props: {src: string, hoverText: string, width: string, href: string}) {

    return (
        <a href={props.href}>
            <div className="img_wrap">
                <img className="img_img" src={props.src} width={props.width} />
                <p className="img_description">{props.hoverText}</p>
            </div>
        </a>
    );
}
export default HoverImg;