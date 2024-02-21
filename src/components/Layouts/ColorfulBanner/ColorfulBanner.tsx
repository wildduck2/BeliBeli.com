import React from 'react';
import { ColorfulBannerProps } from './ColorfulBanner.types';
import { Button, Link, Skeleton } from '@/components/UI';
import { useNavigate } from 'react-router-dom';
import { categoryData } from '@/constants';

export const ColorfulBanner: React.FC<ColorfulBannerProps> = ({
  color,
  title,
  description,
  supTitle,
  buttonText,
  satatus
}) => {
  const route = useNavigate();
  return (
    <>
      {satatus === 'succeeded' ? (
        <div className={`colorful-banner ${color}`}>
          <div className="colorful-banner__content">
            {color !== 'black' ? (
              <>
                <div>
                  <span>{supTitle![0]}</span>
                  <h2>{title}</h2>
                  <span>{supTitle![1]}</span>
                </div>
                <div>
                  {buttonText?.map((item, index) => (
                    <Button
                      key={index}
                      variant={'default'}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        route(`/category/${item}`, {
                          state: categoryData[index]
                        });
                      }}
                    >
                      {item}
                    </Button>
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
                    <Button
                      key={index}
                      variant={'default'}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        route(`/category/${item}`, {
                          state: categoryData[index]
                        });
                      }}
                    >
                      {item}
                    </Button>
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
