import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <span className='font-serif italic text-[22px] font-medium tracking-tight'>analogattention</span>
    </div>
  )
}

export default Logo
