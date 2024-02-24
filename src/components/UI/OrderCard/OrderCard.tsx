import React from 'react'
import { CartProduct } from '@/components/Pages'
import { formatter } from '@/utils'
import { AsyncImage } from 'loadable-image'

const OrderCard = ({ item }: { item: CartProduct }) => {
  return (
    <li>
      <AsyncImage
        src={item.img[0]}
        alt={item.name}
        style={{ width: '300px', height: '500px' }}
      />
      <h4>{item.name}</h4>

      <div>
        <h2>EGP {formatter.format(item.price)}</h2>{' '}
        {item.discount && (
          <>
            <h2>
              EGP{' '}
              {item.discount && <span>{formatter.format(item.discount)}</span>}
            </h2>
            <span>
              (save {`${((item.discount! / item.price) * 100).toFixed()}%`})
            </span>
          </>
        )}
      </div>
      <span className="quantity">x{item.quantity}</span>
    </li>
  )
}

export default OrderCard
