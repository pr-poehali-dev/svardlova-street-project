import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const IMG1 = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/2a3dbe25-0860-45a2-b814-d445d3f64121.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/f47b0cbf-5863-423f-9bdd-0a77c134de9a.jpg';
const IMG3 = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/ff0608ca-997b-4ff7-a285-0bbffa5fb6a4.jpg';

const photos = [
  { id: 1, src: IMG1, title: 'Улица Свердлова', year: 'Современный вид', category: 'Архитектура', desc: 'Общий вид улицы с характерной исторической застройкой' },
  { id: 2, src: IMG2, title: 'Купеческий особняк', year: 'XIX век', category: 'Архитектура', desc: 'Типичный образец дореволюционной застройки Астрахани' },
  { id: 3, src: IMG3, title: 'Астрахань с высоты', year: 'Современный вид', category: 'Панорама', desc: 'Панорамный вид на исторический центр города' },
  { id: 4, src: IMG1, title: 'Осенняя улица', year: 'Осень', category: 'Пейзаж', desc: 'Осенняя атмосфера исторических кварталов' },
  { id: 5, src: IMG2, title: 'Детали фасада', year: 'XIX век', category: 'Архитектура', desc: 'Характерные декоративные элементы купеческой эпохи' },
  { id: 6, src: IMG3, title: 'Волга и город', year: 'Панорама', category: 'Панорама', desc: 'Астрахань на берегах великой русской реки' },
];

const categories = ['Все', 'Архитектура', 'Панорама', 'Пейзаж'];

export default function Gallery() {
  const [active, setActive] = useState('Все');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'Все' ? photos : photos.filter(p => p.category === active);
  const current = lightbox !== null ? photos.find(p => p.id === lightbox) : null;

  const prev = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex(p => p.id === lightbox);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length].id);
  };
  const next = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex(p => p.id === lightbox);
    setLightbox(filtered[(idx + 1) % filtered.length].id);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Фотохроника</p>
          <h1 className="font-display font-light" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--ink)', lineHeight: 1.1 }}>
            Галерея
          </h1>
          <div className="ornament-line w-48 mx-auto mt-6">
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
          </div>
          <p className="font-body mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>
            Визуальная летопись улицы Свердлова — от исторических видов до современной фотографии
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="font-body text-xs px-5 py-2 transition-all duration-200"
              style={{
                background: active === cat ? 'var(--gold)' : 'transparent',
                color: active === cat ? 'var(--parchment)' : 'var(--gold)',
                border: '1px solid var(--gold)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden"
              style={{ border: '1px solid var(--divider-color)' }}
              onClick={() => setLightbox(photo.id)}
            >
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(28,20,9,0.8) 0%, transparent 60%)' }}
                >
                  <div>
                    <p className="font-display text-lg" style={{ color: 'var(--parchment)' }}>{photo.title}</p>
                    <p className="section-label" style={{ color: 'var(--gold-pale)' }}>{photo.year}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 p-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(28,20,9,0.6)' }}>
                  <Icon name="ZoomIn" size={16} style={{ color: 'var(--gold-pale)' }} />
                </div>
              </div>
              <div className="p-4" style={{ background: 'var(--parchment-dark)' }}>
                <div className="flex items-center justify-between">
                  <p className="font-body text-sm font-medium" style={{ color: 'var(--ink)' }}>{photo.title}</p>
                  <span className="section-label" style={{ color: 'var(--sepia)' }}>{photo.category}</span>
                </div>
                <p className="font-body text-xs mt-1" style={{ color: 'var(--ink-light)', opacity: 0.6 }}>{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(28,20,9,0.95)' }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={current.src} alt={current.title} className="w-full max-h-[75vh] object-contain" />

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="font-display text-2xl font-light" style={{ color: 'var(--parchment)' }}>{current.title}</p>
              <p className="section-label mt-1" style={{ color: 'var(--gold)' }}>{current.year} · {current.category}</p>
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-3 transition-opacity hover:opacity-70"
              style={{ background: 'rgba(196,154,42,0.2)', border: '1px solid var(--gold)' }}
            >
              <Icon name="ChevronLeft" size={22} style={{ color: 'var(--gold-light)' }} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-3 transition-opacity hover:opacity-70"
              style={{ background: 'rgba(196,154,42,0.2)', border: '1px solid var(--gold)' }}
            >
              <Icon name="ChevronRight" size={22} style={{ color: 'var(--gold-light)' }} />
            </button>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 p-2.5 transition-opacity hover:opacity-70"
              style={{ background: 'var(--gold)', border: '1px solid var(--gold)' }}
            >
              <Icon name="X" size={18} style={{ color: 'var(--parchment)' }} />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
