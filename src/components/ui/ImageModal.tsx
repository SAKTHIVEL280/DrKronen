interface ImageModalProps {
  previewImage: string | null
  onClose: () => void
}

export default function ImageModal({ previewImage, onClose }: ImageModalProps) {
  const isOpen = !!previewImage

  return (
    <div 
      className={`fixed inset-0 z-[300] flex items-center justify-center p-4 cursor-pointer transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen 
          ? 'opacity-100 visible pointer-events-auto bg-black/90 backdrop-blur-md' 
          : 'opacity-0 invisible pointer-events-none bg-black/0 backdrop-blur-none'
      }`}
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img 
          src={previewImage || undefined} 
          alt="Fullscreen Preview" 
          className={`max-w-full max-h-[85vh] object-contain rounded-lg border border-white/10 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-[0.96] blur-sm'
          }`} 
        />
        <button 
          className="absolute -top-12 right-0 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-300 uppercase tracking-widest cursor-pointer hover:text-white hover:border-zinc-500 transition-premium active:scale-95"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}
