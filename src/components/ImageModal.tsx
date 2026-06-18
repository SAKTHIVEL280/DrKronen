interface ImageModalProps {
  previewImage: string | null
  onClose: () => void
}

export default function ImageModal({ previewImage, onClose }: ImageModalProps) {
  if (!previewImage) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-pointer animate-fade-in"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
        <img 
          src={previewImage} 
          alt="Fullscreen Preview" 
          className="max-w-full max-h-[85vh] object-contain rounded-lg border border-white/10" 
        />
        <button 
          className="absolute top-4 right-4 px-3 py-1 rounded bg-black/60 border border-white/20 text-xs font-bold text-white uppercase tracking-wider cursor-pointer"
          onClick={onClose}
        >
          Close [X]
        </button>
      </div>
    </div>
  )
}
