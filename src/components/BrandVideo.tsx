import { Play } from 'lucide-react'
import { useState, useRef } from 'react'

export default function BrandVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayToggle = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="relative max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.25em]">Cinematic</span>
        <h2 className="font-serif font-light text-3xl sm:text-4xl text-zinc-100 tracking-wider uppercase mt-3">
          SYNTHESIS IN MOTION
        </h2>
        <p className="text-zinc-500 text-sm mt-3 tracking-wide">
          A visual representation of purity, concentration, and dedication.
        </p>
      </div>

      {/* Elegant Video Container */}
      <div className="relative border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950 shadow-2xl group aspect-video">
        <video
          ref={videoRef}
          src="/brand_video.mp4"
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-95"
          onClick={handlePlayToggle}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Custom Premium Play Overlay Overlay when paused */}
        {!isPlaying && (
          <div 
            onClick={handlePlayToggle}
            className="absolute inset-0 flex items-center justify-center bg-zinc-950/40 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-zinc-950/20 cursor-pointer"
          >
            <div className="h-16 w-16 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-200 transition-premium transform hover:scale-105 hover:border-zinc-400">
              <Play className="w-6 h-6 fill-current translate-x-0.5 text-zinc-100" />
            </div>
          </div>
        )}

        {/* Control prompt info on hover */}
        <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-[8px] uppercase tracking-widest text-zinc-400 font-mono opacity-0 group-hover:opacity-100 transition-premium pointer-events-none">
          Click to {isPlaying ? 'Pause' : 'Play'}
        </div>
      </div>
    </section>
  )
}
