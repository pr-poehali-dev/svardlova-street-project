import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'MapPin', label: 'Адрес', value: 'ул. Свердлова, г. Астрахань, 414000' },
  { icon: 'Mail', label: 'Электронная почта', value: 'info@sverdlova-astr.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (8512) 000-000' },
  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт: 9:00–18:00' },
];

export default function Contacts() {
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

            {/* Social / Extra */}
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
            <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="section-label block mb-2">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 font-body text-sm outline-none focus:ring-1 transition-all"
                  style={{
                    background: 'var(--parchment-dark)',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--ink)',
                    borderRadius: 0,
                    focusRingColor: 'var(--gold)',
                  }}
                />
              </div>
              <div>
                <label className="section-label block mb-2">Электронная почта</label>
                <input
                  type="email"
                  placeholder="example@mail.ru"
                  className="w-full px-4 py-3 font-body text-sm outline-none transition-all"
                  style={{
                    background: 'var(--parchment-dark)',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--ink)',
                    borderRadius: 0,
                  }}
                />
              </div>
              <div>
                <label className="section-label block mb-2">Тема обращения</label>
                <select
                  className="w-full px-4 py-3 font-body text-sm outline-none transition-all"
                  style={{
                    background: 'var(--parchment-dark)',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--ink)',
                    borderRadius: 0,
                  }}
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
                  placeholder="Ваше сообщение..."
                  className="w-full px-4 py-3 font-body text-sm outline-none transition-all resize-none"
                  style={{
                    background: 'var(--parchment-dark)',
                    border: '1px solid var(--divider-color)',
                    color: 'var(--ink)',
                    borderRadius: 0,
                  }}
                />
              </div>
              <button type="submit" className="gold-btn w-full mt-2">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
