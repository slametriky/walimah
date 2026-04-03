const MusicPlayerFab = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="glass-effect ambient-shadow flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-primary transition-transform hover:scale-110" type="button">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          music_note
        </span>
      </button>
    </div>
  )
}

export default MusicPlayerFab
