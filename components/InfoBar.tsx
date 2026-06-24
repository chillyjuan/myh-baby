function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function InfoBar() {
  return (
    <div style={{ backgroundColor: '#F4EFE8', borderTop: '1px solid #E5DED5', borderBottom: '1px solid #E5DED5' }}>
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '32px 24px',
          display: 'flex',
          alignItems: 'stretch',
          gap: 0,
        }}
      >
        {/* Newsletter */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            paddingRight: 40,
          }}
        >
          <span style={{ color: '#78726C', flexShrink: 0 }}>
            <MailIcon />
          </span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 500, color: '#2A2320', marginBottom: 2 }}>Newsletter</p>
            <p style={{ fontSize: 11, color: '#78726C', marginBottom: 12 }}>Novedades en tu email</p>
            <div style={{ display: 'flex', gap: 0 }}>
              <input
                type="email"
                placeholder="Tu email"
                style={{
                  height: 36,
                  padding: '0 14px',
                  border: '1px solid #D8D2C8',
                  borderRight: 'none',
                  borderRadius: '99px 0 0 99px',
                  fontSize: 12,
                  color: '#2A2320',
                  background: '#fff',
                  outline: 'none',
                  width: 160,
                  fontFamily: 'inherit',
                }}
              />
              <button
                style={{
                  height: 36,
                  padding: '0 18px',
                  backgroundColor: '#2A2320',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0 99px 99px 0',
                  fontSize: 12,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  letterSpacing: '0.04em',
                }}
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, backgroundColor: '#D8D2C8', margin: '0 40px', alignSelf: 'stretch' }} />

        {/* Shipping */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16, padding: '0 40px' }}>
          <span style={{ color: '#78726C', flexShrink: 0 }}>
            <TruckIcon />
          </span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 500, color: '#2A2320', marginBottom: 2 }}>Tarifas de envío</p>
            <p style={{ fontSize: 11, color: '#78726C', lineHeight: 1.5 }}>
              Consulta las tarifas de envío y los puntos<br />de recogida gratuita.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, backgroundColor: '#D8D2C8', margin: '0 40px', alignSelf: 'stretch' }} />

        {/* Purchase conditions */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16, paddingLeft: 40 }}>
          <span style={{ color: '#78726C', flexShrink: 0 }}>
            <BagIcon />
          </span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 500, color: '#2A2320', marginBottom: 2 }}>Condiciones de compra</p>
            <p style={{ fontSize: 11, color: '#78726C', lineHeight: 1.5 }}>
              Envíos gratis por compras superiores a 120€<br />(España) 150€ (Europa).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
