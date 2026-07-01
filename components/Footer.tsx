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
          fontSize: 14,
          letterSpacing: '0.2em',
          fontWeight: 500,
          color: '#40361F',
          marginBottom: 20,
          textTransform: 'uppercase',
          fontFamily: 'var(--font-body)',
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map((link) => (
          <li key={link} style={{ lineHeight: '27px' }}>
            <a
              href="#"
              style={{
                fontSize: 16,
                color: 'rgba(64, 54, 31, 0.4)',
                textDecoration: 'none',
                transition: 'color 0.15s',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#40361F'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(64, 54, 31, 0.4)'; }}
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
    <footer style={{ backgroundColor: '#FFFFFF' }}>
      <div
        style={{
          maxWidth: 1900,
          margin: '0 auto',
          padding: '60px 40px 48px',
          display: 'flex',
          gap: 64,
        }}
      >
        {/* Brand column */}
        <div style={{ flex: '0 0 240px' }}>
          {/* Logo */}
          <div style={{ marginBottom: 16 }}>
            <img
              src="/images/logo.png"
              alt="m&h Baby"
              style={{ height: 34, width: 'auto', display: 'block' }}
            />
          </div>
          <p
            style={{
              fontSize: 16,
              color: 'rgba(64, 54, 31, 0.4)',
              lineHeight: '17px',
              maxWidth: 280,
              fontFamily: 'var(--font-body)',
            }}
          >
            m&h es una marca de moda infantil española. Nuestras colecciones abarcan principalmente bebé y niño hasta los 5 años, en un estilo clásico, sencillo y con precios asequibles.
          </p>
        </div>

        {/* Nav columns */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          <FooterCol title="Tienda Online" links={tiendaLinks} />
          <FooterCol title="Guía de Compra" links={guiaLinks} />
          <FooterCol title="M&H" links={myhLinks} />
          <FooterCol title="Síguenos" links={siguenos} />
        </div>
      </div>

    </footer>
  );
}
