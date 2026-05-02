import { useState } from 'react';
import Icon from '@/components/ui/icon';

export type ModalType = 'about' | 'support' | 'feedback' | null;

export default function SiteModal({ type, onClose }: { type: ModalType; onClose: () => void }) {
  const [fb, setFb] = useState({ name: '', email: '', message: '' });
  const [fbErrors, setFbErrors] = useState<Partial<typeof fb>>({});
  const [fbState, setFbState] = useState<'idle' | 'sending' | 'done'>('idle');

  if (!type) return null;

  const handleFb = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<typeof fb> = {};
    if (!fb.name.trim()) errs.name = 'Введите имя';
    if (!fb.email.trim() || !/\S+@\S+\.\S+/.test(fb.email)) errs.email = 'Введите корректный email';
    if (!fb.message.trim()) errs.message = 'Введите сообщение';
    if (Object.keys(errs).length) { setFbErrors(errs); return; }
    setFbErrors({});
    setFbState('sending');
    setTimeout(() => setFbState('done'), 1400);
  };

  const inpStyle = (err?: string) => ({
    width: '100%', padding: '9px 12px', background: '#1a1a1a',
    border: `1px solid ${err ? '#c0392b' : 'rgba(255,255,255,0.1)'}`,
    color: '#f0f0f0', fontFamily: 'Golos Text, sans-serif', fontSize: '0.86rem', outline: 'none', borderRadius: 0,
  });

  return (
    <div onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div onClick={e => e.stopPropagation()}
        style={{ background: '#181818', border: '1px solid rgba(74,140,92,0.3)', width: '100%', maxWidth: 620, maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 4, height: 20, background: '#4a8c5c' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {type === 'about' ? 'О проекте' : type === 'support' ? 'Поддержка' : 'Обратная связь'}
            </span>
          </div>
          <button onClick={onClose}
            style={{ width: 30, height: 30, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="X" size={15} style={{ color: '#aaa' }} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '28px 24px' }}>

          {/* О ПРОЕКТЕ */}
          {type === 'about' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, padding: '16px', background: 'rgba(74,140,92,0.08)', border: '1px solid rgba(74,140,92,0.2)' }}>
                <div style={{ width: 44, height: 44, background: '#4a8c5c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="BookOpen" size={22} style={{ color: '#fff' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Историко-культурный портал</p>
                  <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.76rem', color: '#5fa870' }}>Улица Свердлова · г. Астрахань</p>
                </div>
              </div>

              {[
                { icon: 'Target', title: 'Цель проекта', text: 'Портал создан для сохранения и популяризации исторического и культурного наследия улицы Свердлова — одной из старейших и наиболее значимых улиц Астрахани. Мы стремимся сделать историю доступной для каждого жителя и гостя города.' },
                { icon: 'Users', title: 'Для кого', text: 'Проект предназначен для краеведов, историков, студентов, туристов и всех, кто интересуется историей Астрахани. Материалы портала могут использоваться в образовательных и научных целях.' },
                { icon: 'Archive', title: 'Источники', text: 'В основе портала — материалы Астраханского государственного архива, фонды краеведческого музея, публикации местных историков и исследователей, а также документы Кировского района администрации Астрахани.' },
                { icon: 'Landmark', title: 'Что включает портал', text: 'Подробное описание улицы и её маршрута, история переименований и административных изменений, каталог значимых архитектурных объектов с адресами, фотогалерея, географическая информация и карта.' },
              ].map(item => (
                <div key={item.title} style={{ marginBottom: 20, borderLeft: '2px solid rgba(74,140,92,0.35)', paddingLeft: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
                    <Icon name={item.icon} size={14} style={{ color: '#5fa870' }} fallback="Info" />
                    <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#5fa870', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.title}</span>
                  </div>
                  <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.86rem', color: '#999', lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                </div>
              ))}

              <div style={{ marginTop: 24, padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 10, alignItems: 'center' }}>
                <Icon name="MapPin" size={15} style={{ color: '#5fa870', flexShrink: 0 }} />
                <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#666', margin: 0 }}>
                  Администрация Кировского района · г. Астрахань, ул. Свердлова, 1 · <span style={{ color: '#5fa870' }}>414000</span>
                </p>
              </div>
            </div>
          )}

          {/* ПОДДЕРЖКА */}
          {type === 'support' && (
            <div>
              <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.88rem', color: '#999', lineHeight: 1.75, marginBottom: 24 }}>
                Если у вас возникли вопросы, вы обнаружили неточности в материалах или хотите предложить дополнения — мы всегда рады помочь.
              </p>

              {[
                { icon: 'Phone', label: 'Телефон', val: '+7 (8512) 51-00-00', sub: 'Пн–Пт, 9:00–18:00' },
                { icon: 'Mail', label: 'Электронная почта', val: 'info@sverdlova-astrakhan.ru', sub: 'Ответ в течение 1–2 рабочих дней' },
                { icon: 'MapPin', label: 'Адрес', val: 'г. Астрахань, ул. Свердлова, 1', sub: 'Кировский район, каб. 201' },
                { icon: 'Clock', label: 'Режим работы', val: 'Пн–Пт: 9:00–18:00', sub: 'Сб–Вс: выходные' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: 36, height: 36, background: 'rgba(74,140,92,0.12)', border: '1px solid rgba(74,140,92,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={c.icon} size={16} style={{ color: '#5fa870' }} fallback="Mail" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.68rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.88rem', color: '#f0f0f0', fontWeight: 500, marginBottom: 1 }}>{c.val}</p>
                    <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.75rem', color: '#555' }}>{c.sub}</p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 22, padding: '14px 16px', background: 'rgba(74,140,92,0.07)', border: '1px solid rgba(74,140,92,0.2)', display: 'flex', gap: 10 }}>
                <Icon name="Info" size={15} style={{ color: '#5fa870', flexShrink: 0, marginTop: 1 }} />
                <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#777', lineHeight: 1.7, margin: 0 }}>
                  Если вы располагаете историческими фотографиями или документами об улице Свердлова — пожалуйста, поделитесь ими. Все материалы будут добавлены в архив с указанием авторства.
                </p>
              </div>
            </div>
          )}

          {/* ОБРАТНАЯ СВЯЗЬ */}
          {type === 'feedback' && (
            <div>
              {fbState === 'done' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: '32px 0', textAlign: 'center' }}>
                  <div style={{ width: 52, height: 52, background: '#4a8c5c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="CheckCheck" size={26} style={{ color: '#fff' }} />
                  </div>
                  <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Сообщение отправлено</p>
                  <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.86rem', color: '#888', lineHeight: 1.75 }}>
                    Спасибо, <strong style={{ color: '#5fa870' }}>{fb.name}</strong>!<br />
                    Мы ответим на <strong style={{ color: '#5fa870' }}>{fb.email}</strong> в течение 1–2 рабочих дней.
                  </p>
                  <button onClick={() => { setFbState('idle'); setFb({ name: '', email: '', message: '' }); }}
                    style={{ background: 'transparent', color: '#5fa870', border: '1px solid rgba(74,140,92,0.4)', fontFamily: 'Golos Text, sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 20px', cursor: 'pointer', transition: 'background 0.2s' }}>
                    Написать ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFb} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.86rem', color: '#777', lineHeight: 1.7, marginBottom: 4 }}>
                    Напишите нам — мы читаем каждое сообщение и стараемся отвечать оперативно.
                  </p>
                  {(['name', 'email'] as const).map(f => (
                    <div key={f}>
                      <label style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.67rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }}>
                        {f === 'name' ? 'Ваше имя' : 'Email'}
                      </label>
                      <input type={f === 'email' ? 'email' : 'text'} value={fb[f]}
                        onChange={e => { setFb(d => ({ ...d, [f]: e.target.value })); setFbErrors(er => ({ ...er, [f]: undefined })); }}
                        placeholder={f === 'name' ? 'Иван Иванов' : 'example@mail.ru'}
                        style={inpStyle(fbErrors[f])} />
                      {fbErrors[f] && <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.72rem', color: '#e74c3c', marginTop: 3 }}>{fbErrors[f]}</p>}
                    </div>
                  ))}
                  <div>
                    <label style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.67rem', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }}>Сообщение</label>
                    <textarea rows={4} value={fb.message}
                      onChange={e => { setFb(d => ({ ...d, message: e.target.value })); setFbErrors(er => ({ ...er, message: undefined })); }}
                      placeholder="Ваш вопрос, замечание или предложение..."
                      style={{ ...inpStyle(fbErrors.message), resize: 'none' }} />
                    {fbErrors.message && <p style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.72rem', color: '#e74c3c', marginTop: 3 }}>{fbErrors.message}</p>}
                  </div>
                  <button type="submit"
                    style={{ background: '#4a8c5c', color: '#fff', border: 'none', fontFamily: 'Golos Text, sans-serif', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 0', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s' }}>
                    {fbState === 'sending'
                      ? <><Icon name="Loader2" size={15} style={{ animation: 'spin 1s linear infinite', color: '#fff' }} />Отправка...</>
                      : 'Отправить сообщение'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
