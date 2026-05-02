import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/f47b0cbf-5863-423f-9bdd-0a77c134de9a.jpg';

const landmarks = [
  {
    number: '01',
    icon: 'Building2',
    category: 'Архитектура',
    title: 'Доходные дома XIX века',
    desc: 'Сохранившиеся особняки купеческой эпохи с характерными для Астрахани элементами восточного декора, арочными окнами и лепными фасадами. Яркие примеры провинциальной эклектики.',
    tag: 'Памятник архитектуры',
  },
  {
    number: '02',
    icon: 'Church',
    category: 'Религия',
    title: 'Православные храмы',
    desc: 'Исторические церкви в районе улицы, возведённые в XVIII–XIX веках. Центры духовной жизни астраханских купцов и мещан, свидетели важнейших городских событий.',
    tag: 'Объект культурного наследия',
  },
  {
    number: '03',
    icon: 'School',
    category: 'Образование',
    title: 'Учебные заведения',
    desc: 'Здания дореволюционных гимназий и советских школ, сформировавших интеллектуальный облик улицы. Многие из них работают по сей день, принимая новые поколения астраханцев.',
    tag: 'Историческое здание',
  },
  {
    number: '04',
    icon: 'Store',
    category: 'Торговля',
    title: 'Торговые ряды и лавки',
    desc: 'Исторически улица была торговой. Купеческие лавки, торговые дома и небольшие магазины — характерная черта дореволюционной застройки. Некоторые помещения сохраняют торговую функцию.',
    tag: 'Купеческое наследие',
  },
  {
    number: '05',
    icon: 'TreePine',
    category: 'Городская среда',
    title: 'Бульвар и озеленение',
    desc: 'Историческое озеленение улицы — часть городского планирования XIX века. Старые деревья и скверы формируют особую атмосферу пешеходного пространства в самом сердце Астрахани.',
    tag: 'Городской ландшафт',
  },
  {
    number: '06',
    icon: 'Milestone',
    category: 'Памятные места',
    title: 'Мемориальные объекты',
    desc: 'Мемориальные доски и памятные знаки на фасадах зданий, посвящённые выдающимся горожанам и историческим событиям, связанным с улицей и городом.',
    tag: 'Историческая память',
  },
];

export default function Landmarks() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Улица Свердлова</p>
          <h1 className="font-display font-light" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--ink)', lineHeight: 1.1 }}>
            Значимые места
          </h1>
          <div className="ornament-line w-48 mx-auto mt-6">
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
          </div>
          <p className="font-body mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>
            Архитектурные памятники, культурные объекты и исторические места улицы
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mb-16 overflow-hidden" style={{ height: '300px' }}>
          <img src={HERO_IMG} alt="Значимые места" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(28,20,9,0.35)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-3xl font-light text-center" style={{ color: 'var(--parchment)' }}>
              Архитектурное наследие<br />
              <em style={{ color: 'var(--gold-light)' }}>улицы Свердлова</em>
            </p>
          </div>
        </div>

        {/* Landmarks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((item) => (
            <div key={item.number} className="museum-card p-6 group">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-4xl font-light" style={{ color: 'var(--divider-color)', lineHeight: 1 }}>{item.number}</span>
                <div className="p-2" style={{ background: 'var(--parchment)', border: '1px solid var(--divider-color)' }}>
                  <Icon name={item.icon} size={18} style={{ color: 'var(--gold)' }} fallback="Building2" />
                </div>
              </div>
              <p className="section-label mb-2" style={{ color: 'var(--sepia)' }}>{item.category}</p>
              <h3 className="font-display text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.title}</h3>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-light)', opacity: 0.75 }}>{item.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1" style={{ background: 'var(--parchment)', border: '1px solid var(--divider-color)' }}>
                <span className="font-body text-xs" style={{ color: 'var(--gold)' }}>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 border" style={{ borderColor: 'var(--divider-color)' }}>
          {[
            { num: '6+', label: 'объектов наследия' },
            { num: 'XIX–XX', label: 'века застройки' },
            { num: '~2 км', label: 'протяжённость' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 text-center"
              style={{
                borderRight: i < 2 ? '1px solid var(--divider-color)' : 'none',
                background: 'var(--parchment-dark)'
              }}
            >
              <p className="font-display text-4xl" style={{ color: 'var(--gold)' }}>{stat.num}</p>
              <p className="section-label mt-2" style={{ color: 'var(--sepia)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
