'use client';

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: 560, overflow: 'hidden', backgroundColor: '#3a4a2a' }}>
      {/* Real hero image */}
      <img
        src="/images/hero.jpg"
        alt="Niños con ropa m&h en el campo"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 25%',
        }}
      />

      {/* Overlay — degradado izquierdo cubre posibles artefactos del JPG */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(10,18,8,0.45) 0%, rgba(10,18,8,0.20) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: 'absolute',
          bottom: 64,
          left: 0,
          right: 0,
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.92)',
            marginBottom: 12,
            textTransform: 'uppercase',
          }}
        >
          Nueva colección · Verano 2025
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(32px, 4.4vw, 44px)',
            fontWeight: 300,
            fontStyle: 'normal',
            color: '#fff',
            lineHeight: '47px',
            letterSpacing: 0,
            marginBottom: 28,
            maxWidth: 480,
            textShadow: '0 1px 8px rgba(0,0,0,0.15)',
          }}
        >
          <span style={{ fontFeatureSettings: '"swsh" 1' }}>P</span>rendas hechas<br />con mimo y algodón
        </h1>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '11px 28px',
            borderRadius: 99,
            border: '1.5px solid rgba(255,255,255,0.85)',
            color: '#fff',
            fontSize: 13,
            letterSpacing: '0.06em',
            textDecoration: 'none',
            backdropFilter: 'blur(4px)',
            background: 'rgba(255,255,255,0.12)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.22)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)'; }}
        >
          Ver colección
        </a>
      </div>
    </section>
  );
}
