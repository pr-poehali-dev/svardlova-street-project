import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const facts = [
  { icon: 'Navigation', label: 'Координаты', value: '46°21′ с. ш., 48°03′ в. д.', sub: 'Центральная часть Астрахани' },
  { icon: 'Ruler', label: 'Протяжённость', value: '≈ 1,8 км', sub: 'С севера на юг' },
  { icon: 'MapPin', label: 'Район', value: 'Кировский', sub: 'Исторический центр' },
  { icon: 'Compass', label: 'Ориентация', value: 'Меридиональная', sub: 'Север — Юг' },
];

const surroundings = [
  { dir: 'Север', desc: 'Выход к набережной реки Кутум' },
  { dir: 'Юг', desc: 'Соединение с центральными магистралями' },
  { dir: 'Запад', desc: 'Астраханский кремль и исторический центр' },
  { dir: 'Восток', desc: 'Торговые и жилые кварталы' },
];

export default function Geography() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Улица Свердлова</p>
          <h1 className="font-display font-light" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--ink)', lineHeight: 1.1 }}>
            География улицы
          </h1>
          <div className="ornament-line w-48 mx-auto mt-6">
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
          </div>
          <p className="font-body mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>
            Расположение, протяжённость и окружение одной из центральных улиц Астрахани
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {facts.map((f) => (
            <div key={f.label} className="museum-card p-5 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2.5" style={{ background: 'var(--parchment)', border: '1px solid var(--divider-color)' }}>
                  <Icon name={f.icon} size={18} style={{ color: 'var(--gold)' }} fallback="MapPin" />
                </div>
              </div>
              <p className="section-label mb-1">{f.label}</p>
              <p className="font-display text-lg font-semibold" style={{ color: 'var(--ink)' }}>{f.value}</p>
              <p className="font-body text-xs mt-1" style={{ color: 'var(--sepia)' }}>{f.sub}</p>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="ornament-line mb-8">
          <span className="section-label">Улица на карте города</span>
        </div>

        <div className="overflow-hidden mb-16" style={{ border: '1px solid var(--divider-color)', height: '420px' }}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=48.015,46.338,48.055,46.358&layer=mapnik"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Улица Свердлова на карте Астрахани"
          />
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="ornament-line mb-6">
              <span className="section-label">Описание</span>
            </div>
            <p className="font-body text-sm leading-loose" style={{ color: 'var(--ink-light)' }}>
              Улица Свердлова расположена в историческом центре Астрахани — в Кировском районе города. Она проходит в меридиональном направлении через кварталы, сформировавшиеся ещё в дореволюционное время.
            </p>
            <p className="font-body text-sm leading-loose mt-4" style={{ color: 'var(--ink-light)' }}>
              Рельеф местности равнинный, характерный для низовьев Волги. Улица соединяет несколько важных городских узлов и исторически являлась частью торгового пути через центр города.
            </p>
          </div>
          <div>
            <div className="ornament-line mb-6">
              <span className="section-label">Окружение</span>
            </div>
            <div className="flex flex-col gap-3">
              {surroundings.map((s) => (
                <div key={s.dir} className="flex items-start gap-4 p-4" style={{ background: 'var(--parchment-dark)', border: '1px solid var(--divider-color)' }}>
                  <span className="font-display font-semibold text-sm flex-shrink-0 w-12" style={{ color: 'var(--gold)' }}>{s.dir}</span>
                  <span className="font-body text-sm" style={{ color: 'var(--ink-light)' }}>{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Context note */}
        <div className="p-8" style={{ background: 'var(--parchment-dark)', border: '1px solid var(--divider-color)' }}>
          <div className="flex gap-4 items-start">
            <div className="p-2.5 flex-shrink-0" style={{ background: 'var(--parchment)', border: '1px solid var(--divider-color)' }}>
              <Icon name="Info" size={18} style={{ color: 'var(--gold)' }} />
            </div>
            <div>
              <h4 className="font-display text-lg mb-2" style={{ color: 'var(--ink)' }}>Астрахань и Волга</h4>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>
                Астрахань расположена в дельте Волги, в 85 км от Каспийского моря. Город занимает 11 островов, соединённых мостами. Улица Свердлова находится на главном острове — Кутум, в исторически сложившемся деловом и административном центре.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
