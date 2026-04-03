import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const PAGE_SIZE = 5

const GuestbookSection = () => {
  const [guestName, setGuestName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [wishes, setWishes] = useState([])
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  const loadWishes = useCallback(async (pageNumber = 1) => {
    if (!supabase) return

    const from = (pageNumber - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE - 1

    const { data, error, count } = await supabase
      .from('wedding_wishes')
      .select('id, guest_name, message, created_at', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to)

    if (!error && data) {
      setWishes(data)
      setTotalCount(count ?? 0)
    }
  }, [])

  useEffect(() => {
    loadWishes(page)
  }, [loadWishes, page])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitMessage('')

    if (!guestName.trim() || !message.trim()) {
      setSubmitMessage('Nama dan pesan wajib diisi.')
      return
    }

    if (!supabase) {
      setSubmitMessage('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.')
      return
    }

    setIsSubmitting(true)
    const { error } = await supabase.from('wedding_wishes').insert({
      guest_name: guestName.trim(),
      message: message.trim(),
    })
    setIsSubmitting(false)

    if (error) {
      setSubmitMessage(`Gagal mengirim doa restu: ${error.message}`)
      return
    }

    setGuestName('')
    setMessage('')
    setSubmitMessage('Doa restu berhasil dikirim. Terima kasih.')
    setPage(1)
    await loadWishes(1)
  }

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE))
  const formatSubmittedAt = (value) =>
    new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Jakarta',
    }).format(new Date(value))

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
                onChange={(event) => setGuestName(event.target.value)}
                placeholder="Tuliskan nama lengkap"
                type="text"
                value={guestName}
              />
            </div>

            <div className="relative">
              <label className="mb-1 block font-label text-[10px] uppercase tracking-widest text-secondary" htmlFor="guest-message">
                Pesan & Doa
              </label>
              <textarea
                className="w-full resize-none border-b border-outline-variant/40 bg-transparent py-2 font-body text-on-surface outline-none transition-colors placeholder:text-outline-variant/60 focus:border-primary focus:ring-0"
                id="guest-message"
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tuliskan harapan terbaik Anda"
                rows="4"
                value={message}
              />
            </div>

            <button
              className="cta-gradient flex w-full items-center justify-center gap-2 rounded-full py-4 font-label text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Doa Restu'}
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
            {submitMessage ? (
              <p className="text-center font-body text-sm text-on-surface-variant">{submitMessage}</p>
            ) : null}
          </form>
        </div>

        <div className="mt-12 space-y-4">
          {wishes.length ? (
            wishes.map((wish) => (
              <div key={wish.id} className="rounded-lg border border-outline-variant/10 bg-white/50 p-6">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="font-label text-xs text-primary">{wish.guest_name.toUpperCase()}</p>
                  <p className="font-label text-[10px] uppercase tracking-widest text-secondary">
                    {formatSubmittedAt(wish.created_at)}
                  </p>
                </div>
                <p className="font-body text-sm text-on-surface-variant">{wish.message}</p>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-outline-variant/10 bg-white/50 p-6">
              <p className="font-body text-sm text-on-surface-variant">
                Belum ada ucapan. Jadilah yang pertama mengirim doa restu.
              </p>
            </div>
          )}
        </div>
        {totalCount > 0 ? (
          <div className="mt-8 flex items-center justify-between gap-2 sm:gap-4">
            <button
              className="rounded-full border border-primary/70 bg-white/70 px-2.5 py-1.5 font-label text-[10px] uppercase tracking-widest text-primary shadow-sm disabled:opacity-40 sm:px-4 sm:py-2 sm:text-xs"
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              type="button"
            >
              <span className="sm:hidden material-symbols-outlined text-base leading-none">chevron_left</span>
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant sm:text-xs">
              Halaman {page} / {totalPages}
            </p>
            <button
              className="rounded-full border border-primary/70 bg-white/70 px-2.5 py-1.5 font-label text-[10px] uppercase tracking-widest text-primary shadow-sm disabled:opacity-40 sm:px-4 sm:py-2 sm:text-xs"
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              type="button"
            >
              <span className="sm:hidden material-symbols-outlined text-base leading-none">chevron_right</span>
              <span className="hidden sm:inline">Berikutnya</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default GuestbookSection
