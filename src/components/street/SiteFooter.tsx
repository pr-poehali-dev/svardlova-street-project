export default function SiteFooter({ onOpenModal }: { onOpenModal: (type: 'about' | 'support' | 'feedback') => void }) {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="30" height="28" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="18" width="6" height="14" fill="#333"/>
            <rect x="1" y="13" width="2" height="5" fill="#333"/>
            <rect x="4" y="13" width="2" height="5" fill="#333"/>
            <rect x="7" y="13" width="2" height="5" fill="#333"/>
            <rect x="10" y="14" width="8" height="18" fill="#333"/>
            <rect x="9" y="9" width="2" height="5" fill="#333"/>
            <rect x="12" y="9" width="2" height="5" fill="#333"/>
            <rect x="15" y="9" width="2" height="5" fill="#333"/>
            <rect x="20" y="14" width="8" height="18" fill="#333"/>
            <rect x="19" y="9" width="2" height="5" fill="#333"/>
            <rect x="22" y="9" width="2" height="5" fill="#333"/>
            <rect x="25" y="9" width="2" height="5" fill="#333"/>
            <rect x="30" y="18" width="6" height="14" fill="#333"/>
            <rect x="29" y="13" width="2" height="5" fill="#333"/>
            <rect x="32" y="13" width="2" height="5" fill="#333"/>
            <rect x="35" y="13" width="2" height="5" fill="#333"/>
          </svg>
          <div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.68rem', letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', lineHeight: 1.1 }}>Кировский район</div>
            <div style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.58rem', color: '#333', letterSpacing: '0.06em', textTransform: 'uppercase' }}>г. Астрахань</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'Поддержка', action: () => onOpenModal('support') },
            { label: 'О проекте', action: () => onOpenModal('about') },
            { label: 'Обратная связь', action: () => onOpenModal('feedback') },
          ].map(item => (
            <button key={item.label} onClick={item.action}
              style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.76rem', color: '#444', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#5fa870')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444')}
            >{item.label}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}
