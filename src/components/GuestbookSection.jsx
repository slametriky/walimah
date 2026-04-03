const GuestbookSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="bg-gradient-to-b from-[#e6d8c8] via-[#dac7b2] to-[#cfb89e] px-6 py-24" id="wishes">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl italic text-on-surface">Ucapan & Doa</h2>
          <p className="mt-2 font-body text-sm text-on-surface-variant">
            Berikan restu dan doa Anda untuk kebahagiaan kami
          </p>
        </div>

        <div className="ambient-shadow rounded-xl bg-[#f3ede6] p-8 md:p-12">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="mb-1 block font-label text-[10px] uppercase tracking-widest text-secondary" htmlFor="guest-name">
                Nama Anda
              </label>
              <input
                className="w-full border-b border-outline-variant/40 bg-transparent py-2 font-body text-on-surface outline-none transition-colors placeholder:text-outline-variant/60 focus:border-primary focus:ring-0"
                id="guest-name"
                placeholder="Tuliskan nama lengkap"
                type="text"
              />
            </div>

            <div className="relative">
              <label className="mb-1 block font-label text-[10px] uppercase tracking-widest text-secondary" htmlFor="guest-message">
                Pesan & Doa
              </label>
              <textarea
                className="w-full resize-none border-b border-outline-variant/40 bg-transparent py-2 font-body text-on-surface outline-none transition-colors placeholder:text-outline-variant/60 focus:border-primary focus:ring-0"
                id="guest-message"
                placeholder="Tuliskan harapan terbaik Anda"
                rows="4"
              />
            </div>

            <button
              className="cta-gradient flex w-full items-center justify-center gap-2 rounded-full py-4 font-label text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              type="submit"
            >
              Kirim Doa Restu
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>

        <div className="mt-12 space-y-4">
          <div className="rounded-lg border border-outline-variant/10 bg-white/50 p-6">
            <p className="mb-2 font-label text-xs text-primary">KELUARGA BESAR BUDI</p>
            <p className="font-body text-sm text-on-surface-variant">
              Selamat menempuh hidup baru Faris & Ari! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuestbookSection
