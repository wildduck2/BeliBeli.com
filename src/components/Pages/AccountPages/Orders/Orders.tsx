import React from "react";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  Input,
} from "../../../UI";

const Orders = () => {
  return (
    <div className="account__orders">
      <div>
        <h1>Orders</h1>

        <div>
          <div>
            <label htmlFor="search">Search orders by</label>
            <Input id="search" className="input" placeholder="ID, Name, SKU" />
          </div>
          <div>
            <label>Show</label>

            <Select>
              <SelectTrigger className="input">
                <SelectValue placeholder="Show All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="show all">Show All</SelectItem>
                  <SelectItem value="show uncompleted">
                    Show Uncompleted Orders
                  </SelectItem>
                  <SelectItem value="show completed">
                    Show Completed Orders
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <h2>Recent Orders</h2>
      <span>You haven’t ordered anything recently.</span>
    </div>
  );
};

export default Orders;
