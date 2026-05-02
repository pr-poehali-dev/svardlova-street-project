import { useState } from 'react';
import Icon from '@/components/ui/icon';

const S = {
  h2: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: 'clamp(1.8rem,4vw,2.8rem)',
    fontWeight: 600,
    color: '#fff',
    marginBottom: 8,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.02em',
    lineHeight: 1.15,
  },
};

export default function GallerySlider({ images, titles, onOpenLightbox }: { images: string[]; titles: string[]; onOpenLightbox: (src: string) => void }) {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const maxIdx = images.length - 3;

  return (
    <section id="gallery" style={{ background: '#0e0e0e', padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', marginBottom: 28 }}>
        <h2 style={S.h2}>Галерея улицы<br /><span style={{ color: '#5fa870' }}>Свердлова</span></h2>
        <div style={{ width: 48, height: 3, background: '#4a8c5c' }} />
      </div>
      <div style={{ position: 'relative' }}>
        <button onClick={() => setGalleryIdx(i => Math.max(0, i - 1))} disabled={galleryIdx === 0}
          style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 42, height: 42, background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(74,140,92,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: galleryIdx === 0 ? 0.25 : 1, transition: 'opacity 0.2s' }}>
          <Icon name="ChevronLeft" size={20} style={{ color: '#5fa870' }} />
        </button>
        <div style={{ overflow: 'hidden', padding: '0 58px' }}>
          <div style={{ display: 'flex', gap: 5, transition: 'transform 0.4s ease', transform: `translateX(calc(-${galleryIdx} * (33.333% + 1.7px)))` }}>
            {images.map((img, i) => (
              <div key={i} onClick={() => onOpenLightbox(img)}
                style={{ flex: '0 0 33.333%', aspectRatio: '16/10', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                <img src={img} alt={titles[i]} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}>
                  <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.78rem', color: '#ddd', margin: 0 }}>{titles[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => setGalleryIdx(i => Math.min(maxIdx, i + 1))} disabled={galleryIdx >= maxIdx}
          style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 42, height: 42, background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(74,140,92,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: galleryIdx >= maxIdx ? 0.25 : 1, transition: 'opacity 0.2s' }}>
          <Icon name="ChevronRight" size={20} style={{ color: '#5fa870' }} />
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 18 }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setGalleryIdx(Math.min(i, maxIdx))}
            style={{ width: i === galleryIdx ? 22 : 8, height: 8, background: i === galleryIdx ? '#4a8c5c' : 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', padding: 0, borderRadius: 0 }} />
        ))}
      </div>
    </section>
  );
}
