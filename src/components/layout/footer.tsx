import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className='no-print'>
      <Separator />
      <div className='mx-auto flex max-w-4xl justify-center px-4 py-8 sm:px-6 lg:px-8'>
        <p className='text-muted-foreground text-sm'>
          &copy; {new Date().getFullYear()} analogattention
        </p>
      </div>
    </footer>
  )
}

export default Footer
