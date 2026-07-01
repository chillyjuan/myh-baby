'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

const categories = [
  { label: 'Vestidos', bg: 'linear-gradient(145deg, #b8c8e0 0%, #9fb0cc 100%)' },
  { label: 'Bermudas', bg: 'linear-gradient(145deg, #d4c5a0 0%, #bfaa80 100%)' },
  { label: 'Baño', bg: 'linear-gradient(145deg, #88c4cc 0%, #6aaab8 100%)' },
  { label: 'Lonetas', bg: 'linear-gradient(145deg, #c8b898 0%, #b0a07A 100%)' },
  { label: 'Petos primavera', bg: 'linear-gradient(145deg, #d0ccc4 0%, #b8b0a4 100%)' },
  { label: 'Camisas niño', bg: 'linear-gradient(145deg, #c4d4e8 0%, #a8bcd8 100%)' },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(40);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth - el.clientWidth;
    const thumb = Math.max(8, (el.clientWidth / el.scrollWidth) * 100);
    const ratio = scrollable > 0 ? el.scrollLeft / scrollable : 0;
    setThumbWidth(thumb);
    setThumbLeft(ratio * (100 - thumb));
  }, []);

  useEffect(() => {
    updateThumb();
    window.addEventListener('resize', updateThumb);
    return () => window.removeEventListener('resize', updateThumb);
  }, [updateThumb]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging.current) return;
    const el = scrollRef.current;
    const track = e.currentTarget.getBoundingClientRect();
    if (!el) return;
    const clickRatio = (e.clientX - track.left) / track.width;
    el.scrollLeft = clickRatio * (el.scrollWidth - el.clientWidth);
  };

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current || !scrollRef.current || !trackRef.current) return;
      const trackWidth = trackRef.current.clientWidth;
      const scrollable = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const dx = ev.clientX - dragStartX.current;
      const scrollDelta = (dx / trackWidth) * scrollRef.current.scrollWidth;
      scrollRef.current.scrollLeft = Math.max(0, Math.min(scrollable, dragStartScroll.current + scrollDelta));
    };

    const onMouseUp = () => {
      dragging.current = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <section style={{ padding: '52px 0 40px', backgroundColor: '#FAFAF8' }}>
      {/* Title */}
      <div style={{ maxWidth: 1900, margin: '0 auto', padding: '0 40px', marginBottom: 28 }}>
        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 24, fontWeight: 500, color: '#40361F' }}>
          Categorías principales
        </h2>
      </div>

      {/* Full-width scroll container */}
      <div
        ref={scrollRef}
        onScroll={updateThumb}
        className="scroll-hide"
        style={{
          display: 'flex',
          gap: 24,
          overflowX: 'auto',
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 8,
          paddingBottom: 20,
        }}
      >
        {categories.map((cat) => (
          <a
            key={cat.label}
            href="#"
            style={{
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'transform 0.2s',
              display: 'block',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
          >
            <div
              style={{
                width: 296,
                height: 394,
                borderRadius: 0,
                background: cat.bg,
                marginBottom: 10,
                overflow: 'hidden',
              }}
            />
            <p className="font-display" style={{ fontSize: 17, fontWeight: 300, color: '#40361F' }}>{cat.label}</p>
          </a>
        ))}
      </div>

      {/* Draggable scroll bar */}
      <div style={{ padding: '0 40px' }}>
        <div
          ref={trackRef}
          style={{ height: 10, backgroundColor: '#F2EDE7', borderRadius: 30, cursor: 'pointer', position: 'relative' }}
          onClick={handleTrackClick}
        >
          <div
            style={{
              position: 'absolute',
              height: '100%',
              backgroundColor: '#D3C4AE',
              borderRadius: 30,
              left: `${thumbLeft}%`,
              width: `${thumbWidth}%`,
              cursor: 'grab',
              transition: dragging.current ? 'none' : 'left 0.08s',
            }}
            onMouseDown={handleThumbMouseDown}
          />
        </div>
      </div>
    </section>
  );
}
