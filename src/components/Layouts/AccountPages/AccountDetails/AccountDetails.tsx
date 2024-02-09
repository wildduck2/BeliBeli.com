import React from "react";
import { Button, Input } from "@/components/UI";

const AccountDetails = () => {
  return (
    <div className="account__details">
      <h1>Account Details</h1>

      <form action="post">
        <div>
          <label htmlFor="name">Full Name</label>
          <Input id="name" className="input" value="John Doe" />
        </div>
        <div>
          <label htmlFor="number">Mobile Number</label>
          <Input id="number" className="input" value="+201027689409" />
        </div>
        <div>
          <label htmlFor="email">Eamil Address</label>
          <Input id="email" className="input" value="wezonaser50@gmail.com" disabled />
        </div>
        <Button variant="default">Save Changes</Button>
      </form>
    </div>
  );
};

export default AccountDetails;
