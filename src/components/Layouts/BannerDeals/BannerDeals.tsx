import { LinkButton } from "@/components/UI";
import { Daels } from "@/constants";

const BannerDeals = () => {
  return (
    <ul
      className="
        flex
        items-center
        justify-center
        gap-[5rem]
        pb-[1rem]
      "
    >
      {Daels.map((item, key) => {
        return (
          <li key={key}>
            <LinkButton
              className="
                  transtion-border
                  hover:opacity-1
                  border-b
                  border-b-transparent
                  pb-[.2rem]
                  font-medium
                  text-blackOne
                  lg:text-[.85rem]
                "
            >
              {item}
            </LinkButton>
          </li>
        );
      })}
    </ul>
  );
};

export default BannerDeals;
