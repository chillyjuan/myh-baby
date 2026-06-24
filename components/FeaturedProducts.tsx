'use client';
import { useState } from 'react';

type Badge = 'REBAJAS' | 'NUEVO' | 'OFERTA' | null;

const badgeColors: Record<string, string> = {
  REBAJAS: '#C84B40',
  NUEVO: '#4A5C4A',
  OFERTA: '#C4782A',
};

interface Product {
  name: string;
  price: string;
  originalPrice?: string;
  badge: Badge;
  bg: string;
}

const products: Product[] = [
  {
    name: 'Camisa Cuello Mao Manga Larga Rayas Azules',
    price: '21,95€',
    badge: null,
    bg: 'linear-gradient(145deg, #dce8f4 0%, #c0d4e8 100%)',
  },
  {
    name: 'Camiseta Manga Corta Rematada En Rosa',
    price: '15,95€',
    originalPrice: '18,95€',
    badge: 'REBAJAS',
    bg: 'linear-gradient(145deg, #f4e0e0 0%, #e8c8c8 100%)',
  },
  {
    name: 'Vestido Lacitos Estampado Liceo',
    price: '36,95€',
    badge: 'NUEVO',
    bg: 'linear-gradient(145deg, #e8e0f0 0%, #d4c8e4 100%)',
  },
  {
    name: 'Camisa Doble Botonadura Manga Corta Blanco',
    price: '15,95€',
    originalPrice: '18,95€',
    badge: 'OFERTA',
    bg: 'linear-gradient(145deg, #f0f0ec 0%, #dcdcd4 100%)',
  },
  {
    name: 'Pijama Corto M&H Bordado Blanco',
    price: '17,95€',
    badge: null,
    bg: 'linear-gradient(145deg, #f4f0e8 0%, #e4ddd0 100%)',
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<'productos' | 'looks'>('productos');

  return (
    <section style={{ padding: '52px 0', backgroundColor: '#F4EFE8' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px' }}>
        {/* Tab header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 28,
          }}
        >
          <div style={{ display: 'flex', gap: 28 }}>
            {(['productos', 'looks'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 16,
                  fontWeight: activeTab === tab ? 500 : 400,
                  color: activeTab === tab ? '#2A2320' : '#B5AFA8',
                  paddingBottom: 6,
                  borderBottom: activeTab === tab ? '1.5px solid #2A2320' : '1.5px solid transparent',
                  letterSpacing: '0.01em',
                  transition: 'color 0.15s',
                  fontFamily: 'inherit',
                }}
              >
                {tab === 'productos' ? 'Productos destacados' : 'Looks destacados'}
              </button>
            ))}
          </div>
          <a
            href="#"
            style={{
              fontSize: 12,
              color: '#2A2320',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              letterSpacing: '0.04em',
            }}
          >
            Ver todos
          </a>
        </div>

        {/* Product grid */}
        <div
          style={{
            display: 'flex',
            gap: 18,
            overflowX: 'auto',
          }}
          className="scroll-hide"
        >
          {products.map((p) => (
            <a
              key={p.name}
              href="#"
              style={{ textDecoration: 'none', flexShrink: 0, width: 220 }}
            >
              {/* Product image */}
              <div style={{ position: 'relative', marginBottom: 10 }}>
                <div
                  style={{
                    width: 220,
                    height: 285,
                    borderRadius: 4,
                    background: p.bg,
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                />
                {p.badge && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: badgeColors[p.badge],
                      color: '#fff',
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      padding: '3px 8px',
                      borderRadius: 99,
                    }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Product info */}
              <p
                style={{
                  fontSize: 12,
                  color: '#2A2320',
                  lineHeight: 1.4,
                  marginBottom: 5,
                  letterSpacing: '0.01em',
                }}
              >
                {p.name}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {p.originalPrice && (
                  <span style={{ fontSize: 12, color: '#B5AFA8', textDecoration: 'line-through' }}>
                    {p.originalPrice}
                  </span>
                )}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: p.originalPrice ? '#C84B40' : '#2A2320',
                  }}
                >
                  {p.price}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
