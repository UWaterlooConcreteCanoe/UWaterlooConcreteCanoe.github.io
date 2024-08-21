import "./banner.css";

const InfiniteScrollBanner = (props: { images : string[], speed : number }) => {

  let speed = props.speed;

  return (
    <div className="tw-relative tw-w-full tw-overflow-hidden tw-h-16 tw--mb-8">
      <div className="tw-absolute tw-flex">
        {/* @ts-ignore */}
        <section className="tw-flex tw-space-x-2" style={{ "--speed": `${speed}ms` }}>
          {props.images.map((image, id) => (
            <div key={id}>
              <img src={image} />
            </div>
          ))}
        </section>
        {/* @ts-ignore */}
        <section className="tw-flex tw-space-x-2" style={{ "--speed": `${speed}ms` }}>
          {props.images.map((image, id) => (
            <div key={id}>
              <img src={image} />
            </div>
          ))}
        </section>
        {/* @ts-ignore */}
        <section className="tw-flex tw-space-x-2" style={{ "--speed": `${speed}ms` }}>
          {props.images.map((image, id) => (
            <div key={id}>
              <img src={image} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { InfiniteScrollBanner };
