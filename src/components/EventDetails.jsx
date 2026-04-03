const EventDetails = () => {
  return (
    <section className="bg-surface-container-low px-6 py-24" id="schedule">
      <div className="mx-auto max-w-3xl">
        <div className="ambient-shadow relative overflow-hidden rounded-xl bg-white p-10 text-center md:p-16">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 opacity-5">
            <span className="material-symbols-outlined text-[150px]">house</span>
          </div>
          <span className="material-symbols-outlined mb-6 text-4xl text-primary">house</span>
          <h3 className="mb-8 font-headline text-3xl italic text-on-surface md:text-4xl">Ngunduh Mantu</h3>
          <div className="space-y-6 font-body text-on-surface-variant">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <p className="text-xl">Sabtu, 18 April 2026</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <p className="text-xl">Pukul 09.00 - selesai</p>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 px-8">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <p className="text-lg leading-relaxed">
                Kediaman Mempelai Laki-laki
                <br />
                Desa Tulus Ayu RT 010 RW 003 No 674
                <br />
                Kecamatan Belitang Madang Raya
                <br />
                Kabupaten OKU Timur
                <br />
                Provinsi Sumatera Selatan
              </p>
            </div>
          </div>
          <a
            className="mt-12 inline-block border-b-2 border-primary pb-1 font-label text-sm uppercase tracking-widest text-primary transition-opacity hover:opacity-60"
            href="#"
          >
            Lihat Lokasi Acara
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
