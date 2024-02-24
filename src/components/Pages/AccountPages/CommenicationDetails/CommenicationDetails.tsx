import React from 'react'
import { Button, Checkbox, Label } from '@/components/UI'
import { useSelector } from 'react-redux'
import { RootState } from '@/context'

const CommenicationDetails = () => {
  const userSession = useSelector((state: RootState) => state.user.userSession)

  return (
    <div className="account__commenication">
      <h1>Commenication Details</h1>

      <form action="post">
        <p> Select your preferred communication channel </p>
        <div className="flex items-center space-x-2">
          <Checkbox id="email" />
          <Label htmlFor="email">
            {userSession?.email || 'example@example.com'}
          </Label>
        </div>
        <Button variant="default">Save</Button>
      </form>
    </div>
  )
}

export default CommenicationDetails
