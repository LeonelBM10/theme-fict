import { getConfig } from '@edx/frontend-platform';
import { Hyperlink, Image } from '@openedx/paragon';

const SmallLayout = () => {
  // Colores corporativos de la FICCT
  const deepBlue = "#0A2A66";
  const crimsonRed = "#C8102E";
  const starGold = "#FFD700";
  const escudoFicctUrl = "https://upload.wikimedia.org/wikipedia/commons/8/82/Escudo_FICCT.png";

  return (
    // Usamos position-relative aquí para que la franja flotante se ancle a este contenedor
    <div className="w-100 position-relative d-flex flex-column align-items-center text-center pb-4" 
         style={{ background: `linear-gradient(135deg, ${deepBlue} 0%, #041433 100%)`, borderBottom: `4px solid ${crimsonRed}` }}>
      
      {/* FRANJA DE COLORES (Top Stripe) - Flotante para no generar scroll ni romper la grilla */}
      <div className="small-screen-top-stripe position-absolute w-100 p-0" style={{ top: 0, left: 0 }} />

      {/* CONTENEDOR DEL LOGO Y TEXTO (Le damos un margen top 'mt-4' para que la franja no lo tape) */}
      <div className="mt-4 pt-2 d-flex flex-column align-items-center">
        
        {/* LOGO ADAPTADO PARA MÓVILES */}
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL} className="mb-2">
          <Image 
            alt="Escudo FICCT UAGRM" 
            src={escudoFicctUrl} 
            style={{ maxHeight: '75px', objectFit: 'contain' }} 
          />
        </Hyperlink>

        {/* TEXTOS COMPACTOS */}
        <h1 className="text-white m-0" style={{ lineHeight: '1.1', letterSpacing: '-0.5px', fontSize: '2rem', fontWeight: 'bold' }}>
          FICCT
          <div style={{ color: starGold, fontSize: '0.55em', marginTop: '4px', letterSpacing: '1px' }}> 
            CAMPUS VIRTUAL
          </div>
        </h1>

      </div>
      
    </div>
  );
};

export default SmallLayout;