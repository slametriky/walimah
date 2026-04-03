const QuoteSection = () => {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-24 text-center md:px-12" id="quote">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 font-headline text-4xl italic text-primary">Ngunduh Mantu</h2>
        <h3 className="mb-4 font-headline text-2xl italic text-primary">Faris & Ari</h3>
        <p className="mb-12 font-label text-sm tracking-[0.2em] text-secondary">SABTU, 18 APRIL 2026</p>

        <div className="relative py-12">
          <span className="material-symbols-outlined absolute -top-4 left-0 text-6xl text-primary-container opacity-20">
            format_quote
          </span>
          <p className="px-8 font-headline text-xl italic leading-relaxed text-on-surface-variant md:text-2xl">
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya
            kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi
            tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir."
          </p>
          <p className="mt-6 font-label text-xs uppercase tracking-widest text-primary">- Q.S. Ar-Rum: 21 -</p>
        </div>
      </div>

      <div className="absolute -right-20 top-1/2 opacity-10">
        <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          eco
        </span>
      </div>
    </section>
  )
}

export default QuoteSection
