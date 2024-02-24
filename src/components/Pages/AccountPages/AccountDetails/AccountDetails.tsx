import React from 'react'
import { Button, Input } from '@/components/UI'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'

const AccountDetails = () => {
  const userSession = useSelector((state: RootState) => state.user.userSession)

  return (
    <div className="account__details">
      <h1>Account Details</h1>

      <form action="post">
        <div>
          <label htmlFor="name">Full Name</label>
          <Input
            id="name"
            className="input"
            value={userSession?.user_metadata.full_name || ''}
          />
        </div>
        <div>
          <label htmlFor="number">Mobile Number</label>
          <Input
            id="number"
            className="input"
            value={`+20${userSession?.phone || ''}`}
          />
        </div>
        <div>
          <label htmlFor="email">Eamil Address</label>
          <Input
            id="email"
            className="input"
            value={userSession?.email || 'example@example.com'}
            disabled
          />
        </div>
        <Button variant="default">Save Changes</Button>
      </form>
    </div>
  )
}

export default AccountDetails
