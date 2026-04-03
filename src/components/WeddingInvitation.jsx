import { useEffect } from 'react'
import CountdownSection from './CountdownSection'
import CoupleProfiles from './CoupleProfiles'
import CoverSection from './CoverSection'
import EventDetails from './EventDetails'
import GuestbookSection from './GuestbookSection'
import QuoteSection from './QuoteSection'
import ThankYouSection from './ThankYouSection'

const WeddingInvitation = () => {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal-section'))
    if (!items.length) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <div className="reveal-section">
        <CoverSection />
      </div>
      <div className="reveal-section">
        <QuoteSection />
      </div>
      <div className="reveal-section">
        <CountdownSection />
      </div>
      <div className="reveal-section">
        <CoupleProfiles />
      </div>
      <div className="reveal-section">
        <EventDetails />
      </div>
      <div className="reveal-section">
        <GuestbookSection />
      </div>
      <div className="reveal-section">
        <ThankYouSection />
      </div>
    </main>
  )
}

export default WeddingInvitation
