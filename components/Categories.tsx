'use client';

const categories = [
  { label: 'Vestidos', bg: 'linear-gradient(145deg, #b8c8e0 0%, #9fb0cc 100%)' },
  { label: 'Bermudas', bg: 'linear-gradient(145deg, #d4c5a0 0%, #bfaa80 100%)' },
  { label: 'Baño', bg: 'linear-gradient(145deg, #88c4cc 0%, #6aaab8 100%)' },
  { label: 'Lonetas', bg: 'linear-gradient(145deg, #c8b898 0%, #b0a07A 100%)' },
  { label: 'Petos primavera', bg: 'linear-gradient(145deg, #d0ccc4 0%, #b8b0a4 100%)' },
  { label: 'Camisas niño', bg: 'linear-gradient(145deg, #c4d4e8 0%, #a8bcd8 100%)' },
];

export default function Categories() {
  return (
    <section style={{ padding: '52px 0 40px', backgroundColor: '#FAFAF8' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px' }}>
        <h2
          className="font-display"
          style={{ fontSize: 24, fontWeight: 300, marginBottom: 28, color: '#2A2320' }}
        >
          Categorías principales
        </h2>

        {/* Scroll container */}
        <div
          className="scroll-hide"
          style={{
            display: 'flex',
            gap: 16,
            overflowX: 'auto',
            paddingBottom: 16,
          }}
        >
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              style={{ textDecoration: 'none', flexShrink: 0 }}
            >
              <div
                style={{
                  width: 195,
                  height: 255,
                  borderRadius: 6,
                  background: cat.bg,
                  marginBottom: 10,
                  overflow: 'hidden',
                  transition: 'transform 0.2s, opacity 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
              />
              <p style={{ fontSize: 13, color: '#2A2320', letterSpacing: '0.02em' }}>{cat.label}</p>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ height: 2, backgroundColor: '#E5DED5', borderRadius: 2, marginTop: 8 }}>
          <div style={{ width: '40%', height: '100%', backgroundColor: '#2A2320', borderRadius: 2 }} />
        </div>
      </div>
    </section>
  );
}
