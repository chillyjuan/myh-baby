function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M23 4v6h-6" /><path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M2 20V8l6 4V8l6 4V4l8 4v12H2z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const features = [
  { icon: <TruckIcon />, label: 'Envío gratis +50€' },
  { icon: <RefreshIcon />, label: 'Cambios y devoluciones fáciles' },
  { icon: <FactoryIcon />, label: 'Producción nacional' },
  { icon: <GlobeIcon />, label: 'Envíos internacionales' },
];

export default function FeaturesBar() {
  return (
    <div style={{ backgroundColor: '#F4EFE8', borderBottom: '1px solid #E5DED5' }}>
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          height: 64,
        }}
      >
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, position: 'relative' }}>
            {i > 0 && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '20%',
                  height: '60%',
                  width: 1,
                  backgroundColor: '#D8D2C8',
                }}
              />
            )}
            <span style={{ color: '#78726C' }}>{f.icon}</span>
            <span style={{ fontSize: 12, letterSpacing: '0.03em', color: '#2A2320' }}>{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
