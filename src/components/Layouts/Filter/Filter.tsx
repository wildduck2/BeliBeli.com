import React, { MouseEvent, useRef } from 'react'
import { FilterLinks } from '../../../constants'
import { cn } from '../../../utils'
import { Button } from '@/components/UI'

export interface FilterProps {
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>
}
const Filter: React.FC<FilterProps> = ({ setFilterQuery }) => {
  const ButtonsContainerRef = useRef<HTMLDivElement>(null)

  const filterButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget

    const buttons = ButtonsContainerRef.current!
      .childNodes as NodeListOf<HTMLButtonElement>

    buttons.forEach((button) => {
      button.classList.remove('active_filter')
    })

    el.classList.add('active_filter')

    setFilterQuery(el.innerHTML.split(' ').join(''))
  }

  return (
    <div ref={ButtonsContainerRef} className="filter">
      {FilterLinks.map((data, index) => {
        return (
          <Button
            key={index}
            type="button"
            variant={'outline'}
            onClick={filterButtonHandler}
            className={cn(`rounded_button ${index === 0 && 'active_filter'}`)}
          >
            {data}
          </Button>
        )
      })}
    </div>
  )
}

export default Filter
