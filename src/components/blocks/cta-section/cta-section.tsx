'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const CTA = () => {
  return (
    <section className='border-t border-border py-20 sm:py-28' id='newsletter'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl'>
          <h2 className='font-serif text-3xl font-light leading-tight tracking-tight sm:text-4xl'>
            Get new journals delivered to your inbox.
          </h2>
          <p className='mt-4 text-muted-foreground'>
            Join readers who think carefully about technology and attention. No spam, unsubscribe any time.
          </p>
          <form className='mt-6 flex flex-col gap-3 sm:flex-row'>
            <Input
              type='email'
              placeholder='your@email.com'
              className='h-10 flex-1 bg-background text-base'
            />
            <Button size='lg' className='text-base sm:w-auto' type='submit'>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
