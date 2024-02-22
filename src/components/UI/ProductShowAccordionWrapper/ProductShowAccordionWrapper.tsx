import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Input,
  Label
} from '..'
import { Package } from 'lucide-react'
import { fastshiping } from '@/assets'

const ProductShowAccordionWrapper = (): React.JSX.Element => {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div>
            <Label>Delivery Options</Label>
            <Label>Explore the delivery options applicable to your area.</Label>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="box">
            <Package size={27} />
            <div>
              <span>Standard Delivery</span>
              <span>Your order will be delivered within 1-5 days</span>
            </div>
          </div>
          <div className="box">
            <img src={fastshiping} width={27} alt="fast shiping img" />
            <div>
              <span>Same Day Delivery</span>
              <span>Order before 10AM and receive same-day delivery</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div>
            <Label>Click and Collect</Label>
            <Label>Order now & collect from a store of your choice.</Label>
          </div>
        </AccordionTrigger>
        <AccordionContent className="click-and-collect">
          <Label>Check in-store availability</Label>
          <div>
            <Input placeholder="Enter your area" />
            <Button variant={'default'}>CHECK STORES</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ProductShowAccordionWrapper
