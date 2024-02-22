import React from 'react'
import { Button, Input } from '@/components/UI'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'
import { useUser } from '@/hooks'

const AccountDetails = () => {
  const logged = useSelector((state: RootState) => state.data.logged)
  const userData = useUser({ signedout: logged })

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
          <Input
            id="number"
            className="input"
            value={`+20${userData[0]?.phone}`}
          />
        </div>
        <div>
          <label htmlFor="email">Eamil Address</label>
          <Input
            id="email"
            className="input"
            value={userData[0]?.email}
            disabled
          />
        </div>
        <Button variant="default">Save Changes</Button>
      </form>
    </div>
  )
}

export default AccountDetails
