'use client';
import RippleButton from './RippleButton';

function ArchDecoration() {
  return (
    <div
      style={{
        width: 80,
        height: 40,
        borderRadius: '40px 40px 0 0',
        border: '4px solid #A2B5A9',
        borderBottom: 'none',
        marginBottom: 28,
      }}
    />
  );
}

function FlowerSvg() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" style={{ color: '#C5897E' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={i}
          cx="36"
          cy="16"
          rx="9"
          ry="16"
          fill="currentColor"
          opacity="0.75"
          transform={`rotate(${i * 72} 36 36)`}
        />
      ))}
      <circle cx="36" cy="36" r="10" fill="currentColor" />
    </svg>
  );
}

function StarSvg() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" style={{ color: '#E8C840' }}>
      <path
        d="M14 0 L16.5 11.5 L28 14 L16.5 16.5 L14 28 L11.5 16.5 L0 14 L11.5 11.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Collections() {
  return (
    <section style={{ backgroundColor: '#F4EFE8' }}>
      <div
        style={{
          maxWidth: 1900,
          margin: '0 auto',
          display: 'flex',
          minHeight: 520,
        }}
      >
        {/* Left: text panel */}
        <div
          style={{
            flex: '0 0 42%',
            padding: '64px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <ArchDecoration />

          <p
            style={{
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#78726C',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Colecciones
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 300,
              color: '#2A2320',
              lineHeight: 1.18,
              marginBottom: 18,
            }}
          >
            Estampados únicos,<br />diseño español
          </h2>

          <p
            style={{
              fontSize: 13,
              color: '#78726C',
              lineHeight: 1.65,
              maxWidth: 310,
              marginBottom: 28,
            }}
          >
            Diseñamos y fabricamos en España. Materiales naturales, acabados cuidados y tallas desde recién nacido hasta 5 años.
          </p>

          <RippleButton
            bg="transparent"
            color="#2A2320"
            hoverColor="#F4EFE8"
            style={{
              padding: '11px 28px',
              borderRadius: 99,
              border: '1.5px solid #2A2320',
              fontSize: 13,
              letterSpacing: '0.06em',
            }}
          >
            Explorar colecciones
          </RippleButton>

          {/* Decorations */}
          <div style={{ position: 'absolute', bottom: 48, left: 48 }}>
            <FlowerSvg />
          </div>
          <div style={{ position: 'absolute', bottom: 80, right: 60 }}>
            <StarSvg />
          </div>
        </div>

        {/* Right: two real photos side by side */}
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <img
              src="/images/coleccion-nino.png"
              alt="Niño con camisa blanca y bermuda m&h"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <img
              src="/images/coleccion-nina.png"
              alt="Niña con vestido estampado m&h"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
