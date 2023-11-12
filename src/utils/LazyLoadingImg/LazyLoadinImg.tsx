import React, { MutableRefObject, useEffect, useRef } from "react";

interface AsyncImageTypes extends React.ImgHTMLAttributes<HTMLImageElement> {
  media: string;
  ariaLabel: string;
}

const AsyncImagee: React.FC<AsyncImageTypes> = ({
  className,
  src,
  srcSet,
  media,
  ariaLabel,
  ...props
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const imgRef = useRef() as MutableRefObject<HTMLImageElement>;
  useEffect(() => {
    imgRef.current.addEventListener("load", () => {
      imgRef.current.complete && wrapperRef.current.classList.add("show--img");
    });
  }, []);

  return (
    <div className="lazyLoaingImg-wrapper" ref={wrapperRef}>
      <picture className="LazyLoadingImg">
        <source srcSet={srcSet} media={media} />
        <img
          src={src}
          loading="lazy"
          className={`lazyLoadingImg__img ${className}`}
          ref={imgRef}
          {...props}
          alt=""
          width={275}
          height={384}
          aria-label={ariaLabel}
        />
      </picture>
    </div>
  );
};

AsyncImagee.displayName = "AsyncImage";
export default AsyncImagee;

// 1- after skeleton you will see the img with animation
// 2- img lazy setps
//    -- making div as as parent for the img
//    -- giving this div bg and style it like palceHolder to the img
//    -- adding eventListener to the img on load
//    -- if the img is loaded and complete add class to show the img

//  <AsyncImage
// // srcSet={`${selector.bannersData![dataIndex].mobile_top_img} 300w,
// // ${selector.bannersData![dataIndex].top_img} 800w`}
// // sizes="(max-width: 600px) 300px, 800px"
//  src={selector.bannersData![dataIndex].mobile_top_img}
////  sources={[
////    {
////      type: "image/png",
////      srcSet: selector.bannersData![dataIndex].low_img,
////    },
////  ]}
//  style={{ width: 275, height: 384 }}
//  // style={{ width: 1026, height: 684 }}
//  loader={<div style={{ background: "#1e242e6e" }} />}
//  error={<div style={{ background: "#222" }} />}
//  alt="this is a banner img for some events"
//  aria-description="this is an img for some events click on some links on this banner to get there"
///>
//
//
//  G to go down
//  gg to go top
