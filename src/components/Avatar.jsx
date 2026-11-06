import { useState } from 'react';
import avatarImage from '../images/a.jpeg';

export default function Avatar({
  src,
  alt = 'Mohammad Shaiful Alam',
  size = 96,
  className = '',
}) {
  const [fallback, setFallback] = useState(false);
  const imageSrc = src || avatarImage;

  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="block h-full w-full overflow-hidden rounded-full shadow-lg">
        {!fallback ? (
          <img
            src={imageSrc}
            alt={alt}
            className="block h-full w-full rounded-full object-cover object-top"
            loading="eager"
            onError={() => setFallback(true)}
          />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
            }}
          >
            <span className="font-heading font-bold text-white">
              {alt
                .split(' ')
                .map((w) => w[0])
                .join('')
                .toUpperCase()}
            </span>
          </span>
        )}
      </span>

      <span className="absolute bottom-0 right-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white bg-white text-[10px] font-bold text-navy-900 shadow-sm dark:border-slate-900 dark:bg-slate-900 dark:text-white">
        SF
      </span>
    </span>
  );
}
