import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 12',
    price: 21999000,
    originalPrice: 23999000,
    image: '/img/ip12.jpg',
    storage: '256GB',
    color: 'Natural Titanium',
    stock: 15,
    category: 'iPhone 12 Series',
    rating: 4.9,
    description: 'iPhone 12 dengan chip A14 Bionic yang cepat, sistem kamera ganda yang hebat, dan desain yang elegan.',
    features: [
      'Chip A13 Pro dengan GPU 6-core',
      'Sistem kamera Pro 48MP dengan Ultra Wide dan Telephoto',
      'Action Button yang dapat disesuaikan',
      'Desain titanium aerospace-grade',
      'USB-C dengan USB 3 untuk transfer super cepat',
      'Dynamic Island'
    ]
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 18999000,
    originalPrice: 20999000,
    image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
    storage: '128GB',
    color: 'Blue Titanium',
    stock: 20,
    category: 'iPhone 15 Series',
    rating: 4.8,
    description: 'iPhone 15 Pro dengan performa pro dalam ukuran yang lebih kompak, dilengkapi dengan teknologi terdepan dan kamera yang luar biasa.',
    features: [
      'Chip A17 Pro dengan GPU 6-core',
      'Sistem kamera Pro 48MP',
      'Action Button',
      'Desain titanium',
      'USB-C dengan USB 3',
      'Dynamic Island'
    ]
  },
  {
    id: '3',
    name: 'iPhone 15',
    price: 14999000,
    image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
    storage: '128GB',
    color: 'Pink',
    stock: 25,
    category: 'iPhone 15 Series',
    rating: 4.7,
    description: 'iPhone 15 dengan Dynamic Island, kamera utama 48MP, dan desain yang menawan dalam berbagai warna cerah.',
    features: [
      'Chip A16 Bionic',
      'Kamera utama 48MP dengan Ultra Wide',
      'Dynamic Island',
      'USB-C',
      'Desain aluminium dengan kaca berwarna',
      'Ceramic Shield'
    ]
  },
  {
    id: '4',
    name: 'iPhone 15 Plus',
    price: 16999000,
    image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
    storage: '128GB',
    color: 'Blue',
    stock: 18,
    category: 'iPhone 15 Series',
    rating: 4.7,
    description: 'iPhone 15 Plus dengan layar besar 6.7 inci, daya tahan baterai sepanjang hari, dan semua fitur canggih iPhone 15.',
    features: [
      'Layar Super Retina XDR 6.7 inci',
      'Chip A16 Bionic',
      'Kamera utama 48MP',
      'Dynamic Island',
      'USB-C',
      'Daya tahan baterai sepanjang hari'
    ]
  },
  {
    id: '5',
    name: 'iPhone 14 Pro Max',
    price: 17999000,
    originalPrice: 19999000,
    image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
    storage: '256GB',
    color: 'Deep Purple',
    stock: 12,
    category: 'iPhone 14 Series',
    rating: 4.8,
    description: 'iPhone 14 Pro Max dengan Dynamic Island yang inovatif, sistem kamera Pro yang canggih, dan performa A16 Bionic yang luar biasa.',
    features: [
      'Chip A16 Bionic',
      'Sistem kamera Pro 48MP',
      'Dynamic Island',
      'Always-On Display',
      'Desain stainless steel premium',
      'ProRAW dan ProRes'
    ]
  },
  {
    id: '6',
    name: 'iPhone 14',
    price: 12999000,
    image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
    storage: '128GB',
    color: 'Purple',
    stock: 30,
    category: 'iPhone 14 Series',
    rating: 4.6,
    description: 'iPhone 14 dengan performa A15 Bionic yang terbukti, sistem kamera ganda yang canggih, dan desain yang elegan.',
    features: [
      'Chip A15 Bionic',
      'Sistem kamera ganda',
      'Photographic Styles',
      'Action mode untuk video',
      'Ceramic Shield',
      'Emergency SOS via satellite'
    ]
  },
  {
    id: '7',
    name: 'iPhone 13',
    price: 10999000,
    originalPrice: 12999000,
    image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
    storage: '128GB',
    color: 'Midnight',
    stock: 22,
    category: 'iPhone 13 Series',
    rating: 4.5,
    description: 'iPhone 13 dengan chip A15 Bionic yang powerful, sistem kamera ganda yang canggih, dan daya tahan baterai yang lebih baik.',
    features: [
      'Chip A15 Bionic',
      'Sistem kamera ganda 12MP',
      'Mode Sinematik',
      'Photographic Styles',
      'Ceramic Shield',
      'IP68 water resistance'
    ]
  },
  {
    id: '8',
    name: 'iPhone 13 Pro',
    price: 14999000,
    originalPrice: 16999000,
    image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
    storage: '256GB',
    color: 'Sierra Blue',
    stock: 8,
    category: 'iPhone 13 Series',
    rating: 4.7,
    description: 'iPhone 13 Pro dengan sistem kamera Pro tiga lensa, layar ProMotion 120Hz, dan performa pro yang luar biasa.',
    features: [
      'Chip A15 Bionic dengan GPU 5-core',
      'Sistem kamera Pro 12MP',
      'ProMotion 120Hz',
      'ProRAW dan ProRes',
      'LiDAR Scanner',
      'Desain stainless steel'
    ]
  }
];

export const categories = [
  'iPhone 15 Pro/Max',
  'iPhone 15 Series',
  'iPhone 14 Pro/Max',
  'iPhone 14 Series',
  'iPhone 13 Pro/Max',
  'iPhone 13 Series',
  'iPhone 12 Pro/Max',
  'iPhone 12 Series',
  'iPhone 11 Pro/Max',
  'iPhone 11 Series',
  'iPhone Xr/Xs/X Series',
  'Aksesoris'
];

export const storageOptions = ['128GB', '256GB', '512GB', '1TB'];

export const colorOptions = [
  'Natural Titanium',
  'Blue Titanium',
  'White Titanium',
  'Black Titanium',
  'Pink',
  'Blue',
  'Yellow',
  'Green',
  'Purple',
  'Deep Purple',
  'Midnight',
  'Sierra Blue'
];