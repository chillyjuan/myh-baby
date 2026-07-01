'use client';
import RippleButton from './RippleButton';


export default function Collections() {
  return (
    <section style={{ padding: '40px' }}>
      <div
        style={{
          maxWidth: 1900,
          margin: '0 auto',
          display: 'flex',
          minHeight: 520,
          backgroundColor: '#F4EFE8',
          padding: 40,
          gap: 40,
        }}
      >
        {/* Left: text panel */}
        <div
          style={{
            flex: '0 0 42%',
            padding: '24px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >

          <p
            style={{
              fontSize: 15,
              letterSpacing: '0.2em',
              color: '#40361F',
              textTransform: 'uppercase',
              marginBottom: 16,
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
            }}
          >
            Colecciones
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 3.2vw, 44px)',
              fontWeight: 300,
              color: '#40361F',
              lineHeight: 1.1,
              marginBottom: 18,
            }}
          >
            Estampados únicos,<br />diseño español
          </h2>

          <p
            style={{
              fontSize: 16,
              color: '#40361F',
              lineHeight: 1.6,
              maxWidth: 340,
              marginBottom: 28,
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
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
              alignSelf: 'flex-start',
            }}
          >
            Explorar colecciones
          </RippleButton>

          {/* Decorations */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/colecciones-arco.svg" alt="" style={{ position: 'absolute', top: 40, left: '50%', transform: 'translateX(-50%)', width: 160 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/colecciones-flor.svg" alt="" style={{ position: 'absolute', bottom: 160, right: -120, width: 280, zIndex: 2 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/colecciones-estrella.svg" alt="" style={{ position: 'absolute', bottom: 48, left: '38%', width: 80 }} />
        </div>

        {/* Right: two real photos side by side */}
        <div style={{ flex: 1, display: 'flex', gap: 40 }}>
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
