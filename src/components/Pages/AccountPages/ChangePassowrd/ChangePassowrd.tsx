import React from "react";
import { Button, Input } from "@/components/UI";

const ChangePassowrd = () => {
  return (
    <div className="account__change-password">
      <h1>Change Password</h1>

      <form action="post">
        <div>
          <label htmlFor="oldPassword">Current Password</label>
          <Input id="oldPassword" className="input" type="password" />
        </div>

        <div>
          <label htmlFor="newPassword">New Password</label>
          <Input id="newPassword" className="input" type="password" />
        </div>
        <Button variant="default">Change Password</Button>
      </form>
    </div>
  );
};

export default ChangePassowrd;
