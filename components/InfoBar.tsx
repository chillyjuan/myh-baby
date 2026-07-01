import RippleButton from './RippleButton';

// eslint-disable-next-line @next/next/no-img-element
const MailIcon = () => <img src="/images/icon-mail.svg" alt="" width={30} height={24} />;
// eslint-disable-next-line @next/next/no-img-element
const TruckIcon = () => <img src="/images/icon-camion.svg" alt="" width={30} height={24} />;
// eslint-disable-next-line @next/next/no-img-element
const BagIcon = () => <img src="/images/icon-bolsa.svg" alt="" width={22} height={26} />;

export default function InfoBar() {
  return (
    <div style={{ backgroundColor: '#F4EFE8',  }}>
      <div
        style={{
          maxWidth: 1900,
          margin: '0 auto',
          padding: '32px 40px',
          display: 'flex',
          alignItems: 'stretch',
          gap: 0,
        }}
      >
        {/* Newsletter */}
        <div
          style={{
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 16,
            paddingRight: 60,
          }}
        >
          <span style={{ flexShrink: 0, paddingTop: 4 }}>
            <MailIcon />
          </span>
          <div style={{ flexShrink: 0 }}>
            <p className="font-display" style={{ fontSize: 22, fontWeight: 300, color: '#40361F', marginBottom: 2 }}>Newsletter</p>
            <p style={{ fontSize: 14, color: '#40361F', fontFamily: 'var(--font-body)' }}>Novedades en tu email</p>
          </div>
          <div style={{ display: 'flex', gap: 0, marginLeft: 32 }}>
            <input
              type="email"
              placeholder="Tu email"
              style={{
                height: 50,
                padding: '0 20px',
                border: '1px solid rgba(64, 54, 31, 0.7)',
                borderRight: 'none',
                borderRadius: '99px 0 0 99px',
                fontSize: 15,
                color: 'rgba(64, 54, 31, 0.4)',
                background: 'transparent',
                outline: 'none',
                width: 260,
                fontFamily: 'var(--font-body)',
              }}
            />
            <RippleButton
              as="button"
              bg="#2A2320"
              color="#F2EEEA"
              style={{
                height: 50,
                padding: '0 24px',
                borderRadius: '0 99px 99px 0',
                fontSize: 15,
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              Suscribirse
            </RippleButton>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, backgroundColor: '#B9A78D', margin: '0 32px', alignSelf: 'center', height: 70 }} />

        {/* Shipping */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <span style={{ flexShrink: 0, paddingTop: 4 }}>
            <TruckIcon />
          </span>
          <div>
            <p className="font-display" style={{ fontSize: 22, fontWeight: 300, color: '#40361F', marginBottom: 4 }}>Tarifas de envío</p>
            <p style={{ fontSize: 14, color: '#40361F', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
              Consulta las tarifas de envío y los puntos<br />de recogida gratuita.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, backgroundColor: '#B9A78D', margin: '0 32px', alignSelf: 'center', height: 70 }} />

        {/* Purchase conditions */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <span style={{ flexShrink: 0, paddingTop: 4 }}>
            <BagIcon />
          </span>
          <div>
            <p className="font-display" style={{ fontSize: 22, fontWeight: 300, color: '#40361F', marginBottom: 4 }}>Condiciones de compra</p>
            <p style={{ fontSize: 14, color: '#40361F', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
              Envíos gratis por compras superiores a 120€<br />(España) 150€ (Europa).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
