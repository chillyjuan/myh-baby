'use client';

const tiendaLinks = [
  'Colecciones', 'Bebé', 'Niña', 'Niño', 'Punto', 'Baño',
  'Calzado', 'Puericultura', 'Rebajas Invierno', 'Tarjeta de regalo',
];

const guiaLinks = [
  'Guía de tallas', 'Mi cuenta', 'Cesta', 'Preguntas frecuentes',
  'Condiciones de compra', 'Política de privacidad', 'Aviso Legal', 'Cookies', 'Envíos',
];

const myhLinks = ['Dónde estamos', 'Contacto'];
const siguenos = ['Facebook', 'Instagram'];

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p
        style={{
          fontSize: 10,
          letterSpacing: '0.18em',
          fontWeight: 500,
          color: '#2A2320',
          marginBottom: 16,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map((link) => (
          <li key={link} style={{ marginBottom: 8 }}>
            <a
              href="#"
              style={{
                fontSize: 12,
                color: '#78726C',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2A2320'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#78726C'; }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#EBEBEA' }}>
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '52px 24px 40px',
          display: 'flex',
          gap: 48,
        }}
      >
        {/* Brand column */}
        <div style={{ flex: '0 0 240px' }}>
          {/* Logo */}
          <div style={{ marginBottom: 16 }}>
            <span
              className="font-display"
              style={{
                fontSize: 22,
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#2A2320',
                letterSpacing: '0.14em',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginRight: 2 }}>
                <circle cx="3" cy="3" r="1" fill="#2A2320" />
                <circle cx="9" cy="3" r="1" fill="#2A2320" />
              </svg>
              m<span style={{ color: '#C5897E', fontStyle: 'normal' }}>&amp;</span>h
              <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 2 }}>
                <circle cx="3" cy="9" r="1" fill="#2A2320" />
                <circle cx="9" cy="9" r="1" fill="#2A2320" />
              </svg>
            </span>
          </div>
          <p
            style={{
              fontSize: 12,
              color: '#78726C',
              lineHeight: 1.65,
              maxWidth: 210,
            }}
          >
            m&h es una marca de moda infantil española. Nuestras colecciones abarcan principalmente bebé y niño hasta los 5 años, en un estilo clásico, sencillo y con precios asequibles.
          </p>
        </div>

        {/* Nav columns */}
        <div style={{ flex: 1, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          <FooterCol title="Tienda Online" links={tiendaLinks} />
          <FooterCol title="Guía de Compra" links={guiaLinks} />
          <FooterCol title="M&H" links={myhLinks} />
          <FooterCol title="Síguenos" links={siguenos} />
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid #D8D2C8',
          padding: '16px 24px',
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        <p style={{ fontSize: 11, color: '#B5AFA8', textAlign: 'center' }}>
          © 2025 m&h Baby. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
