import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface SafeImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function SafeImage({
  src,
  fallbackSrc,
  alt,
  className = '',
  loading = 'lazy',
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#E8DED2]/80 via-[#FAF8F3] to-[#F2EBE1] text-[#A65F3B] p-4 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Utensils className="w-8 h-8 opacity-60 mb-2" />
        <span className="text-xs font-medium text-center text-[#1F1F1F]/70 line-clamp-1">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#E8DED2]/40">
      {/* Loading Skeleton / Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8DED2]/40 via-[#FAF8F3]/60 to-[#E8DED2]/40 animate-pulse" />
      )}

      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
