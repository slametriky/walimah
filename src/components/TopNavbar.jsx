const TopNavbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-stone-50/70 shadow-sm shadow-[#775839]/5 backdrop-blur-md dark:bg-stone-900/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-4">
        <div className="text-2xl italic text-[#775839] dark:text-[#B99470]">Teguh & Laras</div>
        <div className="hidden items-center gap-8 md:flex">
          <a className="font-serif italic tracking-tight text-stone-600 transition-colors hover:text-[#775839] dark:text-stone-400" href="#story">Our Story</a>
          <a className="font-serif italic tracking-tight text-stone-600 transition-colors hover:text-[#775839] dark:text-stone-400" href="#schedule">Schedule</a>
          <a className="border-b-2 border-[#775839] pb-1 font-serif italic tracking-tight text-[#775839] dark:text-[#B99470]" href="#rsvp">RSVP</a>
          <a className="font-serif italic tracking-tight text-stone-600 transition-colors hover:text-[#775839] dark:text-stone-400" href="#wishes">Wishes</a>
          <span className="material-symbols-outlined cursor-pointer text-[#775839] transition-opacity hover:opacity-80 dark:text-[#B99470]">favorite</span>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-[#775839]">menu</span>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar
