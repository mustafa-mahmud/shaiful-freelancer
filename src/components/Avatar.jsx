import { useState } from 'react';

export default function Avatar({
  src,
  alt = 'Mohammad Shaiful Alam',
  size = 96,
  className = '',
}) {
  const [fallback, setFallback] = useState(false);
  const imageSrc =
    src ||
    'https://api.dicebear.com/7.x/avataaars/svg?seed=MShaiful&backgroundColor=b6e3f4&mood=happy';

  return (
    <span className={`relative inline-block ${className}`}>
      {!fallback && (
        <img
          src={imageSrc}
          alt={alt}
          width={size}
          height={size}
          className={`rounded-full block shadow-lg ${size >= 80 ? 'shadow-xl' : ''}`}
          loading="eager"
          onError={() => setFallback(true)}
        />
      )}
      {fallback && (
        <div
          className="flex h-full w-full items-center justify-center rounded-full shadow-lg"
          style={{
            width: size,
            height: size,
            background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
          }}
        >
          <span className="text-white font-bold font-heading">
            {alt
              .split(' ')
              .map((w) => w[0])
              .join('')
              .toUpperCase()}
          </span>
        </div>
      )}
      <div className="absolute bottom-0 right-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white dark:border-slate-900 bg-white dark:bg-slate-900 shadow-sm text-[10px] font-bold text-navy-900 dark:text-white">
        SF
      </div>
    </span>
  );
}
