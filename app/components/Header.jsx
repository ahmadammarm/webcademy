import React from 'react'
import { BellDot } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className="p-4 bg-slate-800 flex justify-end">
        <div className="flex items-center gap-4">
            <BellDot className="text-white" />
            <Button className="ml-4">Login</Button>
        </div>
    </div>
  )
}

export default Header