import React from 'react'
import { ModeToggle } from '@/components/ui/toggle'

function Header() {
  return (
    <div className="p-4 dark:bg-slate-900 bg-white flex justify-end shadow-md">
        <div className="flex items-center gap-4">
            <ModeToggle />
        </div>
    </div>
  )
}

export default Header