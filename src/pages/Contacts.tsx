import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'MapPin', label: 'Адрес', value: 'ул. Свердлова, г. Астрахань, 414000' },
  { icon: 'Mail', label: 'Электронная почта', value: 'info@sverdlova-astr.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (8512) 000-000' },
  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 9:00–18:00' },
];

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Историческая информация', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Введите ваше имя';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Введите корректный email';
    if (!form.message.trim()) e.message = 'Введите текст сообщения';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setErrors({});
    setState('sending');
    setTimeout(() => setState('success'), 1400);
  };

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }));
  };

  const inputStyle = (hasError?: string) => ({
    background: 'var(--parchment-dark)',
    border: `1px solid ${hasError ? '#c0392b' : 'var(--divider-color)'}`,
    color: 'var(--ink)',
    borderRadius: 0,
    width: '100%',
  });

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Связь с нами</p>
          <h1 className="font-display font-light" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--ink)', lineHeight: 1.1 }}>
            Контакты
          </h1>
          <div className="ornament-line w-48 mx-auto mt-6">
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
          </div>
          <p className="font-body mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>
            Свяжитесь с нами по вопросам истории улицы, сотрудничества или добавления материалов в архив
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <div className="ornament-line mb-8">
              <span className="section-label">Наши контакты</span>
            </div>
            <div className="flex flex-col gap-4">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-5 museum-card">
                  <div className="p-2.5 flex-shrink-0" style={{ background: 'var(--parchment)', border: '1px solid var(--divider-color)' }}>
                    <Icon name={c.icon} size={18} style={{ color: 'var(--gold)' }} fallback="Mail" />
                  </div>
                  <div>
                    <p className="section-label mb-1">{c.label}</p>
                    <p className="font-body text-sm" style={{ color: 'var(--ink)' }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6" style={{ background: 'var(--parchment-dark)', border: '1px solid var(--divider-color)' }}>
              <p className="font-display text-xl mb-3" style={{ color: 'var(--ink)' }}>О портале</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.8 }}>
                Историко-культурный портал «Улица Свердлова» создан с целью сохранения и популяризации исторического наследия одной из старейших улиц Астрахани. Мы приглашаем краеведов, историков и горожан к сотрудничеству.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="ornament-line mb-8">
              <span className="section-label">Написать нам</span>
            </div>

            {/* Success state */}
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center p-10 gap-5" style={{ border: '1px solid var(--divider-color)', background: 'var(--parchment-dark)', minHeight: '360px' }}>
                <div className="p-4" style={{ background: 'var(--parchment)', border: '1px solid var(--gold)' }}>
                  <Icon name="CheckCheck" size={32} style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <p className="font-display text-2xl" style={{ color: 'var(--ink)' }}>Сообщение отправлено</p>
                  <p className="font-body text-sm mt-3 leading-relaxed" style={{ color: 'var(--ink-light)', opacity: 0.75 }}>
                    Благодарим за обращение, {form.name}!<br />
                    Мы ответим на адрес <strong>{form.email}</strong><br />
                    в течение 1–2 рабочих дней.
                  </p>
                </div>
                <button
                  onClick={() => { setState('idle'); setForm({ name: '', email: '', subject: 'Историческая информация', message: '' }); }}
                  className="ghost-btn mt-2"
                >
                  Отправить ещё одно
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="section-label block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Иван Иванов"
                    className="px-4 py-3 font-body text-sm outline-none transition-all"
                    style={inputStyle(errors.name)}
                  />
                  {errors.name && <p className="font-body text-xs mt-1" style={{ color: '#c0392b' }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="section-label block mb-2">Электронная почта</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="example@mail.ru"
                    className="px-4 py-3 font-body text-sm outline-none transition-all"
                    style={inputStyle(errors.email)}
                  />
                  {errors.email && <p className="font-body text-xs mt-1" style={{ color: '#c0392b' }}>{errors.email}</p>}
                </div>
                <div>
                  <label className="section-label block mb-2">Тема обращения</label>
                  <select
                    value={form.subject}
                    onChange={handleChange('subject')}
                    className="px-4 py-3 font-body text-sm outline-none transition-all"
                    style={inputStyle()}
                  >
                    <option>Историческая информация</option>
                    <option>Добавление материалов</option>
                    <option>Сотрудничество</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="section-label block mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Ваше сообщение..."
                    className="px-4 py-3 font-body text-sm outline-none transition-all resize-none"
                    style={inputStyle(errors.message)}
                  />
                  {errors.message && <p className="font-body text-xs mt-1" style={{ color: '#c0392b' }}>{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="gold-btn w-full mt-2 flex items-center justify-center gap-2"
                >
                  {state === 'sending' ? (
                    <>
                      <Icon name="Loader2" size={16} style={{ color: 'var(--parchment)', animation: 'spin 1s linear infinite' }} />
                      Отправка...
                    </>
                  ) : 'Отправить сообщение'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </Layout>
  );
}
