'use client';
import { useState, useRef, MouseEvent, ReactNode, CSSProperties } from 'react';

interface RippleButtonProps {
  children: ReactNode;
  href?: string;
  as?: 'a' | 'button';
  bg: string;
  color: string;
  hoverColor?: string; // texto al hacer hover (por defecto = bg)
  style?: CSSProperties;
  type?: 'button' | 'submit';
}

export default function RippleButton({
  children,
  href,
  as: Tag = 'a',
  bg,
  color,
  hoverColor,
  style,
  type = 'button',
}: RippleButtonProps) {
  const [pos, setPos] = useState({ x: 0, y: 0, size: 0 });
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleEnter = (e: MouseEvent<HTMLElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Diámetro = 2× la distancia máxima a cualquier esquina
    const size =
      2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y),
      );
    setPos({ x, y, size });
    setActive(true);
  };

  const handleLeave = () => setActive(false);

  const baseStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bg,
    color: active ? (hoverColor ?? bg) : color,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'color 0.45s ease',
    ...style,
  };

  const rippleStyle: CSSProperties = {
    position: 'absolute',
    left: pos.x,
    top: pos.y,
    width: active ? pos.size : 0,
    height: active ? pos.size : 0,
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    backgroundColor: color,
    transition: active
      ? 'width 0.55s ease, height 0.55s ease'
      : 'width 0.4s ease, height 0.4s ease',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const innerStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1,
  };

  if (Tag === 'button') {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        style={baseStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <span style={rippleStyle} />
        <span style={innerStyle}>{children}</span>
      </button>
    );
  }

  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href || '#'}
      style={baseStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span style={rippleStyle} />
      <span style={innerStyle}>{children}</span>
    </a>
  );
}
