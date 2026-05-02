import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/2a3dbe25-0860-45a2-b814-d445d3f64121.jpg';
const CITY_IMG = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/ff0608ca-997b-4ff7-a285-0bbffa5fb6a4.jpg';

const sections = [
  { to: '/history', icon: 'BookOpen', title: 'История', desc: 'От основания до наших дней — летопись одной из старейших улиц Астрахани' },
  { to: '/landmarks', icon: 'Landmark', title: 'Значимые места', desc: 'Архитектурные памятники, дома с историей и культурные объекты улицы' },
  { to: '/geography', icon: 'MapPin', title: 'География', desc: 'Расположение, протяжённость и топографические особенности улицы' },
  { to: '/gallery', icon: 'Images', title: 'Галерея', desc: 'Фотохроника улицы Свердлова — исторические снимки и современные виды' },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative grain-overlay" style={{ minHeight: '90vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,20,9,0.55) 0%, rgba(28,20,9,0.75) 60%, var(--parchment) 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
          <p className="section-label mb-6 page-enter stagger-1" style={{ color: 'var(--gold-light)', opacity: 0 }}>
            г. Астрахань · историческая улица
          </p>
          <h1
            className="font-display font-light page-enter stagger-2"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#F5EFE0', lineHeight: 1.05, letterSpacing: '-0.01em', opacity: 0 }}
          >
            Улица<br />
            <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Свердлова</em>
          </h1>
          <div className="ornament-line w-48 my-8 page-enter stagger-3" style={{ opacity: 0 }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>✦</span>
          </div>
          <p
            className="font-body max-w-xl leading-relaxed page-enter stagger-4"
            style={{ color: 'rgba(245,239,224,0.8)', fontSize: '1.05rem', opacity: 0 }}
          >
            Одна из исторических артерий Астрахани, хранящая архитектурную память эпох и судьбы горожан на протяжении двух столетий
          </p>
          <div className="flex flex-wrap gap-4 mt-10 justify-center page-enter stagger-4" style={{ opacity: 0 }}>
            <Link to="/history" className="gold-btn">Изучить историю</Link>
            <Link to="/gallery" className="ghost-btn" style={{ borderColor: 'rgba(245,239,224,0.5)', color: 'rgba(245,239,224,0.85)' }}>Галерея</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <Icon name="ChevronDown" size={20} style={{ color: 'rgba(196,154,42,0.7)' }} />
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6" style={{ background: 'var(--parchment-dark)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--ink-light)', lineHeight: 1.6 }}>
            «Улицы хранят память города — в каждом камне мостовой, в каждом фасаде живёт история поколений»
          </p>
          <p className="section-label mt-6" style={{ color: 'var(--sepia)' }}>Из истории Астрахани</p>
        </div>
      </section>

      {/* Sections grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="ornament-line mb-12">
            <span className="section-label">Разделы портала</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="museum-card p-8 group transition-all duration-300 hover:shadow-lg"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5" style={{ background: 'var(--parchment)', border: '1px solid var(--divider-color)' }}>
                    <Icon name={s.icon} size={20} style={{ color: 'var(--gold)' }} fallback="BookOpen" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl mb-2 group-hover:text-amber-700 transition-colors" style={{ color: 'var(--ink)' }}>
                      {s.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.75 }}>
                      {s.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-4" style={{ color: 'var(--gold)' }}>
                      <span className="section-label">Перейти</span>
                      <Icon name="ArrowRight" size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City image */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden" style={{ height: '320px' }}>
            <img src={CITY_IMG} alt="Астрахань" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end p-8" style={{ background: 'linear-gradient(to top, rgba(28,20,9,0.7) 0%, transparent 60%)' }}>
              <div>
                <p className="font-display text-3xl font-light" style={{ color: 'var(--parchment)' }}>Астрахань</p>
                <p className="font-body text-sm mt-1" style={{ color: 'var(--gold-pale)', opacity: 0.8 }}>Жемчужина Нижней Волги</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
