'use client';
import { useState, useRef } from 'react';

interface MegaItem {
  label: string;
  slug: string;
  featured?: boolean;
  sale?: boolean;
}

interface MegaImage {
  label: string;
  slug: string;
  bg: string;
}

interface NavItem {
  label: string;
  slug: string;
  mega?: {
    title: string;
    links: MegaItem[];
    images: MegaImage[];
    twoColumns?: boolean;
    allSale?: boolean;
  };
  dropdown?: {
    title: string;
    links: MegaItem[];
    twoColumns?: boolean;
  };
}

const leftNav: NavItem[] = [
  {
    label: 'Colecciones', slug: 'colecciones',
    mega: {
      title: 'COLECCIONES',
      links: [
        { label: 'Colección Marinera', slug: 'coleccion-marinera' },
        { label: 'Colección Belma', slug: 'coleccion-belma' },
        { label: 'Colección Orlando', slug: 'coleccion-orlando' },
        { label: 'Colección Vichy Azul', slug: 'coleccion-vichy-azul' },
        { label: 'Colección Liceo', slug: 'coleccion-liceo' },
        { label: 'Colección Dana', slug: 'coleccion-dana' },
        { label: 'Colección Rayas azules', slug: 'coleccion-rayas-azules' },
        { label: 'Piqué bebé', slug: 'pique-bebe' },
      ],
      images: [
        { label: 'Colección marinera', slug: 'coleccion-marinera', bg: 'linear-gradient(145deg,#c4d4e8,#a8bcd8)' },
        { label: 'Colección Belma', slug: 'coleccion-belma', bg: 'linear-gradient(145deg,#e8ddd0,#d4c8bc)' },
        { label: 'Colección Orlando', slug: 'coleccion-orlando', bg: 'linear-gradient(145deg,#d4e0d4,#b8ccb8)' },
        { label: 'Colección Vichy azul', slug: 'coleccion-vichy-azul', bg: 'linear-gradient(145deg,#b8c8e0,#9fb0cc)' },
      ],
    },
  },
  {
    label: 'Bebé', slug: 'bebe',
    mega: {
      title: 'BEBÉ 0 MESES - 18 MESES',
      twoColumns: true,
      links: [
        { label: 'Compra por look', slug: 'bebe', featured: true },
        { label: 'Vestidos y jesusitos', slug: 'vestidos-y-jesusitos' },
        { label: 'Petos y peleles', slug: 'petos-y-peleles' },
        { label: 'Cubrepañales', slug: 'cubrepanales-bebe' },
        { label: 'Bodys manga larga', slug: 'bodys-manga-larga' },
        { label: 'Camisas', slug: 'camisas-bebe' },
        { label: 'Camisetas', slug: 'camisetas' },
        { label: 'Pijamas largos', slug: 'pijamas-largos' },
        { label: 'Pijamas cortos', slug: 'pijamas-cortos' },
        { label: 'Bodys manga corta', slug: 'bodys-manga-corta' },
        { label: 'Colección Piqué', slug: 'coleccion-pique' },
        { label: 'Calzado', slug: 'calzado' },
        { label: 'Accesorios bebé', slug: 'accesorios-bebe' },
      ],
      images: [
        { label: 'Compra por look', slug: 'bebe', bg: 'linear-gradient(145deg,#e0d0c0,#ccc0b0)' },
        { label: 'Vestidos y jesusitos', slug: 'vestidos-y-jesusitos', bg: 'linear-gradient(145deg,#f0e0e0,#e0c8c8)' },
        { label: 'Bodys manga corta', slug: 'bodys-manga-corta', bg: 'linear-gradient(145deg,#d8e8f0,#c0d4e4)' },
        { label: 'Calzado', slug: 'calzado', bg: 'linear-gradient(145deg,#f0d8d8,#e0c0c0)' },
      ],
    },
  },
  {
    label: 'Niña', slug: 'nina',
    mega: {
      title: 'NIÑA 12 MESES - 5 AÑOS',
      links: [
        { label: 'Compra por look', slug: 'nina', featured: true },
        { label: 'Vestidos', slug: 'vestidos' },
        { label: 'Chaquetas cortas', slug: 'chaquetas-cortas' },
        { label: 'Camisetas', slug: 'camisetas-nina' },
        { label: 'Blusas', slug: 'blusas-nina' },
        { label: 'Shorts', slug: 'shorts-nina' },
        { label: 'Zapatos', slug: 'calzado' },
        { label: 'Baño', slug: 'bano-nina' },
        { label: 'Rebajas', slug: 'rebajas-invierno', sale: true },
      ],
      images: [
        { label: 'Vestidos', slug: 'vestidos', bg: 'linear-gradient(145deg,#e8dce8,#d4c8d4)' },
        { label: 'Chaquetas', slug: 'chaquetas-cortas', bg: 'linear-gradient(145deg,#f0d8e0,#e0c4cc)' },
        { label: 'Blusas', slug: 'blusas-nina', bg: 'linear-gradient(145deg,#d8ecd8,#c0dcc0)' },
        { label: 'Baño', slug: 'bano-nina', bg: 'linear-gradient(145deg,#88c4cc,#6aaab8)' },
      ],
    },
  },
  {
    label: 'Niño', slug: 'nino',
    mega: {
      title: 'NIÑO 12 MESES - 5 AÑOS',
      links: [
        { label: 'Compra por look', slug: 'nino', featured: true },
        { label: 'Bermudas', slug: 'bermudas' },
        { label: 'Camisas', slug: 'camisas-nino' },
        { label: 'Petos niño', slug: 'petos-nino' },
        { label: 'Jerséis', slug: 'jerseys' },
        { label: 'Chaqueta Larga', slug: 'chaqueta-larga' },
        { label: 'Camisetas', slug: 'camisetas-nino' },
        { label: 'Zapatos', slug: 'calzado' },
        { label: 'Baño', slug: 'bano-nino' },
        { label: 'Rebajas', slug: 'rebajas-invierno', sale: true },
      ],
      images: [
        { label: 'Bermuda', slug: 'bermudas', bg: 'linear-gradient(145deg,#d4c5a0,#bfaa80)' },
        { label: 'Camisas', slug: 'camisas-nino', bg: 'linear-gradient(145deg,#c4d4e8,#a8bcd8)' },
        { label: 'Petos', slug: 'petos-nino', bg: 'linear-gradient(145deg,#d8e4e8,#c0d0d8)' },
        { label: 'Baño', slug: 'bano-nino', bg: 'linear-gradient(145deg,#88c4cc,#6aaab8)' },
      ],
    },
  },
  {
    label: 'Punto', slug: 'punto',
    mega: {
      title: 'PUNTO',
      twoColumns: true,
      links: [
        { label: 'Polainas', slug: 'polainas' },
        { label: 'Chaqueta larga', slug: 'chaqueta-larga-punto' },
        { label: 'Chaqueta corta', slug: 'chaqueta-corta' },
        { label: 'Jerséis niño', slug: 'jerseys-nino' },
        { label: 'Jerséis bebé', slug: 'jersey-bebe' },
        { label: 'Capotas punto', slug: 'capotas-punto' },
        { label: 'Petos perlé', slug: 'petos-perle' },
        { label: 'Cubrepañales', slug: 'cubrepanales' },
        { label: 'Patucos', slug: 'patucos' },
      ],
      images: [
        { label: 'Polainas', slug: 'polainas', bg: 'linear-gradient(145deg,#d8dce8,#c0c8d8)' },
        { label: 'Jerséis bebé', slug: 'jersey-bebe', bg: 'linear-gradient(145deg,#c8d8e8,#b0c4d8)' },
        { label: 'Petos', slug: 'petos-perle', bg: 'linear-gradient(145deg,#d0d8d0,#b8c8b8)' },
        { label: 'Chaquetas', slug: 'chaqueta-corta', bg: 'linear-gradient(145deg,#e8e0d8,#d4ccc0)' },
      ],
    },
  },
];

const rightNav: NavItem[] = [
  {
    label: 'Baño', slug: 'bano',
    dropdown: {
      title: 'BAÑO',
      links: [
        { label: 'Baño niño', slug: 'bano-nino' },
        { label: 'Baño niña', slug: 'bano-nina' },
        { label: 'Cangrejeras', slug: 'cangrejeras' },
      ],
    },
  },
  {
    label: 'Calzado', slug: 'calzado',
    dropdown: {
      title: 'CALZADO',
      links: [
        { label: 'Zapatillas de loneta', slug: 'zapatillas-de-loneta' },
        { label: 'Zapatos piel', slug: 'zapatos-piel' },
        { label: 'Badanas piel', slug: 'badanas-piel' },
      ],
    },
  },
  {
    label: 'Puericultura', slug: 'puericultura',
    dropdown: {
      title: 'PUERICULTURA',
      links: [
        { label: 'Accesorios bebé', slug: 'accesorios-bebe' },
      ],
    },
  },
  {
    label: 'Rebajas', slug: 'rebajas-invierno',
    mega: {
      title: 'REBAJAS INVIERNO',
      twoColumns: true,
      allSale: true,
      links: [
        { label: 'Abrigos niña', slug: 'abrigos-nina', sale: true },
        { label: 'Abrigos niño', slug: 'abrigo-nino', sale: true },
        { label: 'Vestidos', slug: 'vestidos-rebajas-invierno', sale: true },
        { label: 'Chaquetas austriacas', slug: 'chaquetas-austriacas', sale: true },
        { label: 'Punto con greca', slug: 'punto-con-greca', sale: true },
        { label: 'Peleles y petos', slug: 'peleles-y-petos', sale: true },
        { label: 'Petos largos', slug: 'petos-largos', sale: true },
        { label: 'Bermudas', slug: 'bermudas-rebajas', sale: true },
        { label: 'Camisas', slug: 'camisas-rebajas', sale: true },
        { label: 'Blusas', slug: 'blusas-rebajas', sale: true },
        { label: 'Pijamas', slug: 'pijamas', sale: true },
        { label: 'San Francisco y Buzos', slug: 'san-franciscos-y-buzos', sale: true },
        { label: 'Chaquetones de punto', slug: 'chaquetones-de-punto', sale: true },
        { label: 'Merceditas de terciopelo', slug: 'merceditas-de-terciopelo', sale: true },
        { label: 'Zapatos de ante', slug: 'zapatos-ante', sale: true },
        { label: 'Badanas de ante', slug: 'badanas-ante', sale: true },
      ],
      images: [
        { label: 'Abrigos', slug: 'abrigos-nina', bg: 'linear-gradient(145deg,#c8c0d8,#b0a8c4)' },
        { label: 'Vestido', slug: 'vestidos-rebajas-invierno', bg: 'linear-gradient(145deg,#d8c8e0,#c4b0cc)' },
        { label: 'Merceditas terciopelo', slug: 'merceditas-de-terciopelo', bg: 'linear-gradient(145deg,#c0a8b8,#a890a4)' },
        { label: 'Punto con greca', slug: 'punto-con-greca', bg: 'linear-gradient(145deg,#e0d8c8,#ccc4b0)' },
      ],
    },
  },
];

