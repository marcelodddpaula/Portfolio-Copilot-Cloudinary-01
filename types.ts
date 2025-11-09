
export enum Category {
  FACHADAS = 'Fachadas',
  LETRAS_ALTO_RELEVO = 'Letras Alto Relevo',
  PLACAS_CONSULTORIO = 'Placas Consultório',
}

export interface ImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  categories: Category[];
}

export type Page = 'home' | 'contact';
