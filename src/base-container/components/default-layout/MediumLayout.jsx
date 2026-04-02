import { getConfig } from '@edx/frontend-platform';
import { Hyperlink, Image } from '@openedx/paragon';

const MediumLayout = () => {
  const deepBlue = "#0A2A66";
  const crimsonRed = "#C8102E";
  const starGold = "#FFD700";
  const escudoFicctUrl = "https://upload.wikimedia.org/wikipedia/commons/8/82/Escudo_FICCT.png";

  return (
    // position-relative para anclar la franja flotante, y pb-5 para darle espacio abajo
    <div className="w-100 position-relative d-flex flex-column align-items-center text-center pb-5" 
         style={{ background: `linear-gradient(135deg, ${deepBlue} 0%, #041433 100%)`, borderBottom: `4px solid ${crimsonRed}` }}>
      
      {/* FRANJA DE COLORES (Tablet) - Flotante para evitar scroll horizontal/vertical */}
      <div className="medium-screen-top-stripe position-absolute w-100 p-0" style={{ top: 0, left: 0 }} />

      {/* CONTENEDOR DEL LOGO Y TEXTO (mt-5 y pt-3 empujan todo hacia abajo para esquivar la franja) */}
      <div className="mt-5 pt-3 d-flex flex-column align-items-center">
        
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL} className="mb-3">
          <Image 
            alt="Escudo FICCT UAGRM" 
            src={escudoFicctUrl} 
            style={{ maxHeight: '120px', objectFit: 'contain' }} 
          />
        </Hyperlink>

        <h1 className="text-white m-0" style={{ lineHeight: '1.1', letterSpacing: '-1px', fontSize: '2.8rem', fontWeight: 'bold' }}>
          FICCT
          <div style={{ color: starGold, fontSize: '0.6em', marginTop: '5px', letterSpacing: '1px' }}> 
            CAMPUS VIRTUAL
          </div>
        </h1>
        
      </div>
      
    </div>
  );
};

export default MediumLayout;