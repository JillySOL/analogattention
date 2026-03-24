'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { MenuIcon } from 'lucide-react'

import ThemeToggle from '@/components/layout/theme-toggle'

import { Button } from '@/components/ui/button'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { cn } from '@/lib/utils'

type HeaderProps = {
  navigationData: NavigationSection[]
  isHome?: boolean
  className?: string
}

const Header = ({ navigationData, isHome = false, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isHomeRoute, setIsHomeRoute] = useState(isHome)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll-based active section on the home page
      const path = window.location.pathname

      if (path !== '/') {
        return
      }

      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = section as HTMLElement
        const { offsetTop, offsetHeight } = element

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (element.id !== activeSection) {
            setActiveSection(element.id)
          }

          break
        }
      }
    }

    // Initial check
    handleScroll()

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  useLayoutEffect(() => {
    // Update activeSection based on the current route using window.location.pathname
    const updateRouteState = () => {
      const path = window.location.pathname
      setIsHomeRoute(path === '/')

      setTimeout(() => {
        if (path === '/' || path === '/#home') {
          setActiveSection('home')
        } else if (path.startsWith('/blog/')) {
          setActiveSection('')
        } else if (path.startsWith('/contact')) {
          setActiveSection('')
        } else {
          setActiveSection('')
        }
      }, 0)
    }

    updateRouteState()
    document.addEventListener('astro:page-load', updateRouteState)

    return () => {
      document.removeEventListener('astro:page-load', updateRouteState)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full border-b border-border/70 bg-background/95 backdrop-blur transition-shadow duration-200',
        {
          'bg-background': !isHomeRoute,
          'shadow-sm': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='/' className='flex items-center'>
          <span className='font-serif italic text-xl font-medium tracking-tight'>analogattention</span>
        </a>

        {/* Navigation */}
        <MenuNavigation navigationData={navigationData} activeSection={activeSection} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex gap-3'>
          <ThemeToggle />

          {/* Mobile menu */}
          <MenuDropdown
            align='end'
            navigationData={navigationData}
            activeSection={activeSection}
            trigger={
              <Button variant='outline' size='icon' className='lg:hidden'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
