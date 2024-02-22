import React from 'react'
import { MutableRefObject, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { Input } from '..'

const Search = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const clearInputValueHandler = () => {
    setValue('')
    inputRef.current.value = ''
  }

  return (
    <form action="search" className="header__search">
      <Input
        type="search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder={`What you're Looking for?`}
        ref={inputRef}
      />

      <AiOutlineClose
        size={20}
        onClick={clearInputValueHandler}
        className={`header__search-close ${value && 'header__search-close--active'}`}
      />

      <CiSearch
        size={20}
        className={`header__search-search ${value && 'header__search-search--active'}`}
      />
    </form>
  )
}

export default Search
