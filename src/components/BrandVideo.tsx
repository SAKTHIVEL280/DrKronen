import { Play, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { IMAGES } from '@/constants'

export default function BrandVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => {
            setIsPlaying(true)
          }).catch((err) => {
            console.log("Autoplay blocked or interrupted:", err)
          })
        } else {
          video.pause()
          setIsPlaying(false)
        }
      },
      {
        threshold: 0.25, // Play when 25% of the video container is visible in viewport
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handlePlayToggle = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {})
    }
  }

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent toggling play/pause
    if (!videoRef.current) return
    const newMuted = !isMuted
    videoRef.current.muted = newMuted
    setIsMuted(newMuted)
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
      <div 
        ref={containerRef}
        className="relative border border-zinc-800 rounded-lg overflow-hidden bg-zinc-955 shadow-2xl group aspect-video"
      >
        <video
          ref={videoRef}
          src="/brand_video.mp4"
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover brightness-95 cursor-pointer"
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

        {/* Volume Mute Toggle controls */}
        <button
          onClick={handleMuteToggle}
          className="absolute bottom-4 left-4 p-2.5 rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-400 transition-premium z-10 cursor-pointer"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Brand / Video Watermark Overlay (Covers Google Veo Star Logo) */}
        <div className="absolute bottom-[12.5%] right-[7.2%] z-10 select-none pointer-events-none transition-all duration-300">
          <img 
            src={IMAGES.logo} 
            alt="Dr. Kronen Logo" 
            className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded sm:rounded-lg md:rounded-xl border border-zinc-800 bg-zinc-955/95 shadow-2xl p-[1px] sm:p-1 md:p-1.5"
          />
        </div>

        {/* Control prompt info on hover */}
        <div className="absolute bottom-14 right-4 px-2 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-[8px] uppercase tracking-widest text-zinc-400 font-mono opacity-0 group-hover:opacity-100 transition-premium pointer-events-none z-10">
          Click to {isPlaying ? 'Pause' : 'Play'}
        </div>
      </div>
    </section>
  )
}
