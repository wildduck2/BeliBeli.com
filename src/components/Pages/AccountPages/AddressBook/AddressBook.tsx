import React from 'react'
import {
  Button,
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue
} from '@/components/UI'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'
import { useUser } from '@/hooks'

const AddressBook = () => {
  const logged = useSelector((state: RootState) => state.data.logged)
  const userData = useUser({ signedout: logged })

  return (
    <div className="account__address">
      <h1>Address Book</h1>

      <form action="post">
        <div>
          <label htmlFor="name">Full Name</label>
          <Input
            id="name"
            className="input"
            value={userData[0]?.user_metadata.full_name}
          />
        </div>

        <div>
          <label htmlFor="number">Mobile Number</label>
          <Input
            id="number"
            className="input"
            value={`+20${userData[0]?.phone}`}
          />
        </div>

        <div>
          <label htmlFor="apparment">Apparment (Optional)</label>
          <Input id="apparment" className="input" value="" />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <Input id="country" className="input" value="Egypt" disabled />
        </div>

        <div>
          <label htmlFor="region">Region</label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a City" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a City" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="street">Street Name/ Street Number</label>
          <Input id="street" className="input" value="" disabled />
        </div>

        <div>
          <label htmlFor="building-number">Building Name/Number</label>
          <Input id="building-number" className="input" value="" disabled />
        </div>

        <div>
          <label htmlFor="floor">Floor</label>
          <Input id="floor" className="input" value="" disabled />
        </div>

        <div>
          <label htmlFor="landmark">Landmark (Optional)</label>
          <Input id="landmark" className="input" value="" disabled />
        </div>

        <div>
          <label htmlFor="zip">Zip/Postal Code (Optional)</label>
          <Input id="zip" className="input" value="" disabled />
        </div>

        <div>
          <Button variant="default">Save Changes</Button>
          <Button variant="outline" role="combobox">
            cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddressBook
