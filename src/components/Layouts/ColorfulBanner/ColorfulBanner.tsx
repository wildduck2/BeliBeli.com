import React from "react";
import { ColorfulBannerProps } from "./ColorfulBanner.types";
import { Link, Skeleton } from "@/components/UI";

export const ColorfulBanner: React.FC<ColorfulBannerProps> = ({
  color,
  title,
  description,
  supTitle,
  buttonText,
  satatus,
}) => {
  return (
    <>
      {satatus === "succeeded" ? (
        <div className={`colorful-banner ${color}`}>
          <div className="colorful-banner__content">
            {color !== "black" ? (
              <>
                <div>
                  <span>{supTitle![0]}</span>
                  <h2>{title}</h2>
                  <span>{supTitle![1]}</span>
                </div>
                <div>
                  {buttonText?.map((item, index) => (
                    <Link key={index} href={item}>
                      {item}
                    </Link>
                  ))}
                </div>
                <p>{description}</p>
              </>
            ) : (
              <>
                <div>
                  <h2>{title}</h2>
                  <span>{supTitle![0]}</span>
                </div>
                <div>
                  {buttonText?.map((item, index) => (
                    <Link key={index} href={item}>
                      {item}
                    </Link>
                  ))}
                </div>
                <p>{description && description}</p>
              </>
            )}
          </div>
        </div>
      ) : (
            <Skeleton className="colorful-banner__skeleton  " aria-hidden="true" />
      )}
    </>
  );
};

export default ColorfulBanner;
