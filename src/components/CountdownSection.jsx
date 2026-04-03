import { useEffect, useState } from 'react'

const EVENT_DATE_WIB = '2026-04-18T09:00:00+07:00'

const getCountdown = () => {
  const target = new Date(EVENT_DATE_WIB).getTime()
  const now = Date.now()
  const diff = Math.max(0, target - now)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, isFinished: diff <= 0 }
}

const pad = (num) => String(num).padStart(2, '0')

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getCountdown)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getCountdown())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const items = [
    { label: 'Hari', value: timeLeft.isFinished ? '00' : String(timeLeft.days) },
    { label: 'Jam', value: pad(timeLeft.hours) },
    { label: 'Menit', value: pad(timeLeft.minutes) },
    { label: 'Detik', value: pad(timeLeft.seconds) },
  ]

  return (
    <section className="bg-surface-container-low px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="ambient-shadow rounded-xl bg-white p-8">
              <p className="mb-1 font-headline text-4xl text-primary">{item.value}</p>
              <p className="font-label text-[10px] uppercase tracking-widest text-secondary">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountdownSection
