'use client';

const leftNav = ['Colecciones', 'Bebé', 'Niña', 'Niño', 'Punto', 'Baño'];
const rightNav = ['Calzado', 'Puericultura', 'Rebajas'];

function ChevronDown() {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M1 1.5l3.5 3 3.5-3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="11" cy="11" r="7.5" />
      <path d="M20.5 20.5l-4-4" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* Announcement bar */}
      <div
        style={{ backgroundColor: '#C8D4CB' }}
        className="text-center py-2"
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#2A2320' }}>
          Producción nacional · Envío 24/48h
        </span>
      </div>

      {/* Main nav */}
      <nav className="bg-white" style={{ borderBottom: '1px solid #E5DED5' }}>
        <div
          className="mx-auto flex items-center"
          style={{ maxWidth: 1440, padding: '0 24px', height: 64 }}
        >
          {/* Left nav */}
          <div className="flex items-center flex-1" style={{ gap: 24 }}>
            {leftNav.map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center hover:opacity-60 transition-opacity"
                style={{ gap: 4, fontSize: 12, letterSpacing: '0.04em', color: '#2A2320', textDecoration: 'none' }}
              >
                {item}
                <ChevronDown />
              </a>
            ))}
          </div>

          {/* Center logo */}
          <a href="/" style={{ textDecoration: 'none', flexShrink: 0, padding: '0 32px' }}>
            <span
              className="font-display"
              style={{ fontSize: 26, letterSpacing: '0.18em', color: '#2A2320', fontStyle: 'italic', fontWeight: 400, display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ marginRight: 2 }}>
                <circle cx="4" cy="4" r="1.2" fill="#2A2320" />
                <circle cx="10" cy="4" r="1.2" fill="#2A2320" />
              </svg>
              m<span style={{ color: '#C5897E', fontStyle: 'normal' }}>&amp;</span>h
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ marginLeft: 2 }}>
                <circle cx="4" cy="10" r="1.2" fill="#2A2320" />
                <circle cx="10" cy="10" r="1.2" fill="#2A2320" />
              </svg>
            </span>
          </a>

          {/* Right nav + icons */}
          <div className="flex items-center justify-end flex-1" style={{ gap: 24 }}>
            {rightNav.map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center hover:opacity-60 transition-opacity"
                style={{ gap: 4, fontSize: 12, letterSpacing: '0.04em', color: '#2A2320', textDecoration: 'none' }}
              >
                {item}
                <ChevronDown />
              </a>
            ))}
            <div className="flex items-center" style={{ gap: 16, marginLeft: 8 }}>
              <button className="hover:opacity-60 transition-opacity" style={{ color: '#2A2320', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <SearchIcon />
              </button>
              <button className="hover:opacity-60 transition-opacity" style={{ color: '#2A2320', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <UserIcon />
              </button>
              <button className="hover:opacity-60 transition-opacity" style={{ color: '#2A2320', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <BagIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
