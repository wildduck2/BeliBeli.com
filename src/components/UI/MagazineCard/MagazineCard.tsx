import React from "react";
import Link from "../Link";
import { rightGray } from "../../../assets";

interface MagazineCardTypes {
  img: string;
  title: string;
}

const MagazineCard: React.FC<MagazineCardTypes> = ({ img, title }) => {
  return (
    <div className="magazine__card">
      <img src={img} alt="magazing img" />
      <span>INSIDE BeliBeli</span>

      <h3>{title}</h3>
      <Link href={"/ReadTheStory"} className="magazine__hover">
        <span>Read The Story</span>
        <img width={20} height={20} src={rightGray} alt="arrow img" />
      </Link>
    </div>
  );
};

MagazineCard.displayName = "MagazineCard";

export default MagazineCard;
