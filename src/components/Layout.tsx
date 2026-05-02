import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/history', label: 'История' },
  { to: '/landmarks', label: 'Значимые места' },
  { to: '/geography', label: 'География' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--parchment)' }}>
      {/* Top bar */}
      <div className="w-full py-1.5 text-center section-label" style={{ background: 'var(--ink)', color: 'var(--gold-pale)' }}>
        Историко-культурный портал · Астрахань
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ background: 'var(--parchment)', borderColor: 'var(--divider-color)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-semibold tracking-wide" style={{ color: 'var(--ink)' }}>
              Улица Свердлова
            </span>
            <span className="section-label mt-0.5">г. Астрахань</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-sm transition-colors duration-200"
                style={{
                  color: location.pathname === link.to ? 'var(--gold)' : 'var(--ink-light)',
                  borderBottom: location.pathname === link.to ? '1px solid var(--gold)' : 'none',
                  paddingBottom: '2px'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2"
            style={{ color: 'var(--ink)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t" style={{ background: 'var(--parchment-dark)', borderColor: 'var(--divider-color)' }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 font-body text-sm border-b"
                style={{
                  color: location.pathname === link.to ? 'var(--gold)' : 'var(--ink-light)',
                  borderColor: 'var(--divider-color)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Map section */}
      <section className="border-t" style={{ borderColor: 'var(--divider-color)' }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="ornament-line mb-6">
            <span className="section-label">Астрахань на карте</span>
          </div>
          <div className="relative w-full rounded-none overflow-hidden" style={{ height: '360px', border: '1px solid var(--divider-color)' }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=47.9,46.2,48.2,46.45&layer=mapnik&marker=46.3478,48.0336"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Карта Астрахани — улица Свердлова"
            />
          </div>
          <p className="text-center mt-3 font-body text-xs" style={{ color: 'var(--sepia)' }}>
            Улица Свердлова, г. Астрахань
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--ink)', color: 'var(--gold-pale)' }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl" style={{ color: 'var(--gold-light)' }}>Улица Свердлова</p>
              <p className="section-label mt-1" style={{ color: 'var(--gold-pale)', opacity: 0.6 }}>Историко-культурный портал</p>
            </div>
            <div className="flex gap-6">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="font-body text-xs transition-opacity hover:opacity-70" style={{ color: 'var(--gold-pale)', opacity: 0.7 }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t mt-6 pt-4 text-center" style={{ borderColor: 'rgba(196,154,42,0.2)' }}>
            <p className="font-body text-xs" style={{ color: 'var(--gold-pale)', opacity: 0.4 }}>
              © 2024 Улица Свердлова · Астрахань · Историко-культурный портал
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
