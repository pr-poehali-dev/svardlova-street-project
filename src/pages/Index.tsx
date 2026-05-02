import { useState } from 'react';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/street/SiteHeader';
import SiteFooter from '@/components/street/SiteFooter';
import GallerySlider from '@/components/street/GallerySlider';
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
  { num: 'Дом 28/7', title: 'ЦУМ', desc: 'Центральный универсальный магазин — главный торговый объект улицы советской эпохи.' },
  { num: 'Дом 52', title: 'Оранжерея Г.Е. Нюнина', desc: 'Архитектор Н.Н. Мидовидов. Уникальный образец провинциального модерна начала XX века.' },
  { num: 'Дом 53', title: 'Дом-музей Велимира Хлебникова', desc: 'Квартира родителей поэта в доходном доме. Сегодня — литературный музей.' },
  { num: 'Дом 55', title: 'Гостиный двор Демидова', desc: 'Памятник архитектуры федерального значения. Комплекс сооружений XVIII в., начатый в 1730-х гг. Тихоном Лошкарёвым.' },
  { num: 'Дом 60', title: 'Усадьба Николаева', desc: 'Купеческая усадьба XIX века с характерными для Астрахани архитектурными деталями.' },
  { num: 'Дом 68', title: 'Дом-музей Б.М. Кустодиева', desc: 'Дом, связанный с именем выдающегося русского художника Бориса Кустодиева.' },
];

const galleryImgs   = [IMG_HERO, IMG_DEMIDOV, IMG_KHLEBNIKOV, IMG_STREET1, IMG_FACADE, IMG_SVERDLOV];
const galleryTitles = ['Улица Свердлова', 'Гостиный двор Демидова', 'Дом Хлебникова', 'Исторический вид', 'Фасады XIX века', 'Я.М. Свердлов'];
const landmarkImgs  = [IMG_DEMIDOV, IMG_KHLEBNIKOV, IMG_FACADE, IMG_STREET1];

const geoInfo = [
  ['Тип', 'Улица'],
  ['Название', 'Свердлова'],
  ['Город', 'Астрахань'],
  ['Районы', 'Кировский'],
  ['Почтовые индексы', '414000'],
  ['Протяжённость', '2409 метров'],
  ['Кол-во строений', '120'],
  ['Перекрёстки', '25'],
];

