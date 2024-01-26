import React from "react";
import { Link } from "../../components/UI";

interface headerNavigationDataTypes {
  headerNavigationData?: string[][][][];
  satatus: "loading" | "succeeded" | "failed";
}

const NavigationHeaderLooping = ({
  headerNavigationData,
  satatus,
}: headerNavigationDataTypes) => {
  const HeaderNavigationReactNode = headerNavigationData?.map((item, index) => {
    return (
      <div key={index}>
        {satatus === "succeeded" ? (
          item.map((child, index) => {
            return (
              <ul key={index}>
                <h4>{child[0]}</h4>

                <div>
                  {child[1].map((item, index) => {
                    return (
                      <Link key={index} href={item}>
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </ul>
            );
          })
        ) : (
          <h1>laoding </h1>
        )}
      </div>
    );
  });

  return HeaderNavigationReactNode;
};

export default NavigationHeaderLooping;
