import { Button } from '@/components/UI'
import React from 'react'

const EgifttsCards = () => {
  return (
    <div className="account__Egifts">
      <h1>eGift Card</h1>

      <div className="account__Egifts__form">
        <h2>Link eGift card to account</h2>
        <p>
          You dont have any eGift card linked to your account, link card to use
          it for your purchases
        </p>
        <span>
          We'll send a verification code to your email to verify and link eGift
          card
        </span>

        <input type="number" min={0} placeholder="eGift card number" />

        <Button variant={'default'}>Get Code</Button>
      </div>
    </div>
  )
}

export default EgifttsCards
