import React from 'react'
import { Input } from '../ui/input'

export default function Search() {
  return (
    <div>
      <Input  type='search' placeholder='search videos and Accounts...' className='p-5 max-w-44  md:w-[300px]' />
    </div>
  )
}
