import brideImage from '../assets/stitch/bride.png'
import groomImage from '../assets/stitch/groom.png'

const CoupleProfiles = () => {
  return (
    <section className="bg-surface px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-headline text-4xl italic text-on-surface md:text-5xl">Pasangan Mempelai</h2>
          <div className="mx-auto h-px w-24 bg-outline-variant opacity-40" />
        </div>

        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
          <div className="group text-center">
            <div className="relative mb-8">
              <div className="ambient-shadow h-80 w-64 rotate-[-2deg] overflow-hidden rounded-full border-4 border-white">
                <img
                  className="h-full w-full object-cover"
                  src={groomImage}
                  alt="Faris"
                />
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-6xl text-primary-container opacity-30">
                filter_vintage
              </span>
            </div>
            <h3 className="mb-2 font-headline text-2xl text-primary">Salman Alfarisi, M.Pd</h3>
            <p className="mx-auto max-w-xs font-body text-sm text-on-surface-variant">
              Putra dari
              <br />
              Bapak Imam Suyono (Rahimahullah)
              <br /> &
              Ibu Hj. Sudarmi, S.Pd
            </p>
          </div>

          <div className="font-headline text-5xl italic text-primary-container opacity-50">&</div>

          <div className="text-center">
            <div className="relative mb-8">
              <div className="ambient-shadow h-80 w-64 rotate-[2deg] overflow-hidden rounded-full border-4 border-white">
                <img
                  className="h-full w-full object-cover"
                  src={brideImage}
                  alt="Ari"
                />
              </div>
              <span className="material-symbols-outlined absolute -left-4 -top-4 text-6xl text-primary-container opacity-30">
                filter_vintage
              </span>
            </div>
            <h3 className="mb-2 font-headline text-2xl text-primary">Ari Septiawati, M.Pd</h3>
            <p className="mx-auto max-w-xs font-body text-sm text-on-surface-variant">
              Putri dari
              <br />
              Bapak H. Siswanto
              <br /> &
              Ibu Hj. Siti Khasanah, S.Pd
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoupleProfiles
