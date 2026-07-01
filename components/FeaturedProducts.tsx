'use client';
import { useState } from 'react';

type Badge = 'REBAJAS' | 'NUEVO' | 'OFERTA';

/*
 * WooCommerce badge logic (implemented in PHP theme):
 *
 *  REBAJAS — el producto tiene precio rebajado Y meta _promotion_type = 'rebajas'
 *             (precio rebajado lo activa WooCommerce de forma nativa con sale_price)
 *
 *  OFERTA  — el producto tiene precio rebajado Y meta _promotion_type = 'oferta'
 *             (se elige en el editor del producto: campo radio "Tipo de etiqueta")
 *
 *  NUEVO   — $product->get_date_created() > now - 30 days  (automático, sin meta)
 *
 * En el editor de WooCommerce se añade un meta box "Etiqueta de producto" con:
 *   ○ Rebajas  ● Oferta casual  (radio, solo visible si hay sale_price)
 */

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  // 'REBAJAS'|'OFERTA' → tiene precio rebajado; 'NUEVO' → añadido hace <30 días
  badge?: Badge;
  image?: string;
  placeholderBg: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Camisa Cuello Mao Manga Larga Rayas Azules',
    price: 21.95,
    placeholderBg: 'linear-gradient(145deg, #dce8f4 0%, #b8cfe8 100%)',
  },
  {
    id: 2,
    name: 'Camiseta Manga Corta Rematada En Rosa',
    price: 15.95,
    originalPrice: 18.95,
    badge: 'REBAJAS',
    placeholderBg: 'linear-gradient(145deg, #f4e0e2 0%, #e8c8cc 100%)',
  },
  {
    id: 3,
    name: 'Vestido Lacitos Estampado Liceo',
    price: 36.95,
    badge: 'NUEVO',
    placeholderBg: 'linear-gradient(145deg, #ece0f0 0%, #d8c8e8 100%)',
  },
  {
    id: 4,
    name: 'Camisa Doble Botonadura Manga Corta Blanco',
    price: 15.95,
    originalPrice: 18.95,
    badge: 'OFERTA',
    placeholderBg: 'linear-gradient(145deg, #f2f0ec 0%, #e0dcd4 100%)',
  },
  {
    id: 5,
    name: 'Pijama Corto M&H Bordado Blanco',
    price: 17.95,
    placeholderBg: 'linear-gradient(145deg, #f4f0e8 0%, #e4ddd0 100%)',
  },
];

const BADGE: Record<Badge, { bg: string; color: string }> = {
  REBAJAS: { bg: '#DA9B92', color: '#40361F' },
  NUEVO:   { bg: '#B1C1B4', color: '#40361F' },
  OFERTA:  { bg: '#FFD589', color: '#40361F' },
};

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const badge = product.badge ? BADGE[product.badge] : null;

  return (
    <a
      href="#"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wrapper: relative + overflow visible so dog can poke above */}
      <div style={{ position: 'relative', aspectRatio: '5/6', marginBottom: 12 }}>
        {/* Image clip — separate div so overflow:hidden doesn't cut the dog */}
        <div style={{
          position: 'absolute', inset: 0,
          overflow: 'hidden', background: product.placeholderBg,
        }}>
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.45s ease',
              }}
            />
          )}
        </div>

        {/* Badge — outside the clipped div so dog overflows upward freely */}
        {badge && product.badge && (
          <div style={{
            position: 'absolute', top: 6, right: 6,
            display: 'flex', alignItems: 'center',
            pointerEvents: 'none',
          }}>
            <div style={{
              backgroundColor: badge.bg, color: badge.color,
              padding: '7px 10px 7px 12px',
              fontSize: 11, letterSpacing: '0.12em', lineHeight: 1,
              fontFamily: 'var(--font-display)', fontWeight: 400,
              borderRadius: '4px 0 0 4px',
              whiteSpace: 'nowrap',
            }}>
              {product.badge}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/etiqueta-perro.png"
              alt=""
              style={{ height: 46, width: 'auto', flexShrink: 0, marginLeft: -14 }}
            />
          </div>
        )}
      </div>

      <p style={{ fontSize: 13, color: '#2A2320', lineHeight: 1.45, marginBottom: 7, textAlign: 'center' }}>
        {product.name}
      </p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, justifyContent: 'center' }}>
        {product.originalPrice && (
          <span style={{ fontSize: 12, color: '#B5AFA8', textDecoration: 'line-through' }}>
            {product.originalPrice.toFixed(2).replace('.', ',')}€
          </span>
        )}
        <span style={{
          fontSize: 14, fontWeight: 500,
          color: product.originalPrice ? '#913232' : '#2A2320',
        }}>
          {product.price.toFixed(2).replace('.', ',')}€
        </span>
      </div>
    </a>
  );
}

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<'productos' | 'looks'>('productos');

  return (
    <section style={{ backgroundColor: '#F4EFE8', padding: '56px 0 64px' }}>
      <div style={{ maxWidth: 1900, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36 }}>
          <div style={{ display: 'flex', gap: 28, alignItems: 'flex-end' }}>
            {(['productos', 'looks'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none', border: 'none', padding: '0 0 10px', cursor: 'pointer',
                  fontSize: 24, fontWeight: activeTab === tab ? 600 : 400,
                  color: activeTab === tab ? '#2A2320' : '#B5AFA8',
                  textDecoration: activeTab === tab ? 'underline' : 'none',
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '4px',
                  fontFamily: 'var(--font-body)', transition: 'color 0.2s',
                }}
              >
                {tab === 'productos' ? 'Productos destacados' : 'Looks destacados'}
              </button>
            ))}
          </div>
          <a href="#" style={{ fontSize: 13, color: '#2A2320', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Ver todos
          </a>
        </div>

        {/* Grid */}
        {activeTab === 'productos' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {activeTab === 'looks' && (
          <p style={{ color: '#B5AFA8', fontSize: 14 }}>Próximamente — looks destacados.</p>
        )}

      </div>
    </section>
  );
}
