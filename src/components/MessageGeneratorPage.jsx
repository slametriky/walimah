import { useEffect, useMemo, useState } from 'react'

const buildTemplate = (recipient, inviteUrl) => {
  const safeRecipient = recipient || 'Bapak/Ibu/Saudara/i'

  return `_Assalamualaikum Warahmatullahi Wabarakatuh_

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${safeRecipient}* untuk menghadiri acara kami.

*Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi :

${inviteUrl}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

*Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*

Terima kasih banyak atas perhatiannya.

Salam Hormat
Salman dan Tia`
}

const onlyDigits = (value) => value.replace(/\D/g, '')
const normalizeWaNumber = (value) => {
  const digits = onlyDigits(value)
  if (!digits) return ''
  if (digits.startsWith('62')) return digits
  if (digits.startsWith('0')) return `62${digits.slice(1)}`
  if (digits.startsWith('8')) return `62${digits}`
  return digits
}

const MessageGeneratorPage = () => {
  const [recipientName, setRecipientName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [isEdited, setIsEdited] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')

  const inviteUrl = useMemo(() => {
    const name = recipientName.trim() || 'Tamu Undangan'
    const base = `${window.location.origin}/`
    return `${base}?to=${encodeURIComponent(name)}`
  }, [recipientName])

  useEffect(() => {
    if (!isEdited) {
      if (recipientName.trim()) {
        setMessage(buildTemplate(recipientName.trim(), inviteUrl))
      }
    }
  }, [inviteUrl, isEdited, recipientName])

  useEffect(() => {
    setMessage(buildTemplate('', `${window.location.origin}/?to=Tamu%20Undangan`))
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopyStatus('Teks berhasil disalin.')
    } catch {
      setCopyStatus('Gagal menyalin teks. Silakan copy manual.')
    }
  }

  const handleResetTemplate = () => {
    setRecipientName('')
    setPhoneNumber('')
    setCopyStatus('Nama penerima dan nomor WhatsApp berhasil dikosongkan.')
  }

  const waUrl = useMemo(() => {
    const cleanPhone = normalizeWaNumber(phoneNumber)
    if (!cleanPhone || !message.trim()) return '#'
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
  }, [message, phoneNumber])

  return (
    <main className="min-h-screen bg-surface px-4 py-10 md:px-8">
      <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 ambient-shadow md:p-10">
        <h1 className="font-headline text-4xl italic text-primary md:text-5xl">Generator Pesan WA</h1>
        <p className="mt-3 font-body text-sm text-on-surface-variant">
          Isi nama penerima dan nomor WhatsApp, lalu edit pesan jika diperlukan.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-secondary">Nama Penerima</span>
            <input
              className="w-full rounded-xl border border-outline-variant/40 bg-transparent px-4 py-3 font-body text-on-surface outline-none transition-colors focus:border-primary"
              onChange={(event) => setRecipientName(event.target.value)}
              placeholder="Contoh: Rian"
              type="text"
              value={recipientName}
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-secondary">Nomor WhatsApp</span>
            <input
              className="w-full rounded-xl border border-outline-variant/40 bg-transparent px-4 py-3 font-body text-on-surface outline-none transition-colors focus:border-primary"
              onChange={(event) => setPhoneNumber(onlyDigits(event.target.value))}
              placeholder="Contoh: 0812xxxx atau 62812xxxx"
              type="text"
              value={phoneNumber}
            />
          </label>
        </div>

        <div className="mt-5 rounded-xl border border-outline-variant/20 bg-[#fbf8f4] p-4">
          <p className="font-label text-[10px] uppercase tracking-widest text-secondary">Link Undangan Otomatis</p>
          <p className="mt-2 break-all font-body text-sm text-primary">{inviteUrl}</p>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-secondary">Teks Pesan (Editable)</span>
          <textarea
            className="h-[320px] w-full rounded-xl border border-outline-variant/40 bg-transparent p-4 font-body text-sm leading-relaxed text-on-surface outline-none transition-colors focus:border-primary"
            onChange={(event) => {
              setIsEdited(true)
              setMessage(event.target.value)
            }}
            value={message}
          />
        </label>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="rounded-full border border-primary/30 px-5 py-2.5 font-label text-xs uppercase tracking-widest text-primary transition-opacity hover:opacity-70"
            onClick={handleResetTemplate}
            type="button"
          >
            Reset Template
          </button>

          <button
            className="rounded-full border border-primary/30 px-5 py-2.5 font-label text-xs uppercase tracking-widest text-primary transition-opacity hover:opacity-70"
            onClick={handleCopy}
            type="button"
          >
            Copy Teks
          </button>

          <a
            className={`rounded-full px-5 py-2.5 font-label text-xs uppercase tracking-widest text-white ${
              waUrl === '#' ? 'pointer-events-none bg-stone-400' : 'cta-gradient'
            }`}
            href={waUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Kirim ke WhatsApp
          </a>
        </div>

        {copyStatus ? <p className="mt-3 font-body text-sm text-on-surface-variant">{copyStatus}</p> : null}
      </section>
    </main>
  )
}

export default MessageGeneratorPage
