import coverCouple from '../assets/stitch/cover-couple.png'
import heroBg from '../assets/stitch/hero.webp'

const CoverSection = () => {
  const handleOpenInvitation = (event) => {
    event.preventDefault()
    const target = document.getElementById('quote')
    if (!target) return

    const startY = window.scrollY
    const targetY = target.getBoundingClientRect().top + window.scrollY
    const distance = targetY - startY
    const duration = 1600
    let startTime = null

    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2)

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * eased)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  return (
    <header
      className="relative flex h-screen items-center justify-center overflow-hidden bg-hero px-6 text-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})` }}
    >
      <div className="animate-fade-in z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
            <img alt="Faris dan Ari Illustration" className="h-full w-full object-cover" src={coverCouple} />
          </div>
          <div className="absolute -bottom-2 -right-2 rounded-full bg-white p-2 shadow-lg">
            <span className="material-symbols-outlined text-2xl text-primary">favorite</span>
          </div>
        </div>

        <h1 className="mb-12 font-headline text-5xl italic tracking-tight text-white drop-shadow-lg md:text-8xl">Faris & Ari</h1>
        <div className="mb-8 text-white drop-shadow-md">
          <p className="mb-2 font-label text-xs uppercase tracking-widest opacity-80">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="font-headline text-2xl italic md:text-3xl">Nama Tamu</p>
        </div>
        <a
          className="cta-gradient inline-flex items-center gap-2 rounded-full px-8 py-3 font-label text-sm uppercase tracking-widest text-white shadow-xl transition-transform duration-200 hover:scale-95"
          href="#quote"
          onClick={handleOpenInvitation}
        >
          Buka Undangan
          <span className="material-symbols-outlined text-sm">mail</span>
        </a>
      </div>
    </header>
  )
}

export default CoverSection