function ChevronDown() {
  return (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.7921 4.31667C3.72544 4.31667 3.66434 4.30557 3.60877 4.28333C3.55324 4.2611 3.49767 4.22223 3.4421 4.16667L0.142102 0.866667C0.0421019 0.766667 -0.00509788 0.647233 0.000435454 0.508333C0.00600212 0.369433 0.0587686 0.25 0.158769 0.15C0.258769 0.0500003 0.378235 0 0.517102 0C0.656002 0 0.775435 0.0500003 0.875435 0.15L3.7921 3.08333L6.72544 0.15C6.82544 0.0500003 6.9421 0.00276654 7.07544 0.00833321C7.20877 0.0138999 7.32544 0.0666667 7.42544 0.166667C7.52544 0.266667 7.57544 0.3861 7.57544 0.525C7.57544 0.6639 7.52544 0.783333 7.42544 0.883333L4.1421 4.16667C4.08657 4.22223 4.031 4.2611 3.97544 4.28333C3.9199 4.30557 3.85877 4.31667 3.7921 4.31667Z" fill="#40361F"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.75 17.75L12 12M0.5 7.20833C0.5 8.98749 1.20677 10.6938 2.46483 11.9518C3.72288 13.2099 5.42917 13.9167 7.20833 13.9167C8.98749 13.9167 10.6938 13.2099 11.9518 11.9518C13.2099 10.6938 13.9167 8.98749 13.9167 7.20833C13.9167 5.42917 13.2099 3.72288 11.9518 2.46483C10.6938 1.20677 8.98749 0.5 7.20833 0.5C5.42917 0.5 3.72288 1.20677 2.46483 2.46483C1.20677 3.72288 0.5 5.42917 0.5 7.20833Z" stroke="#40361F" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 17.75V15.8333C0.5 14.8167 0.903868 13.8416 1.62276 13.1228C2.34165 12.4039 3.31667 12 4.33333 12H8.16667C9.18333 12 10.1584 12.4039 10.8772 13.1228C11.5961 13.8416 12 14.8167 12 15.8333V17.75M2.41667 4.33333C2.41667 5.35 2.82053 6.32502 3.53942 7.04391C4.25831 7.7628 5.23334 8.16667 6.25 8.16667C7.26666 8.16667 8.24169 7.7628 8.96058 7.04391C9.67946 6.32502 10.0833 5.35 10.0833 4.33333C10.0833 3.31667 9.67946 2.34165 8.96058 1.62276C8.24169 0.903868 7.26666 0.5 6.25 0.5C5.23334 0.5 4.25831 0.903868 3.53942 1.62276C2.82053 2.34165 2.41667 3.31667 2.41667 4.33333Z" stroke="#40361F" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.97469 8.16667V3.375C4.97469 2.6125 5.27759 1.88124 5.81676 1.34207C6.35592 0.802901 7.08719 0.5 7.84969 0.5C8.61219 0.5 9.34345 0.802901 9.88262 1.34207C10.4218 1.88124 10.7247 2.6125 10.7247 3.375V8.16667M2.4169 5.29167H13.2834C13.5598 5.29163 13.8329 5.35136 14.084 5.46675C14.3351 5.58215 14.5583 5.75048 14.7382 5.9602C14.9182 6.16993 15.0507 6.41609 15.1266 6.68181C15.2025 6.94753 15.2201 7.22652 15.1781 7.49967L13.9754 15.312C13.8709 15.9909 13.5269 16.61 13.0055 17.0572C12.4841 17.5044 11.8198 17.7502 11.1329 17.75H4.56644C3.8797 17.75 3.21565 17.5041 2.69446 17.0569C2.17327 16.6097 1.82936 15.9908 1.72498 15.312L0.522271 7.49967C0.480265 7.22652 0.497823 6.94753 0.573739 6.68181C0.649655 6.41609 0.782134 6.16993 0.962094 5.9602C1.14205 5.75048 1.36524 5.58215 1.61635 5.46675C1.86745 5.35136 2.14054 5.29163 2.4169 5.29167Z" stroke="#40361F" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MegaMenuPanel({ mega }: { mega: NonNullable<NavItem['mega']> }) {
  return (
    <div style={{ display: 'flex', gap: 0, padding: '24px 28px 24px' }}>
      {/* Left 30%: title + separator + links (1 or 2 columns) */}
      <div style={{ width: '30%', flexShrink: 0, paddingRight: 32 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#40361F', marginBottom: 10, fontWeight: 600 }}>
          {mega.title}
        </p>
        <div style={{ height: 1, width: 180, backgroundColor: '#DBD3C8', marginBottom: 14 }} />
        {mega.twoColumns ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px 24px' }}>
            {mega.links.map((link) => (
              <a key={link.slug} href={`/categoria/${link.slug}`}
                style={{ fontSize: 14, color: link.sale ? '#913232' : link.featured ? '#B9A78D' : '#40361F', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: mega.allSale ? 400 : (link.featured || link.sale ? 600 : 400) }}
                className="hover:opacity-60 transition-opacity">
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {mega.links.map((link) => (
              <a key={link.slug} href={`/categoria/${link.slug}`}
                style={{ fontSize: 14, color: link.sale ? '#913232' : link.featured ? '#B9A78D' : '#40361F', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: link.featured || link.sale ? 600 : 400 }}
                className="hover:opacity-60 transition-opacity">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Right 70%: images */}
      <div style={{ width: '70%', display: 'flex', gap: 24, overflow: 'hidden', alignItems: 'flex-start', paddingTop: 6 }}>
        {mega.images.map((img) => (
          <a
            key={img.slug}
            href={`/categoria/${img.slug}`}
            style={{ textDecoration: 'none', flex: 1, minWidth: 0, display: 'block', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
          >
            <div style={{ width: '100%', height: 360, background: img.bg, marginBottom: 8 }} />
            <p className="font-display" style={{ fontSize: 16, fontWeight: 300, color: '#40361F' }}>{img.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function SimpleDropdownPanel({ dropdown }: { dropdown: NonNullable<NavItem['dropdown']> }) {
  const linkStyle = (link: MegaItem) => ({
    fontSize: 14,
    color: link.sale ? '#913232' : link.featured ? '#B9A78D' : '#40361F',
    textDecoration: 'none' as const,
    whiteSpace: 'nowrap' as const,
    fontWeight: link.featured || link.sale ? 600 : 400,
  });
  return (
    <div style={{ padding: '20px 24px' }}>
      <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#40361F', marginBottom: 10, fontWeight: 600 }}>
        {dropdown.title}
      </p>
      <div style={{ height: 1, backgroundColor: '#DBD3C8', marginBottom: 14 }} />
      {dropdown.twoColumns ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px 32px' }}>
          {dropdown.links.map(link => (
            <a key={link.slug} href={`/categoria/${link.slug}`} style={linkStyle(link)} className="hover:opacity-60 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {dropdown.links.map(link => (
            <a key={link.slug} href={`/categoria/${link.slug}`} style={linkStyle(link)} className="hover:opacity-60 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ item, onEnter, onLeave, isOpen }: {
  item: NavItem;
  onEnter: (slug: string) => void;
  onLeave: () => void;
  isOpen?: boolean;
}) {
  const hasDropdown = !!(item.mega || item.dropdown);
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => hasDropdown && onEnter(item.slug)}
      onMouseLeave={onLeave}
    >
      <a
        href={hasDropdown ? undefined : `/categoria/${item.slug}`}
        onClick={(e) => {
          if (hasDropdown) {
            e.preventDefault();
            isOpen ? onLeave() : onEnter(item.slug);
          }
        }}
        onTouchEnd={(e) => {
          if (hasDropdown) {
            e.preventDefault();
            isOpen ? onLeave() : onEnter(item.slug);
          }
        }}
        className="flex items-center hover:opacity-60 transition-opacity"
        style={{ gap: 5, fontSize: 16, color: '#40361F', textDecoration: 'none', whiteSpace: 'nowrap', cursor: 'pointer' }}
      >
        {item.label}
        {hasDropdown && <ChevronDown />}
      </a>
      {item.dropdown && !item.mega && isOpen && (
        <div
          className="dropdown-appear"
          style={{
            position: 'absolute',
            top: 'calc(100% + 32px)',
            left: 0,
            backgroundColor: '#fff',
            border: '1px solid #EDE8E1',
            borderRadius: 16,
            boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
            zIndex: 200,
            minWidth: 220,
          }}
          onMouseEnter={() => { }}
          onMouseLeave={onLeave}
        >
          <SimpleDropdownPanel dropdown={item.dropdown} />
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (slug: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenSlug(slug);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenSlug(null), 150);
  };
  const handleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenSlug(null);
  };

  const allNav = [...leftNav, ...rightNav];
  const openItem = allNav.find(i => i.slug === openSlug);

  return (
    <header className="w-full" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}>
      {/* Main nav pill */}
      <nav style={{ backgroundColor: 'transparent', padding: '8px 2em' }}>
        <div
          className="mx-auto flex items-center"
          style={{
            maxWidth: 1900,
            height: 64,
            backgroundColor: '#fff',
            borderRadius: 999,
            padding: '0 32px',
            boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
            border: '1px solid #EDE8E1',
          }}
        >
          <div className="flex items-center flex-1" style={{ gap: 24 }}>
            {leftNav.map((item) => (
              <NavLink key={item.slug} item={item} onEnter={handleEnter} onLeave={handleLeave} isOpen={openSlug === item.slug} />
            ))}
          </div>

          <a href="/" style={{ textDecoration: 'none', flexShrink: 0, padding: '0 32px' }}>
            <img src="/images/logo.png" alt="m&h Baby" style={{ height: 52, width: 'auto', display: 'block' }} />
          </a>

          <div className="flex items-center justify-end flex-1" style={{ gap: 24 }}>
            {rightNav.map((item) => (
              <NavLink key={item.slug} item={item} onEnter={handleEnter} onLeave={handleLeave} isOpen={openSlug === item.slug} />
            ))}
            <div className="flex items-center" style={{ gap: 18, marginLeft: 8 }}>
              <button className="hover:opacity-60 transition-opacity" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
                <SearchIcon />
              </button>
              <button className="hover:opacity-60 transition-opacity" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
                <UserIcon />
              </button>
              <button className="hover:opacity-60 transition-opacity" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
                <BagIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega menu — same width as nav pill, 1em below it */}
      {openItem?.mega && (
        <div
          key={openSlug}
          className="dropdown-appear"
          style={{
            position: 'absolute',
            top: '100%',
            left: '3em',
            right: '3em',
            marginTop: '2px',
            backgroundColor: '#fff',
            border: '1px solid #EDE8E1',
            borderRadius: 16,
            boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
            zIndex: 200,
          }}
          onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
          onMouseLeave={handleLeave}
        >
          <MegaMenuPanel mega={openItem.mega} />
        </div>
      )}
    </header>
  );
}
