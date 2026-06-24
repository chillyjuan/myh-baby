function GenderCard({
  title,
  subtitle,
  bgBase,
  bgStripe,
  imgSrc,
  imgAlt,
}: {
  title: string;
  subtitle: string;
  bgBase: string;
  bgStripe: string;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div
      style={{
        flex: 1,
        position: 'relative',
        height: 480,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '36px 40px',
        background: `repeating-linear-gradient(90deg, ${bgBase} 0px, ${bgBase} 54px, ${bgStripe} 54px, ${bgStripe} 108px)`,
      }}
    >
      {/* Masked photo — shape already applied in the PNG (transparent bg) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -56%)',
          width: '72%',
          zIndex: 2,
        }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Text */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <h2
          className="font-display"
          style={{
            fontSize: 48,
            fontWeight: 300,
            fontStyle: 'normal',
            color: '#fff',
            lineHeight: 1,
            textShadow: '0 1px 4px rgba(0,0,0,0.08)',
          }}
        >
          {title}
        </h2>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function GenderBanners() {
  return (
    <section style={{ display: 'flex' }}>
      <GenderCard
        title="Niñas"
        subtitle="12m - 5 años"
        bgBase="#C8897E"
        bgStripe="#BC7E73"
        imgSrc="/images/ninas-banner.png"
        imgAlt="Niña con vestido azul de flores m&h"
      />
      <GenderCard
        title="Niños"
        subtitle="12m - 5 años"
        bgBase="#8FADA2"
        bgStripe="#82A095"
        imgSrc="/images/ninos-banner.png"
        imgAlt="Niño con peto terracota m&h"
      />
    </section>
  );
}
