export type CategoryType = 
  | 'Vermut'
  | 'Spritz'
  | 'Vino_Tinto'
  | 'Vino_Blanco'
  | 'Mojito'
  | 'Sangria'
  | 'Cava';

export interface ProductFormat {
  id: string;
  size: string;
  price: number;
  unit: string;
  stock?: number;
  volume?: string;
}

export interface LocalizedContent {
  name: string;
  description: string;
  features: string[];
  longDescription?: string;
  servingSuggestions?: string[];
  pairings?: string[];
}

export interface Award {
  year: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  image: string;
  categories: CategoryType[];
  formats: ProductFormat[];
  awards?: Award[];
  locales: {
    es: LocalizedContent;
    en: LocalizedContent;
  };
}

export interface ProductsConfig {
  itemsPerPage: number;
  selectedCategory: CategoryType | 'all';
}

export const ALL_CATEGORIES: CategoryType[] = [
  'Vermut',
  'Spritz',
  'Vino_Tinto',
  'Vino_Blanco',
  'Mojito',
  'Sangria',
  'Cava'
];
