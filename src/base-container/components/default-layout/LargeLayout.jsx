import { getConfig } from '@edx/frontend-platform';
import { Hyperlink, Image } from '@openedx/paragon';

const LargeLayout = () => {
  const deepBlue = '#0A2A66';
  const crimsonRed = '#C8102E';
  const starGold = '#FFD700';
  const escudoFicctUrl = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Escudo_FICCT.png';

  return (
    <div className="w-50 d-flex min-vh-100">
      <div className="col-md-9 p-0 d-flex flex-column" style={{ background: `linear-gradient(135deg, ${deepBlue} 0%, #041433 100%)` }}>
        <div className="d-flex flex-grow-1 align-items-center pl-5 pr-4">
          <div style={{ width: '6px', height: '170px', backgroundColor: crimsonRed, marginRight: '35px', borderRadius: '4px' }} />
          <div className="d-flex flex-column align-items-start">
            <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL} className="mb-4">
              <Image
                alt="Escudo FICCT UAGRM"
                src={escudoFicctUrl}
                style={{ maxHeight: '280px', objectFit: 'contain' }}
              />
            </Hyperlink>
            <h1 className="text-white m-0" style={{ lineHeight: '1.1', letterSpacing: '-1.5px', fontSize: '3.5rem', fontWeight: 'bold' }}>
              FICCT
              <div style={{ color: starGold, fontSize: '0.65em', marginTop: '8px', letterSpacing: '1px' }}>
                CAMPUS VIRTUAL
              </div>
              <div style={{ color: '#A0B2D8', fontSize: '1.1rem', marginTop: '25px', fontWeight: '300', lineHeight: '1.5', maxWidth: '95%', letterSpacing: '0' }}>
                Innovación, investigación y excelencia en la Facultad de Ingeniería en Ciencias de la Computación y Telecomunicaciones de la UAGRM.
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-0">
        <svg className="ml-n1 w-100 h-100 large-screen-svg-primary" preserveAspectRatio="none" style={{ fill: '#ffffff' }}>
          <g transform="skewX(171.6)">
            <rect x="0" y="0" height="100%" width="100%" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LargeLayout;