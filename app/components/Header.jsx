import React from 'react'
import { BellDot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/toggle'

function Header() {
  return (
    <div className="p-4 dark:bg-slate-900 bg-white flex justify-end shadow-md">
        <div className="flex items-center gap-4">
            <BellDot />
            <Button className="ml-4 dark:text-white">Sign in</Button>
            <ModeToggle />
        </div>
    </div>
  )
}

export default Header