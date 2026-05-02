import { useState } from 'react';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/street/SiteHeader';
import SiteFooter from '@/components/street/SiteFooter';
import SiteModal, { type ModalType } from '@/components/street/SiteModal';

/* ── IMAGES ── */
const IMG_HERO       = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/d0461e51-3754-4912-a7b7-e5af6375e271.jpg';
const IMG_DEMIDOV    = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/ae8a7b7a-8b86-4f16-9e70-e01c106e5ca1.jpg';
const IMG_KHLEBNIKOV = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/2bf43ee5-7557-4a46-b160-127bf45204a0.jpg';
const IMG_STREET1    = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/8b875845-d5b1-4b5e-9ef3-e8e148660899.jpg';
const IMG_SVERDLOV   = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/c539a9e1-1e93-4144-a75b-7cf2fc4ab60a.jpg';
const IMG_FACADE     = 'https://cdn.poehali.dev/projects/ca77e1f0-9369-4d5b-a066-1f0662d4b88d/files/f26b3d8d-fa57-45de-8fd8-b28c587cc355.jpg';

/* ── DATA ── */
const landmarks = [
  {
    num: '– Дом 28/7',
    text: '— ЦУМ (Центральный универсальный магазин)',
  },
  {
    num: '– Дом 52',
    text: '— оранжерея купца Г.Е. Нюнина (арх. Н.Н. Мидовидов)',
  },
  {
    num: '– Дом 53',
    text: '— дом-музей Велимира Хлебникова в квартире его родителей в доходном доме Поляковых (1909 г.)',
  },
  {
    num: '– Дом 55',
    text: '— гостиный двор, памятник архитектуры и объект культурного наследия федерального значения «Комплекс сооружений дома Демидова, начатый в XVIII в., г. Астрахань, ул. Свердлова, 55: здание конторы, служебное здание, склад, склад», начатый в 1730-х годах Большой Демидовской, вдовой его сына, Ильи Тихоновича Лошкарёва. Здание выполнено в виде каре с двухъярусной галереей вдоль дворового фасада.',
  },
  {
    num: '– Дом 60',
    text: '— усадьба Николаева',
  },
  {
    num: '– Дом 68',
    text: '— Дом-музей В.М. Кустодиева',
  },
];

const galleryImgs   = [IMG_HERO, IMG_DEMIDOV, IMG_KHLEBNIKOV, IMG_STREET1, IMG_FACADE, IMG_SVERDLOV];
const galleryTitles = ['Улица Свердлова', 'Гостиный двор Демидова', 'Дом Хлебникова', 'Исторический вид', 'Фасады XIX века', 'Я.М. Свердлов'];
const landmarkImgs  = [IMG_DEMIDOV, IMG_KHLEBNIKOV, IMG_FACADE, IMG_STREET1];

const geoInfo = [
  ['Тип', 'Улица'],
  ['Название', 'Свердлова'],
  ['Город', 'Астрахань'],
  ['Районы', 'Кировский'],
  ['Почтовые', '414000'],
  ['Протяжённость', '2409 метров'],
  ['Кол-во строений', '120'],
  ['Перекрёстки', '25'],
];

const txt = { fontFamily: 'Golos Text, sans-serif' };
const osw = { fontFamily: 'Oswald, sans-serif' };

