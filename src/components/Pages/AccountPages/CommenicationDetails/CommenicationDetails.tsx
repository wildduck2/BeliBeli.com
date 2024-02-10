import React from "react";
import { Button, Checkbox, Label } from "@/components/UI";

const CommenicationDetails = () => {
  return (
    <div className="account__commenication">
      <h1>Commenication Details</h1>

      <form action="post">
        <p> Select your preferred communication channel </p>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <Button variant="default">Save</Button>
      </form>
    </div>
  );
};

export default CommenicationDetails;
