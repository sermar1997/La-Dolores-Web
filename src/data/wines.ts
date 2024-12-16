import { Product } from '../types/wine';

export const products: Product[] = [
  {
    id: 'vermut-clasico',
    image: 'https://placehold.co/400x600/8B4513/FFFFFF/png?text=Vermut',
    categories: ['Vermut'],
    formats: [
      {
        id: 'vermut-clasico-750',
        size: '750 ml',
        price: 12.99,
        unit: 'ml',
        stock: 15,
        volume: '750ml'
      },
      {
        id: 'vermut-clasico-1000',
        size: '1 L',
        price: 16.99,
        unit: 'L',
        stock: 8,
        volume: '1000ml'
      }
    ],
    awards: [
      {
        year: '2023',
        name: 'Medalla de Oro',
        description: 'Concurso Internacional de Vermuts'
      }
    ],
    locales: {
      es: {
        name: 'Vermut Clásico La Dolores',
        description: 'Vermut artesanal elaborado con hierbas aromáticas seleccionadas',
        features: [
          'Hierbas aromáticas',
          'Proceso artesanal',
          'Maceración tradicional',
          'Sabor equilibrado'
        ],
        longDescription: 'Nuestro Vermut Clásico es el resultado de años de tradición y experiencia en la elaboración de vermuts artesanales. Cada botella contiene una cuidadosa selección de hierbas aromáticas que se maceran siguiendo un proceso tradicional para lograr un sabor equilibrado y distintivo.',
        servingSuggestions: [
          'Servir muy frío con una rodaja de naranja',
          'Ideal con 2-3 cubitos de hielo',
          'Temperatura recomendada: 6-8°C'
        ],
        pairings: [
          'Aceitunas y encurtidos',
          'Chips de patata',
          'Frutos secos salados',
          'Quesos curados'
        ]
      },
      en: {
        name: 'Classic Vermouth La Dolores',
        description: 'Artisanal vermouth made with selected aromatic herbs',
        features: [
          'Aromatic herbs',
          'Artisanal process',
          'Traditional maceration',
          'Balanced flavor'
        ],
        longDescription: 'Our Classic Vermouth is the result of years of tradition and expertise in crafting artisanal vermouths. Each bottle contains a careful selection of aromatic herbs that are macerated following a traditional process to achieve a balanced and distinctive flavor.',
        servingSuggestions: [
          'Serve very cold with an orange slice',
          'Perfect with 2-3 ice cubes',
          'Recommended temperature: 6-8°C'
        ],
        pairings: [
          'Olives and pickles',
          'Potato chips',
          'Salted nuts',
          'Aged cheeses'
        ]
      }
    }
  },
  {
    id: 'spritz-dolores',
    image: 'https://placehold.co/400x600/FF6B6B/FFFFFF/png?text=Spritz',
    categories: ['Spritz'],
    formats: [
      {
        id: 'spritz-dolores-750',
        size: '750 ml',
        price: 14.99,
        unit: 'ml',
        stock: 20,
        volume: '750ml'
      }
    ],
    awards: [
      {
        year: '2023',
        name: 'Premio Innovación',
        description: 'Mejor Nuevo Producto - Feria de Bebidas Premium'
      }
    ],
    locales: {
      es: {
        name: 'Spritz La Dolores',
        description: 'Bebida refrescante con un toque de amargo y cítricos',
        features: [
          'Refrescante',
          'Notas cítricas',
          'Toque amargo',
          'Perfecto para aperitivo'
        ],
        longDescription: 'Nuestro Spritz es una interpretación moderna del clásico aperitivo italiano. Combinamos nuestro vermut especial con una selección de botánicos cítricos para crear una bebida refrescante y sofisticada, perfecta para cualquier momento del día.',
        servingSuggestions: [
          'Servir en copa de vino con hielo',
          'Añadir una rodaja de naranja',
          'Temperatura ideal: 4-6°C'
        ],
        pairings: [
          'Aperitivos ligeros',
          'Tapas mediterráneas',
          'Quesos frescos',
          'Frutos del mar'
        ]
      },
      en: {
        name: 'Spritz La Dolores',
        description: 'Refreshing drink with a touch of bitterness and citrus',
        features: [
          'Refreshing',
          'Citrus notes',
          'Bitter touch',
          'Perfect for aperitif'
        ],
        longDescription: 'Our Spritz is a modern interpretation of the classic Italian aperitif. We combine our special vermouth with a selection of citrus botanicals to create a refreshing and sophisticated drink, perfect for any time of day.',
        servingSuggestions: [
          'Serve in a wine glass with ice',
          'Add an orange slice',
          'Ideal temperature: 4-6°C'
        ],
        pairings: [
          'Light appetizers',
          'Mediterranean tapas',
          'Fresh cheeses',
          'Seafood'
        ]
      }
    }
  },
  {
    id: 'crianza',
    image: 'https://placehold.co/400x600/722F37/FFFFFF/png?text=Crianza',
    categories: ['Vino_Tinto'],
    formats: [
      {
        id: 'crianza-750',
        size: '750 ml',
        price: 18.99,
        unit: 'ml',
        stock: 25,
        volume: '750ml'
      },
      {
        id: 'crianza-1500',
        size: '1.5 L',
        price: 35.99,
        unit: 'L',
        stock: 5,
        volume: '1500ml'
      }
    ],
    awards: [
      {
        year: '2023',
        name: '92 Puntos Parker',
        description: 'Wine Advocate - Robert Parker'
      },
      {
        year: '2022',
        name: 'Medalla de Oro',
        description: 'Concurso Internacional de Vinos y Espirituosos'
      }
    ],
    locales: {
      es: {
        name: 'Crianza La Dolores',
        description: 'Vino tinto con 12 meses de crianza en barrica de roble',
        features: [
          'Uva Tempranillo',
          '12 meses en barrica',
          'Aromas a vainilla y especias',
          'Sabor estructurado'
        ],
        longDescription: 'Nuestro vino Crianza es el resultado de una cuidadosa selección de uvas Tempranillo y un proceso de envejecimiento de 12 meses en barricas de roble francés y americano. Este tiempo en barrica le confiere notas elegantes de vainilla y especias, manteniendo la fruta y frescura características de la variedad.',
        servingSuggestions: [
          'Servir entre 16-18°C',
          'Decantar 30 minutos antes de servir',
          'Conservar en lugar fresco y oscuro'
        ],
        pairings: [
          'Carnes rojas a la parrilla',
          'Quesos curados',
          'Jamón ibérico',
          'Guisos tradicionales'
        ]
      },
      en: {
        name: 'Crianza La Dolores',
        description: 'Red wine aged 12 months in oak barrels',
        features: [
          'Tempranillo grape',
          '12 months in barrel',
          'Vanilla and spice aromas',
          'Structured flavor'
        ],
        longDescription: 'Our Crianza wine is the result of a careful selection of Tempranillo grapes and an aging process of 12 months in French and American oak barrels. This time in barrel gives it elegant notes of vanilla and spices, while maintaining the characteristic fruit and freshness of the variety.',
        servingSuggestions: [
          'Serve between 16-18°C',
          'Decant 30 minutes before serving',
          'Store in a cool, dark place'
        ],
        pairings: [
          'Grilled red meats',
          'Aged cheeses',
          'Iberian ham',
          'Traditional stews'
        ]
      }
    }
  },
  {
    id: 'verdejo',
    image: 'https://placehold.co/400x600/F1E4B2/000000/png?text=Verdejo',
    categories: ['Vino_Blanco'],
    formats: [
      {
        id: 'verdejo-750',
        size: '750 ml',
        price: 15.99,
        unit: 'ml',
        stock: 30,
        volume: '750ml'
      }
    ],
    awards: [],
    locales: {
      es: {
        name: 'Verdejo La Dolores',
        description: 'Vino blanco fresco y aromático con notas cítricas',
        features: [
          'Uva Verdejo',
          'Fresco y aromático',
          'Notas cítricas',
          'Final largo'
        ],
        longDescription: 'Nuestro vino Verdejo es un vino blanco fresco y aromático, elaborado con uvas de la variedad Verdejo. Su aroma es intenso y complejo, con notas cítricas y florales, y su sabor es fresco y equilibrado.',
        servingSuggestions: [
          'Servir entre 8-10°C',
          'Ideal para acompañar aperitivos y tapas',
          'Conservar en lugar fresco y oscuro'
        ],
        pairings: [
          'Aperitivos ligeros',
          'Tapas mediterráneas',
          'Quesos frescos',
          'Frutos del mar'
        ]
      },
      en: {
        name: 'Verdejo La Dolores',
        description: 'Fresh and aromatic white wine with citrus notes',
        features: [
          'Verdejo grape',
          'Fresh and aromatic',
          'Citrus notes',
          'Long finish'
        ],
        longDescription: 'Our Verdejo wine is a fresh and aromatic white wine, made from Verdejo grapes. Its aroma is intense and complex, with citrus and floral notes, and its flavor is fresh and balanced.',
        servingSuggestions: [
          'Serve between 8-10°C',
          'Ideal for accompanying appetizers and tapas',
          'Store in a cool, dark place'
        ],
        pairings: [
          'Light appetizers',
          'Mediterranean tapas',
          'Fresh cheeses',
          'Seafood'
        ]
      }
    }
  },
  {
    id: 'mojito-clasico',
    image: 'https://placehold.co/400x600/98FB98/000000/png?text=Mojito',
    categories: ['Mojito'],
    formats: [
      {
        id: 'mojito-clasico-750',
        size: '750 ml',
        price: 13.99,
        unit: 'ml',
        stock: 25,
        volume: '750ml'
      }
    ],
    awards: [],
    locales: {
      es: {
        name: 'Mojito Clásico',
        description: 'Mojito refrescante con ron premium y hierbabuena fresca',
        features: [
          'Ron premium',
          'Hierbabuena fresca',
          'Lima natural',
          'Azúcar de caña'
        ],
        longDescription: 'Nuestro Mojito Clásico es un mojito refrescante y sofisticado, elaborado con ron premium y hierbabuena fresca. Su aroma es intenso y complejo, con notas de hierbabuena y lima, y su sabor es fresco y equilibrado.',
        servingSuggestions: [
          'Servir en copa de vino con hielo',
          'Añadir una rodaja de lima',
          'Temperatura ideal: 4-6°C'
        ],
        pairings: [
          'Aperitivos ligeros',
          'Tapas mediterráneas',
          'Quesos frescos',
          'Frutos del mar'
        ]
      },
      en: {
        name: 'Classic Mojito',
        description: 'Refreshing mojito with premium rum and fresh mint',
        features: [
          'Premium rum',
          'Fresh mint',
          'Natural lime',
          'Cane sugar'
        ],
        longDescription: 'Our Classic Mojito is a refreshing and sophisticated mojito, made with premium rum and fresh mint. Its aroma is intense and complex, with mint and lime notes, and its flavor is fresh and balanced.',
        servingSuggestions: [
          'Serve in a wine glass with ice',
          'Add a lime slice',
          'Ideal temperature: 4-6°C'
        ],
        pairings: [
          'Light appetizers',
          'Mediterranean tapas',
          'Fresh cheeses',
          'Seafood'
        ]
      }
    }
  },
  {
    id: 'sangria-tradicional',
    image: 'https://placehold.co/400x600/B22222/FFFFFF/png?text=Sangria',
    categories: ['Sangria'],
    formats: [
      {
        id: 'sangria-tradicional-1000',
        size: '1 L',
        price: 11.99,
        unit: 'L',
        stock: 30,
        volume: '1000ml'
      }
    ],
    awards: [],
    locales: {
      es: {
        name: 'Sangría Tradicional',
        description: 'Sangría tradicional española con frutas naturales',
        features: [
          'Vino tinto seleccionado',
          'Frutas naturales',
          'Receta tradicional',
          'Refrescante'
        ],
        longDescription: 'Nuestra Sangría Tradicional es una sangría refrescante y sofisticada, elaborada con vino tinto seleccionado y frutas naturales. Su aroma es intenso y complejo, con notas de frutas y especias, y su sabor es fresco y equilibrado.',
        servingSuggestions: [
          'Servir en copa de vino con hielo',
          'Añadir una rodaja de naranja',
          'Temperatura ideal: 4-6°C'
        ],
        pairings: [
          'Aperitivos ligeros',
          'Tapas mediterráneas',
          'Quesos frescos',
          'Frutos del mar'
        ]
      },
      en: {
        name: 'Traditional Sangria',
        description: 'Traditional Spanish sangria with natural fruits',
        features: [
          'Selected red wine',
          'Natural fruits',
          'Traditional recipe',
          'Refreshing'
        ],
        longDescription: 'Our Traditional Sangria is a refreshing and sophisticated sangria, made with selected red wine and natural fruits. Its aroma is intense and complex, with fruit and spice notes, and its flavor is fresh and balanced.',
        servingSuggestions: [
          'Serve in a wine glass with ice',
          'Add an orange slice',
          'Ideal temperature: 4-6°C'
        ],
        pairings: [
          'Light appetizers',
          'Mediterranean tapas',
          'Fresh cheeses',
          'Seafood'
        ]
      }
    }
  },
  {
    id: 'cava-brut',
    image: 'https://placehold.co/400x600/FFD700/000000/png?text=Cava',
    categories: ['Cava'],
    formats: [
      {
        id: 'cava-brut-750',
        size: '750 ml',
        price: 16.99,
        unit: 'ml',
        stock: 25,
        volume: '750ml'
      }
    ],
    awards: [],
    locales: {
      es: {
        name: 'Cava Brut La Dolores',
        description: 'Cava brut nature con 24 meses de crianza',
        features: [
          'Método tradicional',
          '24 meses de crianza',
          'Burbujas finas',
          'Sabor elegante'
        ],
        longDescription: 'Nuestro Cava Brut es un cava brut nature elaborado según el método tradicional, con 24 meses de crianza. Su aroma es intenso y complejo, con notas de frutas y especias, y su sabor es fresco y equilibrado.',
        servingSuggestions: [
          'Servir entre 6-8°C',
          'Ideal para acompañar aperitivos y tapas',
          'Conservar en lugar fresco y oscuro'
        ],
        pairings: [
          'Aperitivos ligeros',
          'Tapas mediterráneas',
          'Quesos frescos',
          'Frutos del mar'
        ]
      },
      en: {
        name: 'Cava Brut La Dolores',
        description: 'Brut nature cava aged for 24 months',
        features: [
          'Traditional method',
          '24 months aging',
          'Fine bubbles',
          'Elegant taste'
        ],
        longDescription: 'Our Cava Brut is a brut nature cava made according to the traditional method, with 24 months of aging. Its aroma is intense and complex, with fruit and spice notes, and its flavor is fresh and balanced.',
        servingSuggestions: [
          'Serve between 6-8°C',
          'Ideal for accompanying appetizers and tapas',
          'Store in a cool, dark place'
        ],
        pairings: [
          'Light appetizers',
          'Mediterranean tapas',
          'Fresh cheeses',
          'Seafood'
        ]
      }
    }
  }
];
