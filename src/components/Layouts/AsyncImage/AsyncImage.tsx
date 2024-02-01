import React, { MutableRefObject, useEffect, useRef } from "react";

interface AsyncImageTypes extends React.ImgHTMLAttributes<HTMLImageElement> {
  media?: string;
  ariaLabel?: string;
}

const AsyncImage: React.FC<AsyncImageTypes> = ({
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

AsyncImage.displayName = "AsyncImage";
export default AsyncImage;
