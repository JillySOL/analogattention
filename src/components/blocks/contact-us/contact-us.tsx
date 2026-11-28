import { CONTACT_EMAIL } from '@/consts'

const ContactUs = () => {
  return (
    <section className='py-20 sm:py-24 lg:py-28'>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
        <h1 className='font-serif text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl'>
          Contact
        </h1>
        <div className='prose mt-10'>
          <p>
            If a post rang true, or didn&apos;t, I&apos;d like to hear about it. The easiest place to reply is
            wherever you found the post; that&apos;s where the conversation is.
          </p>
          {CONTACT_EMAIL && (
            <p>
              Otherwise, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactUs
