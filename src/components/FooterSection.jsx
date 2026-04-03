const FooterSection = () => {
  return (
    <footer className="w-full bg-[#F9F1FD] py-12 dark:bg-stone-950">
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-[#775839] dark:text-[#B99470]">
          © 2024 Made with love for Teguh & Laras
        </p>
        <div className="flex gap-6">
          <a className="font-sans text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-[#775839]" href="#">
            Privacy Policy
          </a>
          <a className="font-sans text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-[#775839]" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
