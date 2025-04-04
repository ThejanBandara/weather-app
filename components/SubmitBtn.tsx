import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const SubmitBtn = () => {
  return (
    <Button type='submit' className='aspect-square bg-slate-950/50 text-white border-white/50'  variant={"outline"} >
        <Search/>
    </Button>
  )
}

export default SubmitBtn