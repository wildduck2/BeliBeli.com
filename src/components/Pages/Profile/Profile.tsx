import React from "react";
import { Button, Link } from "@/components/UI";
import { BadgeInfo } from "lucide-react";

const needHelpNavigation = [
  "Contact customer service",
  "Return & Refund",
  "Delivery information",
];

const Profile = () => {
  const data = true;
  const needHelp = true;
  const email = "wezonaser50@gmail.com";
  return (
    <div className="account__profile__account">
      <h1>My Account</h1>

      <div className="account__profile__account__recent">
        <h2>Recent work</h2>
        <Button variant={"default"}>View all</Button>
      </div>
      <div>{data ? <span>you don't have any orders</span> : <>orders</>}</div>
      <Link href="/">Go shopping</Link>
      {needHelp && (
        <div className="account__profile__account__need">
          <div>
            <BadgeInfo />
            <h2>Need help with your order?</h2>
          </div>
          <div>
            {needHelpNavigation.map((item, index) => (
              <Link key={index} href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="account__profile__account__details">
        <h2>Account details</h2>
        <div>
          <h3>email address</h3>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
