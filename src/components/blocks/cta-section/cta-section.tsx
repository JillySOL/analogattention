import { Button } from '@/components/ui/button'
import { SUBSTACK_URL } from '@/consts'

// Subscribe box. The old form had nowhere to send addresses (a static site keeps nothing), so it now links to the
// Substack publication, and is hidden until SUBSTACK_URL is set in src/consts.ts.
const CTA = () => {
  if (!SUBSTACK_URL) return null
  const subscribe = `${SUBSTACK_URL.replace(/\/+$/, '')}/subscribe`
  return (
    <section className='border-t border-border py-20 sm:py-28' id='newsletter'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl'>
          <h2 className='font-serif text-3xl font-light leading-tight tracking-tight sm:text-4xl'>
            Get new journals delivered to your inbox.
          </h2>
          <p className='mt-4 text-muted-foreground'>I don't have the answers yet, so we will learn together.</p>
          <Button asChild size='lg' className='mt-6 text-base'>
            <a href={subscribe} target='_blank' rel='noopener'>
              Subscribe on Substack
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
