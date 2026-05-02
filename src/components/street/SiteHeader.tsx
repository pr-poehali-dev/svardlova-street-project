import Icon from '@/components/ui/icon';

export default function SiteHeader({ onOpenModal }: { onOpenModal: (type: 'about' | 'support' | 'feedback') => void }) {
  return (
    <header style={{ background: 'rgba(10,10,10,0.97)', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 54 }}>
        <a href="#about" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="18" width="6" height="14" fill="#4a8c5c"/>
            <rect x="1" y="13" width="2" height="5" fill="#4a8c5c"/>
            <rect x="4" y="13" width="2" height="5" fill="#4a8c5c"/>
            <rect x="7" y="13" width="2" height="5" fill="#4a8c5c"/>
            <rect x="10" y="14" width="8" height="18" fill="#4a8c5c"/>
            <rect x="9" y="9" width="2" height="5" fill="#4a8c5c"/>
            <rect x="12" y="9" width="2" height="5" fill="#4a8c5c"/>
            <rect x="15" y="9" width="2" height="5" fill="#4a8c5c"/>
            <rect x="20" y="14" width="8" height="18" fill="#4a8c5c"/>
            <rect x="19" y="9" width="2" height="5" fill="#4a8c5c"/>
            <rect x="22" y="9" width="2" height="5" fill="#4a8c5c"/>
            <rect x="25" y="9" width="2" height="5" fill="#4a8c5c"/>
            <rect x="30" y="18" width="6" height="14" fill="#4a8c5c"/>
            <rect x="29" y="13" width="2" height="5" fill="#4a8c5c"/>
            <rect x="32" y="13" width="2" height="5" fill="#4a8c5c"/>
            <rect x="35" y="13" width="2" height="5" fill="#4a8c5c"/>
            <rect x="14" y="2" width="2" height="7" fill="#5fa870"/>
            <circle cx="15" cy="1.5" r="1.5" fill="#5fa870"/>
            <rect x="24" y="4" width="2" height="5" fill="#5fa870"/>
            <circle cx="25" cy="3.5" r="1.5" fill="#5fa870"/>
          </svg>
          <div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f0f0f0', lineHeight: 1.1 }}>Кировский район</div>
            <div style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.6rem', color: '#5fa870', letterSpacing: '0.06em', textTransform: 'uppercase' }}>г. Астрахань</div>
          </div>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <a href="#about" style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#aaa', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}>Главная</a>
          <button onClick={() => onOpenModal('about')}
            style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#aaa', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.03em', transition: 'color 0.2s', padding: 0 }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}>О проекте</button>
          <a href="#contacts" style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.8rem', color: '#aaa', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}>Контакты</a>
          <a href="#geography" className="green-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="Map" size={13} />
            Карта
          </a>
        </nav>
      </div>
    </header>
  );
}