const S = {
  sectionTag: { fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#5fa870', fontFamily: 'Golos Text, sans-serif' },
  h2: { fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 600, color: '#fff', marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.02em', lineHeight: 1.15 },
  divider: { width: 48, height: 3, background: '#4a8c5c', marginBottom: 40 },
  body: { fontFamily: 'Golos Text, sans-serif', fontSize: '0.92rem', lineHeight: 1.85, color: '#aaaaaa' },
};

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

  const inp = (hasError?: string) => ({
    width: '100%', padding: '10px 14px', background: '#1e1e1e',
    border: `1px solid ${hasError ? '#c0392b' : 'rgba(255,255,255,0.08)'}`,
    color: '#f0f0f0', fontFamily: 'Golos Text, sans-serif', fontSize: '0.88rem', outline: 'none', borderRadius: 0,
  });

  return (
    <div style={{ background: '#141414', color: '#f0f0f0', minHeight: '100vh' }}>

      <SiteHeader onOpenModal={setModal} />

      {/* HERO */}
      <section id="about" style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${IMG_HERO})`, backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'brightness(0.3)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '72px 24px 64px' }}>
          <p style={{ ...S.sectionTag, marginBottom: 10 }}>Историко-культурный портал</p>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 600, lineHeight: 1, color: '#fff', marginBottom: 28, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            УЛ. СВЕРДЛОВА
          </h1>
          <div style={{ maxWidth: 660 }}>
            <p style={{ ...S.body, color: 'rgba(240,240,240,0.8)', marginBottom: 14 }}>
              Улица Свердлова — одна из основных улиц Астрахани, пересекающая практически весь центральный остров с запада на восток и затем с севера на юг, проходя через исторические районы Коса, Белый город и Большие Исады. Начинается от улицы Максима Горького у набережной Волги, пересекает улицы Урицкого, Фиолетова, Ульяновых и Щепной переулок на Косе, после пересечения Адмиралтейской переходит в Белый город.
            </p>
            <p style={{ ...S.body, color: 'rgba(240,240,240,0.8)', marginBottom: 14 }}>
              Идёт параллельно Советской улице и реке Кутум через улицы: Кирова, Володарского, Коммунистическую, Шелгунова, Михаила Аладьина и Калинина. Далее поворачивает на юго-восток, входя в исторический район рынка Большие Исады, пересекает Симбирскую, Победы, Ногина, Базарный переулок, улицы: Чалабяна, 3-ю Интернациональную, Маяковского и Бабушкина.
            </p>
            <p style={{ ...S.body, color: 'rgba(240,240,240,0.8)' }}>
              Заканчивается Ивановским мостом через Канал имени Варвация.
            </p>
          </div>
          <div style={{ position: 'absolute', right: 24, bottom: 0, padding: '14px 18px', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(74,140,92,0.45)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#5fa870', textTransform: 'uppercase' }}>Улица</span>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1rem', letterSpacing: '0.14em', color: '#fff', textTransform: 'uppercase', fontWeight: 600 }}>Свердлова</span>
          </div>
        </div>
      </section>

      {/* ЗНАЧИМЫЕ МЕСТА */}
      <section id="landmarks" style={{ background: '#181818', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={S.h2}>Значимые места<br /><span style={{ color: '#5fa870' }}>ул. Свердлова</span></h2>
          <div style={S.divider} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {landmarks.map(l => (
                <div key={l.num} style={{ borderLeft: '2px solid rgba(74,140,92,0.4)', paddingLeft: 16 }}>
                  <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.72rem', color: '#5fa870', letterSpacing: '0.06em' }}>{l.num}</span>
                  <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.9rem', color: '#f0f0f0', fontWeight: 600, margin: '2px 0 3px' }}>— {l.title}</p>
                  <p style={{ ...S.body, fontSize: '0.82rem', color: '#888', lineHeight: 1.6, margin: 0 }}>{l.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
              {landmarkImgs.map((img, i) => (
                <div key={i} onClick={() => setLightbox(img)}
                  style={{ aspectRatio: '4/3', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', top: 6, right: 6, padding: '3px 5px', background: 'rgba(0,0,0,0.55)' }}>
                    <Icon name="Expand" size={13} style={{ color: 'rgba(255,255,255,0.7)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GallerySlider images={galleryImgs} titles={galleryTitles} onOpenLightbox={setLightbox} />

      {/* ИСТОРИЯ */}
      <section id="history" style={{ background: '#181818', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={S.h2}>История улицы<br /><span style={{ color: '#5fa870' }}>Свердлова</span></h2>
          <div style={S.divider} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 40, alignItems: 'start' }}>
            <div>
              <p style={{ ...S.body, marginBottom: 16 }}>
                До 1837 года на месте современной улицы располагались Площадная и Куренная улицы, которые затем были переименованы в Большую Демидовскую и Плотиную. Было застроено продолжение улицы, получившее название Биржевой. Постановлением Пленума горсовета Астраханской Губернии 30 декабря 1920 года Большая Демидовская была объединена с Биржевой и частью Плотинной улицы до Ивановского моста и получила современное название (улица Свердлова) в честь Якова Михайловича Свердлова, российского революционера, советского политического и государственного деятеля.
              </p>
              <p style={{ ...S.body, marginBottom: 16 }}>
                В 1924 году Плотинная улица за Ивановским мостом была переименована в Киевскую, а 18 ноября 1957 года Киевская улица была присоединена к улице Свердлова.
              </p>
              <p style={{ ...S.body, marginBottom: 16 }}>
                Улица сохранила застройку рубежа XIX–XX веков и ряд купеческих особняков, включая особняк Плотникова, в котором находится картинная галерея собирателя живописи Догадина, чей особняк находится рядом на набережной реки Кутум, дом 39.
              </p>
              <p style={S.body}>С 1900 по 2005 год по улице было организовано трамвайное движение.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div onClick={() => setLightbox(IMG_SVERDLOV)} style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative', aspectRatio: '3/4' }}>
                <img src={IMG_SVERDLOV} alt="Я.М. Свердлов" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', transition: 'transform 0.35s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 10px', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                  <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.73rem', color: '#bbb', margin: 0 }}>Я.М. Свердлов</p>
                </div>
                <div style={{ position: 'absolute', top: 6, right: 6, padding: '3px 5px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(74,140,92,0.5)' }}>
                  <Icon name="Expand" size={12} style={{ color: '#5fa870' }} />
                </div>
              </div>
              <div onClick={() => setLightbox(IMG_STREET1)} style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative', aspectRatio: '4/3' }}>
                <img src={IMG_STREET1} alt="Улица" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(25%) brightness(0.75)', transition: 'transform 0.35s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: 6, right: 6, padding: '3px 5px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(74,140,92,0.5)' }}>
                  <Icon name="Expand" size={12} style={{ color: '#5fa870' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ГЕОГРАФИЯ */}
      <section id="geography" style={{ background: '#141414', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={S.h2}>География улицы<br /><span style={{ color: '#5fa870' }}>Свердлова</span></h2>
          <div style={S.divider} />
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', border: '1px solid rgba(74,140,92,0.4)', padding: '5px 14px', background: 'rgba(74,140,92,0.1)', marginBottom: 14 }}>
                <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.72rem', color: '#5fa870', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Краткая информация</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {geoInfo.map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <td style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#666', padding: '9px 0', paddingRight: 14, whiteSpace: 'nowrap' }}>{k}</td>
                      <td style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#f0f0f0', padding: '9px 0', fontWeight: 500 }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div style={{ width: '100%', height: 340, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', position: 'relative' }}>
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=47.99,46.33,48.06,46.36&layer=mapnik"
                  width="100%" height="100%"
                  style={{ border: 0, filter: 'hue-rotate(55deg) saturate(0.55) brightness(0.8)' }}
                  title="Улица Свердлова на карте"
                />
              </div>
              <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.73rem', color: '#555', marginTop: 7, textAlign: 'center' }}>Улица Свердлова на карте</p>
            </div>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" style={{ background: '#0e0e0e', padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <p style={{ ...S.sectionTag, marginBottom: 8 }}>Обратная связь</p>
          <h2 style={{ ...S.h2, fontSize: 'clamp(1.5rem,3vw,2rem)', marginBottom: 6 }}>Контакты</h2>
          <div style={{ width: 36, height: 3, background: '#4a8c5c', marginBottom: 32 }} />

          {formState === 'success' ? (
            <div style={{ padding: '44px 32px', border: '1px solid rgba(74,140,92,0.4)', background: 'rgba(74,140,92,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, background: '#4a8c5c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="CheckCheck" size={26} style={{ color: '#fff' }} />
              </div>
              <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.3rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Сообщение отправлено</p>
              <p style={{ ...S.body, textAlign: 'center', lineHeight: 1.8 }}>
                Благодарим за обращение, <strong style={{ color: '#5fa870' }}>{formData.name}</strong>!<br />
                Мы ответим на <strong style={{ color: '#5fa870' }}>{formData.email}</strong><br />
                в течение 1–2 рабочих дней.
              </p>
              <button onClick={() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); }} className="ghost-green">Написать ещё</button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {(['name', 'email'] as const).map(f => (
                <div key={f}>
                  <label style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.68rem', color: '#666', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }}>
                    {f === 'name' ? 'Ваше имя' : 'Email'}
                  </label>
                  <input type={f === 'email' ? 'email' : 'text'} value={formData[f]}
                    onChange={e => { setFormData(d => ({ ...d, [f]: e.target.value })); setFormErrors(er => ({ ...er, [f]: undefined })); }}
                    placeholder={f === 'name' ? 'Иван Иванов' : 'example@mail.ru'}
                    style={inp(formErrors[f])}
                  />
                  {formErrors[f] && <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.73rem', color: '#e74c3c', marginTop: 4 }}>{formErrors[f]}</p>}
                </div>
              ))}
              <div>
                <label style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.68rem', color: '#666', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }}>Сообщение</label>
                <textarea rows={4} value={formData.message}
                  onChange={e => { setFormData(d => ({ ...d, message: e.target.value })); setFormErrors(er => ({ ...er, message: undefined })); }}
                  placeholder="Ваш вопрос или предложение..."
                  style={{ ...inp(formErrors.message), resize: 'none' }}
                />
                {formErrors.message && <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.73rem', color: '#e74c3c', marginTop: 4 }}>{formErrors.message}</p>}
              </div>
              <button type="submit" className="green-btn" style={{ width: '100%', justifyContent: 'center', padding: '12px 0', fontSize: '0.82rem', border: 'none' }}>
                {formState === 'sending' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon name="Loader2" size={15} style={{ animation: 'spin 1s linear infinite', color: '#fff' }} />
                    Отправка...
                  </span>
                ) : 'Отправить сообщение'}
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
