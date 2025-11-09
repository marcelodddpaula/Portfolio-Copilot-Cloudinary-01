import { ImageItem, Category } from './types';

export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dr5936gfv/image/upload';

export const LOGO_PUBLIC_ID = 'portfolio/logo_depaula_v1';

export const CATEGORIES: string[] = ['Todas', Category.FACHADAS, Category.LETRAS_ALTO_RELEVO, Category.PLACAS_CONSULTORIO];

// As strings 'src' agora são os "Public IDs" das suas imagens no Cloudinary
export const IMAGES: ImageItem[] = [
  { id: 1, src: 'portfolio/letras-alto-relevo/caracol_ (1)', alt: 'Fachada moderna', title: 'Fachada Comercial', categories: [Category.FACHADAS] },
  { id: 2, src: 'portfolio/letras-alto-relevo/caracol_ (2)', alt: 'Letras em alto relevo', title: 'Letras de Acrílico', categories: [Category.FACHADAS, Category.LETRAS_ALTO_RELEVO] },
  { id: 3, src: 'portfolio/letras-alto-relevo/caracol_ (3)', alt: 'Placa de consultório médico', title: 'Placa de Recepção', categories: [Category.PLACAS_CONSULTORIO] },
  { id: 4, src: 'portfolio/letras-alto-relevo/caracol_ (4)', alt: 'Fachada de loja', title: 'Comunicação Visual Loja', categories: [Category.FACHADAS] },
  { id: 5, src: 'portfolio/fachadas/CrossFit_ (1)', alt: 'Letras 3D iluminadas', title: 'Letreiro Iluminado', categories: [Category.LETRAS_ALTO_RELEVO, Category.FACHADAS] },
  { id: 6, src: 'portfolio/fachadas/CrossFit_ (2)', alt: 'Placa para escritório de advocacia', title: 'Placa Advocacia', categories: [Category.PLACAS_CONSULTORIO] },
  { id: 7, src: 'portfolio/letras-alto-relevo/CrossFit_ (3)', alt: 'Fachada CrossFit', title: 'Academia', categories: [Category.FACHADAS] },
  { id: 8, src: 'portfolio/id1079', alt: 'Detalhe de letra em relevo', title: 'Detalhe Relevo', categories: [Category.LETRAS_ALTO_RELEVO] },
  { id: 9, src: 'portfolio/id21', alt: 'Placa de consultório odontológico', title: 'Placa Odontologia', categories: [Category.PLACAS_CONSULTORIO] },
  { id: 10, src: 'portfolio/id219', alt: 'Fachada de empresa de tecnologia', title: 'Empresa Tech', categories: [Category.FACHADAS, Category.LETRAS_ALTO_RELEVO] },
  { id: 11, src: 'portfolio/id237', alt: 'Logotipo em alto relevo na parede', title: 'Logo 3D', categories: [Category.LETRAS_ALTO_RELEVO] },
  { id: 12, src: 'portfolio/id24', alt: 'Placa de identificação de sala', title: 'Identificação de Sala', categories: [Category.PLACAS_CONSULTORIO] },
];

export const HERO_IMAGES = [
  'portfolio/id431',
  'portfolio/id532',
  'portfolio/id559',
  'portfolio/id582'
];

export const CONTACT_INFO = {
    address: 'Rua Dona Santina, 644 - Piracicaba - SP',
    mapUrl: 'https://www.google.com/maps/place/R.+Dona+Santina,+644+-+S%C3%A3o+Luiz,+Piracicaba+-+SP,+13405-369',
    instagramUser: 'depaula.placas.letreiros',
    instagramUrl: 'https://www.instagram.com/depaula.placas.letreiros'
};