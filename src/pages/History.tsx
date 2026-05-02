import Layout from '@/components/Layout';

const LANDMARK_IMG = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/f47b0cbf-5863-423f-9bdd-0a77c134de9a.jpg';

const timeline = [
  {
    year: '1-я пол. XIX в.',
    title: 'Зарождение улицы',
    text: 'Улица возникает как часть регулярной планировки Астрахани, формировавшейся по указам Екатерины II. Первоначально носила другое название и была застроена купеческими особняками и доходными домами. Территория являлась одним из деловых центров города.',
  },
  {
    year: '1860–1900-е',
    title: 'Эпоха расцвета',
    text: 'Время наибольшего расцвета купеческой Астрахани. На улице строятся добротные каменные здания в стиле эклектики и русского классицизма. Торговцы рыбой и персидские купцы обустраивают здесь свои конторы и дома, привнося восточный колорит в архитектуру.',
  },
  {
    year: '1917–1920-е',
    title: 'Революция и переименование',
    text: 'После революции улица получает имя Якова Свердлова — первого председателя ВЦИК. Национализация имущества, переустройство быта и первые советские преобразования меняют облик улицы. Часть зданий отдана под учреждения новой власти.',
  },
  {
    year: '1930–1950-е',
    title: 'Советская реконструкция',
    text: 'Улица претерпевает изменения в духе социалистического строительства. Ряд старых построек сносится или перестраивается. Появляются здания в стиле советского конструктивизма и неоклассики. Улица остаётся одной из центральных городских магистралей.',
  },
  {
    year: '1960–1990-е',
    title: 'Послевоенные десятилетия',
    text: 'Послевоенное восстановление и хрущёвские преобразования вносят новые черты в облик улицы. Рядом с историческими зданиями появляются типовые постройки. Вместе с тем сохраняется историческое ядро, которое со временем приобретёт статус памятника.',
  },
  {
    year: 'Наши дни',
    title: 'Современность',
    text: 'Сегодня улица Свердлова — часть исторического центра Астрахани. Ряд зданий имеет охранный статус памятников архитектуры регионального значения. Улица сохраняет живую связь с историческим прошлым города на берегах Волги.',
  },
];

export default function History() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Историко-культурный портал</p>
          <h1 className="font-display font-light" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--ink)', lineHeight: 1.1 }}>
            История улицы
          </h1>
          <div className="ornament-line w-48 mx-auto mt-6">
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
          </div>
          <p className="font-body mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>
            Летопись одной из старейших улиц Астрахани — от купеческих особняков XIX века до наших дней
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mb-16 overflow-hidden" style={{ height: '360px' }}>
          <img src={LANDMARK_IMG} alt="История улицы Свердлова" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(28,20,9,0.6) 0%, transparent 60%)' }} />
          <div className="absolute left-8 bottom-8">
            <p className="font-display text-2xl font-light" style={{ color: 'var(--parchment)' }}>Астрахань историческая</p>
            <p className="section-label mt-1" style={{ color: 'var(--gold-pale)' }}>XIX–XXI вв.</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="ornament-line mb-12">
          <span className="section-label">Хронология</span>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[120px] top-0 bottom-0 w-px hidden md:block" style={{ background: 'var(--divider-color)' }} />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10">
                {/* Year */}
                <div className="md:w-[120px] md:text-right flex-shrink-0">
                  <span className="font-display text-sm font-semibold" style={{ color: 'var(--gold)' }}>{item.year}</span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-start justify-center w-6 flex-shrink-0 relative" style={{ marginTop: '4px' }}>
                  <div className="w-3 h-3 rounded-none rotate-45" style={{ background: 'var(--gold)', border: '1px solid var(--gold)' }} />
                </div>

                {/* Content */}
                <div className="flex-1 museum-card p-6">
                  <h3 className="font-display text-xl mb-2" style={{ color: 'var(--ink)' }}>{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-8 text-center" style={{ background: 'var(--parchment-dark)', border: '1px solid var(--divider-color)' }}>
          <p className="font-display italic text-xl" style={{ color: 'var(--ink-light)' }}>
            «Улица Свердлова — живой музей под открытым небом, где каждое здание — страница истории»
          </p>
          <p className="section-label mt-4" style={{ color: 'var(--sepia)' }}>Астрахань, центральная часть города</p>
        </div>
      </div>
    </Layout>
  );
}
