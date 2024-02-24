import React from 'react'

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  Input,
  OrderCard
} from '@/components/UI'
import { RootState } from '@/context'
import { useSelector } from 'react-redux'
import { CartProduct } from '../..'

const Orders = (): React.JSX.Element => {
  const userData = useSelector((state: RootState) => state.user.userData)
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
      <ul>
        {userData?.user_cart.length! < 1 ? (
          <span>You have no recent orders to display.</span>
        ) : (
          userData?.user_cart.map((item: CartProduct) => (
            <OrderCard key={item.id} item={item} />
          ))
        )}
      </ul>
    </div>
  )
}

export default Orders
