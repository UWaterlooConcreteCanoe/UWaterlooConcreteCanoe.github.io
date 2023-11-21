import "./HoverImg.css"


function HoverImg(props: {src: string, hoverText: string, href: string, alt?: string, width?: string, height?: string}) {
    let imgWidth =  props.width || "100%"
    return (
        <a href={props.href}>
            <div className='container' style={{width:imgWidth, height: props.height || imgWidth, backgroundColor:'white', display:'flex', alignItems:'center'}}>
                <div className="img_wrap">
                    <img className="img_img" alt={props.alt || `Decorative Image captioned ${props.hoverText}`} src={props.src} width={imgWidth} />
                    <p className="img_description">{props.hoverText}</p>
                </div>
            </div>
        </a>
    );
}
export default HoverImg;