/* ── GALLERY SLIDER (inline, needs local state) ── */
function GallerySlider({ images, titles, onOpen }: { images: string[]; titles: string[]; onOpen: (s: string) => void }) {
  const [idx, setIdx] = useState(0);
  const max = images.length - 3;
  return (
    <section id="gallery" style={{ background: '#1a1a1a' }}>
      {/* Dark header band — full width */}
      <div style={{ background: '#111', padding: '32px 48px 28px' }}>
        <h2 style={{ ...osw, fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, margin: 0 }}>
          Галерея улицы<br />Свердлова
        </h2>
      </div>

      {/* Slider */}
      <div style={{ position: 'relative', background: '#1a1a1a', paddingBottom: 24 }}>
        {/* Left arrow */}
        <button
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          disabled={idx === 0}
          style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-60%)', zIndex: 10, width: 44, height: 44, borderRadius: '50%', background: 'rgba(30,30,30,0.92)', border: '2px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: idx === 0 ? 'default' : 'pointer', opacity: idx === 0 ? 0.3 : 1, transition: 'opacity 0.2s' }}
        >
          <Icon name="ChevronLeft" size={22} style={{ color: '#fff' }} />
        </button>

        <div style={{ overflow: 'hidden', margin: '0 64px' }}>
          <div style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(calc(-${idx} * (33.333% + 4px)))`, gap: 4 }}>
            {images.map((img, i) => (
              <div key={i} onClick={() => onOpen(img)}
                style={{ flex: '0 0 calc(33.333% - 3px)', aspectRatio: '4/3', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                <img src={img} alt={titles[i]}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setIdx(i => Math.min(max, i + 1))}
          disabled={idx >= max}
          style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-60%)', zIndex: 10, width: 44, height: 44, borderRadius: '50%', background: 'rgba(30,30,30,0.92)', border: '2px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: idx >= max ? 'default' : 'pointer', opacity: idx >= max ? 0.3 : 1, transition: 'opacity 0.2s' }}
        >
          <Icon name="ChevronRight" size={22} style={{ color: '#fff' }} />
        </button>
      </div>
    </section>
  );
}

/* ── MAIN PAGE ── */
export default function Index() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalType>(null);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Partial<typeof formData>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<typeof formData> = {};
    if (!formData.name.trim()) errs.name = 'Введите имя';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Введите корректный email';
    if (!formData.message.trim()) errs.message = 'Введите сообщение';
    if (Object.keys(errs).length > 0) { setFormErrors(errs); return; }
    setFormErrors({});
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1400);
  };

  const inp = (err?: string) => ({
    width: '100%', padding: '9px 12px', background: '#1e1e1e',
    border: `1px solid ${err ? '#c0392b' : 'rgba(255,255,255,0.1)'}`,
    color: '#f0f0f0', ...txt, fontSize: '0.88rem', outline: 'none', borderRadius: 0,
  });

  return (
    <div style={{ background: '#141414', color: '#f0f0f0', minHeight: '100vh' }}>

      <SiteHeader onOpenModal={setModal} />

      {/* ── HERO ── */}
      <section id="about" style={{ position: 'relative', overflow: 'hidden', minHeight: 520 }}>
        {/* BG photo full width */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${IMG_HERO})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', filter: 'brightness(0.32)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto', padding: '60px 32px 72px', textAlign: 'center' }}>
          <h1 style={{ ...osw, fontSize: 'clamp(2.4rem,6vw,4rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 24, lineHeight: 1 }}>
            УЛ. СВЕРДЛОВА
          </h1>
          <p style={{ ...txt, fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(230,230,230,0.82)', marginBottom: 10 }}>
            Улица Свердлова — одна из основных улиц Астрахани, пересекающая практически весь центральный остров с запада на восток и затем с севера на юг, проходя через исторические районы Коса, Белый город и Большие Исады. Начинается от улицы Максима Горького у набережной Волги, пересекает улицы Урицкого, Фиолетова, Ульяновых и Щепной переулок на Косе.
          </p>
          <p style={{ ...txt, fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(230,230,230,0.82)', marginBottom: 10 }}>
            После пересечения Адмиралтейской переходит в Белый город, где идёт параллельно Советской улице и реке Кутум через улицы: Кирова, Володарского, Коммунистическую, Шелгунова, Михаила Аладьина и Калинина.
          </p>
          <p style={{ ...txt, fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(230,230,230,0.82)', marginBottom: 10 }}>
            Далее поворачивает на юго-восток, входя в исторический район рынка Большие Исады, пересекает Симбирскую, Победы, Ногина, Базарный переулок, улицы: Чалабяна, 3-ю Интернациональную, Маяковского и Бабушкина. Заканчивается Ивановским мостом через Канал имени Варвация.
          </p>
        </div>

        {/* Badge bottom-right */}
        <div style={{ position: 'absolute', right: 32, bottom: 20, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <span style={{ ...osw, fontSize: '0.55rem', letterSpacing: '0.22em', color: '#5fa870', textTransform: 'uppercase' }}>Улица</span>
          <span style={{ ...osw, fontSize: '0.85rem', letterSpacing: '0.18em', color: '#fff', textTransform: 'uppercase', fontWeight: 600 }}>Свердлова</span>
        </div>
      </section>

      {/* ── ЗНАЧИМЫЕ МЕСТА ── */}
      <section id="landmarks" style={{ background: '#f0ede8' }}>
        {/* Section title band */}
        <div style={{ background: '#f0ede8', padding: '44px 48px 0' }}>
          <h2 style={{ ...osw, fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, margin: 0 }}>
            Значимые места<br />ул. Свердлова
          </h2>
        </div>

        <div style={{ padding: '32px 48px 52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Text list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {landmarks.map((l, i) => (
              <p key={i} style={{ ...txt, fontSize: '0.88rem', color: '#222', lineHeight: 1.7, margin: 0 }}>
                <span style={{ fontWeight: 600 }}>{l.num} </span>{l.text}
              </p>
            ))}
          </div>

          {/* 2x2 photo grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            {landmarkImgs.map((img, i) => (
              <div key={i} onClick={() => setLightbox(img)}
                style={{ aspectRatio: '4/3', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                <img src={img} alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.35s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Expand icon on last image */}
                {i === 3 && (
                  <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.55)', padding: '4px 6px' }}>
                    <Icon name="Expand" size={16} style={{ color: '#fff' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ГАЛЕРЕЯ ── */}
      <GallerySlider images={galleryImgs} titles={galleryTitles} onOpen={setLightbox} />

      {/* ── ИСТОРИЯ ── */}
      <section id="history" style={{ background: '#f0ede8' }}>
        {/* Full-width dark title band */}
        <div style={{ background: '#2a2a2a', padding: '32px 48px' }}>
          <h2 style={{ ...osw, fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, margin: 0 }}>
            История улицы<br />Свердлова
          </h2>
        </div>

        <div style={{ padding: '40px 48px 52px', display: 'grid', gridTemplateColumns: '1fr 240px', gap: 40, alignItems: 'start', background: '#f0ede8' }}>
          {/* Text */}
          <div>
            <p style={{ ...txt, fontSize: '0.88rem', color: '#333', lineHeight: 1.85, marginBottom: 16 }}>
              До 1837 года на месте современной улицы располагались Площадная и Куренная улицы, которые затем были переименованы в Большую Демидовскую и Плотиную. Было застроено продолжение улицы, получившее название Биржевой. Постановлением Пленума горсовета Астраханской Губернии 30 декабря 1920 года Большая Демидовская была объединена с Биржевой и частью Плотинной улицы до Ивановского моста и получила современное название (улица Свердлова) в честь Якова Михайловича Свердлова, российского революционера, советского политического и государственного деятеля. В 1924 году Плотинная улица за Ивановским мостом была переименована в Киевскую, а 18 ноября 1957 года Киевская улица была присоединена к улице Свердлова.
            </p>
            <p style={{ ...txt, fontSize: '0.88rem', color: '#333', lineHeight: 1.85, marginBottom: 16 }}>
              Улица сохранила застройку рубежа XIX–XX веков и ряд купеческих особняков, включая особняк Плотникова, в котором находится картинная галерея собирателя живописи Догадина, чей особняк находится рядом на набережной реки Кутум, дом 39.
            </p>
            <p style={{ ...txt, fontSize: '0.88rem', color: '#333', lineHeight: 1.85 }}>
              С 1900 по 2005 год по улице было организовано трамвайное движение.
            </p>
          </div>

          {/* Two stacked photos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div onClick={() => setLightbox(IMG_SVERDLOV)}
              style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative', aspectRatio: '3/4' }}>
              <img src={IMG_SVERDLOV} alt="Я.М. Свердлов"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', transition: 'transform 0.35s', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,0.55)', padding: '3px 5px' }}>
                <Icon name="Expand" size={13} style={{ color: '#fff' }} />
              </div>
            </div>
            <div onClick={() => setLightbox(IMG_STREET1)}
              style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative', aspectRatio: '4/3' }}>
              <img src={IMG_STREET1} alt="Улица"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(20%) brightness(0.8)', transition: 'transform 0.35s', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,0.55)', padding: '3px 5px' }}>
                <Icon name="Expand" size={13} style={{ color: '#fff' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ГЕОГРАФИЯ ── */}
      <section id="geography" style={{ background: '#f0ede8' }}>
        {/* Full-width dark title band */}
        <div style={{ background: '#2a2a2a', padding: '32px 48px' }}>
          <h2 style={{ ...osw, fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, margin: 0 }}>
            География улицы<br />Свердлова
          </h2>
        </div>

        <div style={{ padding: '36px 48px 52px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 36, alignItems: 'start', background: '#f0ede8' }}>
          {/* Info table */}
          <div>
            <div style={{ display: 'inline-block', border: '1px solid #bbb', padding: '5px 14px', marginBottom: 14, background: '#e8e4dc' }}>
              <span style={{ ...txt, fontSize: '0.72rem', color: '#444', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Краткая информация</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {geoInfo.map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <td style={{ ...txt, fontSize: '0.8rem', color: '#666', padding: '8px 0', paddingRight: 12, whiteSpace: 'nowrap' }}>{k}</td>
                    <td style={{ ...txt, fontSize: '0.8rem', color: '#111', padding: '8px 0', fontWeight: 500 }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Map */}
          <div>
            <div style={{ width: '100%', height: 320, overflow: 'hidden', border: '1px solid #ccc', position: 'relative' }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=47.99,46.33,48.06,46.36&layer=mapnik"
                width="100%" height="100%"
                style={{ border: 0 }}
                title="Улица Свердлова на карте"
              />
            </div>
            <p style={{ ...txt, fontSize: '0.72rem', color: '#888', marginTop: 6, textAlign: 'center' }}>Улица Свердлова на карте</p>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" style={{ background: '#141414', padding: '60px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ ...osw, fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Контакты</h2>
          <div style={{ width: 36, height: 3, background: '#4a8c5c', marginBottom: 28 }} />

          {formState === 'success' ? (
            <div style={{ padding: '40px 28px', border: '1px solid rgba(74,140,92,0.4)', background: 'rgba(74,140,92,0.07)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center' }}>
              <div style={{ width: 50, height: 50, background: '#4a8c5c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="CheckCheck" size={24} style={{ color: '#fff' }} />
              </div>
              <p style={{ ...osw, fontSize: '1.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Сообщение отправлено</p>
              <p style={{ ...txt, fontSize: '0.88rem', color: '#aaa', lineHeight: 1.75, textAlign: 'center' }}>
                Благодарим за обращение, <strong style={{ color: '#5fa870' }}>{formData.name}</strong>!<br />
                Мы ответим на <strong style={{ color: '#5fa870' }}>{formData.email}</strong><br />
                в течение 1–2 рабочих дней.
              </p>
              <button onClick={() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); }}
                style={{ background: 'transparent', color: '#5fa870', border: '1px solid rgba(74,140,92,0.4)', ...txt, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 20px', cursor: 'pointer' }}>
                Написать ещё
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {(['name', 'email'] as const).map(f => (
                <div key={f}>
                  <label style={{ ...txt, fontSize: '0.67rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }}>
                    {f === 'name' ? 'Ваше имя' : 'Email'}
                  </label>
                  <input type={f === 'email' ? 'email' : 'text'} value={formData[f]}
                    onChange={e => { setFormData(d => ({ ...d, [f]: e.target.value })); setFormErrors(er => ({ ...er, [f]: undefined })); }}
                    placeholder={f === 'name' ? 'Иван Иванов' : 'example@mail.ru'}
                    style={inp(formErrors[f])} />
                  {formErrors[f] && <p style={{ ...txt, fontSize: '0.72rem', color: '#e74c3c', marginTop: 3 }}>{formErrors[f]}</p>}
                </div>
              ))}
              <div>
                <label style={{ ...txt, fontSize: '0.67rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }}>Сообщение</label>
                <textarea rows={4} value={formData.message}
                  onChange={e => { setFormData(d => ({ ...d, message: e.target.value })); setFormErrors(er => ({ ...er, message: undefined })); }}
                  placeholder="Ваш вопрос или предложение..."
                  style={{ ...inp(formErrors.message), resize: 'none' }} />
                {formErrors.message && <p style={{ ...txt, fontSize: '0.72rem', color: '#e74c3c', marginTop: 3 }}>{formErrors.message}</p>}
              </div>
              <button type="submit"
                style={{ background: '#4a8c5c', color: '#fff', border: 'none', ...txt, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 0', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#5fa870')}
                onMouseLeave={e => (e.currentTarget.style.background = '#4a8c5c')}
              >
                {formState === 'sending'
                  ? <><Icon name="Loader2" size={15} style={{ animation: 'spin 1s linear infinite', color: '#fff' }} />Отправка...</>
                  : 'Отправить сообщение'}
              </button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter onOpenModal={setModal} />
      <SiteModal type={modal} onClose={() => setModal(null)} />

      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.93)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: 900, width: '100%' }}>
            <img src={lightbox} alt="" style={{ width: '100%', maxHeight: '82vh', objectFit: 'contain', display: 'block' }} />
            <button onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: -12, right: -12, width: 34, height: 34, background: '#4a8c5c', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="X" size={16} style={{ color: '#fff' }} />
            </button>
          </div>
        </div>
      )}

      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
