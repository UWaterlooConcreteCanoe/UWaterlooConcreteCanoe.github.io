import "./HoverImg.css"


function HoverImg(props: {src: string, hoverText: string, href: string, width?: string, height?: string, alt?: string, }) {
    let width = props.width || "100%"
    let height = props.height || "100%"
    return (
        <a href={props.href}>
            <div className="img_wrap">
                <img className="img_img" alt={props.alt || "Decorative Image"} src={props.src} width={width} height={height} />
                <p className="img_description">{props.hoverText}</p>
            </div>
        </a>
    );
}
export default HoverImg;
