import logoCocaCola from '../assets/logos/logo_coca_cola.png';
import logoPaoDeAcucar from '../assets/logos/logo_pao_de_acucar.png';
import logoAssai from '../assets/logos/logo_assai.png';
import logoWalmart from '../assets/logos/logo_walmart.png';
import logoMuffato from '../assets/logos/logo_muffato.png';
import logoAkerSolutions from '../assets/logos/logo_aker_solutions.png';
import logoDelta from '../assets/logos/logo_delta.png';
import logoToyota from '../assets/logos/logo_toyota.png';
import logoRenault from '../assets/logos/logo_renault.png';
import logoForviaFaurecia from '../assets/logos/logo_forvia_faurecia.png';

import cardCocaCola from '../assets/logos/card_coca_cola.png';
import cardPaoDeAcucar from '../assets/logos/card_pao_de_acucar.png';
import cardAssai from '../assets/logos/card_assai.png';
import cardWalmart from '../assets/logos/card_walmart.png';
import cardMuffato from '../assets/logos/card_muffato.png';
import cardAkerSolutions from '../assets/logos/card_aker_solutions.png';
import cardDelta from '../assets/logos/card_delta.png';
import cardToyota from '../assets/logos/card_toyota.png';
import cardRenault from '../assets/logos/card_renault.png';
import cardForviaFaurecia from '../assets/logos/card_forvia_faurecia.png';

import painelCorporativoMarcasGlobais from '../assets/images/painel_corporativo_marcas_globais.png';

export interface BrandItem {
  id: string;
  name: string;
  sector: string;
  note: string;
  logo: string;
  cardImage: string;
  logoHeightClass?: string;
}

export const PAINEL_CORPORATIVO_IMAGE = painelCorporativoMarcasGlobais;

export const GLOBAL_BRANDS: BrandItem[] = [
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    sector: 'Bebidas & Consumo',
    note: 'Escala Global',
    logo: logoCocaCola,
    cardImage: cardCocaCola,
    logoHeightClass: 'h-10 sm:h-12 max-w-[170px]',
  },
  {
    id: 'pao-de-acucar',
    name: 'Grupo Pão de Açúcar',
    sector: 'Varejo Alimentar',
    note: 'Operação Nacional',
    logo: logoPaoDeAcucar,
    cardImage: cardPaoDeAcucar,
    logoHeightClass: 'h-10 sm:h-12 max-w-[180px]',
  },
  {
    id: 'assai',
    name: 'Assaí Atacadista',
    sector: 'Atacarejo & Distribuição',
    note: 'Expansão & Governança',
    logo: logoAssai,
    cardImage: cardAssai,
    logoHeightClass: 'h-12 sm:h-14 max-w-[150px]',
  },
  {
    id: 'walmart',
    name: 'Walmart',
    sector: 'Varejo Multicanal',
    note: 'Gestão de Grandes Redes',
    logo: logoWalmart,
    cardImage: cardWalmart,
    logoHeightClass: 'h-9 sm:h-11 max-w-[170px]',
  },
  {
    id: 'muffato',
    name: 'Grupo Muffato',
    sector: 'Supermercados & Atacado',
    note: 'Logística & Suprimentos',
    logo: logoMuffato,
    cardImage: cardMuffato,
    logoHeightClass: 'h-11 sm:h-13 max-w-[175px]',
  },
  {
    id: 'aker-solutions',
    name: 'Aker Solutions',
    sector: 'Energia & Engenharia',
    note: 'Infraestrutura Complexa',
    logo: logoAkerSolutions,
    cardImage: cardAkerSolutions,
    logoHeightClass: 'h-8 sm:h-10 max-w-[185px]',
  },
  {
    id: 'delta',
    name: 'Delta Air Lines',
    sector: 'Aviação & Serviços',
    note: 'Operações Críticas',
    logo: logoDelta,
    cardImage: cardDelta,
    logoHeightClass: 'h-8 sm:h-10 max-w-[180px]',
  },
  {
    id: 'toyota',
    name: 'Toyota',
    sector: 'Indústria Automotiva',
    note: 'Lean & Qualidade Total',
    logo: logoToyota,
    cardImage: cardToyota,
    logoHeightClass: 'h-12 sm:h-14 max-w-[145px]',
  },
  {
    id: 'renault',
    name: 'Renault',
    sector: 'Indústria Automotiva',
    note: 'Manufatura & Gestão',
    logo: logoRenault,
    cardImage: cardRenault,
    logoHeightClass: 'h-11 sm:h-13 max-w-[175px]',
  },
  {
    id: 'forvia-faurecia',
    name: 'FORVIA / Faurecia',
    sector: 'Tecnologia Automotiva',
    note: 'Tier 1 Global',
    logo: logoForviaFaurecia,
    cardImage: cardForviaFaurecia,
    logoHeightClass: 'h-11 sm:h-13 max-w-[175px]',
  },
];
