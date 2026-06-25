'use client';
import { useState, useEffect } from 'react';
import RippleButton from './RippleButton';

const slides = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
];

const SLIDE_DURATION = 5000;
const FADE_DURATION  = 1400;
const KB_DURATION    = 8000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  // Each slide has its own key — only increments when that slide becomes active
  const [imgKeys, setImgKeys] = useState(() => slides.map((_, i) => i));

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = (current + 1) % slides.length;
      setImgKeys(prev => {
        const k = [...prev];
        k[next] = k[next] + slides.length; // new key → restart Ken Burns on incoming
        return k;
      });
      setCurrent(next);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section style={{ position: 'relative', width: '100%', height: 'calc(100vh - 48px)', overflow: 'hidden', backgroundColor: '#3a4a2a' }}>

      {slides.map((src, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0, overflow: 'hidden',
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease`,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            key={imgKeys[i]}
            src={src}
            alt=""
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              animation: `ken-burns ${KB_DURATION}ms ease forwards`,
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(45deg, rgba(64,54,31,0.6) 0%, rgba(0,0,0,0) 55%)',
        zIndex: 10,
      }} />

      {/* Text */}
      <div style={{ position: 'absolute', bottom: 64, left: 0, right: 0, maxWidth: 1900, margin: '0 auto', padding: '0 40px', zIndex: 11 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.92)', marginBottom: 12, textTransform: 'uppercase' }}>
          Nueva colección · Verano 2025
        </p>
        <h1
          className="font-display"
          style={{ fontSize: 'clamp(32px, 4.4vw, 44px)', fontWeight: 300, color: '#fff', lineHeight: '47px', marginBottom: 28, maxWidth: 480, textShadow: '0 1px 8px rgba(0,0,0,0.15)' }}
        >
          <span style={{ fontFeatureSettings: '"swsh" 1' }}>P</span>rendas hechas<br />con mimo y algodón
        </h1>
        <RippleButton bg="#D3C4AE" color="#845C22" style={{ width: 176, height: 58, borderRadius: 50, fontSize: 15, fontWeight: 500 }}>
          Ver colección
        </RippleButton>
      </div>
    </section>
  );
}
