'use client'

import { PrinterIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type PrintButtonProps = {
  className?: string
}

const PrintButton = ({ className }: PrintButtonProps) => {
  return (
    <Button
      variant='outline'
      size='icon'
      className={cn(className)}
      onClick={() => window.print()}
      aria-label='Print this page'
      title='Print this page'
    >
      <PrinterIcon className='size-4' />
      <span className='sr-only'>Print this page</span>
    </Button>
  )
}

export default PrintButton
