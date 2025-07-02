import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Shield, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      subtitle: 'Titanium. So strong. So light. So Pro.',
      description: 'Dapatkan iPhone 15 Pro Max dengan harga terbaik dan garansi resmi.',
      image: '/img/ban1.jpg',
      discount: '8%',
      originalPrice: 'Rp 23.999.000',
      currentPrice: 'Rp 21.999.000'
    },
    {
      id: 2,
      title: 'iPhone 15 Series',
      subtitle: 'Newphoria. Feel the new.',
      description: 'Koleksi lengkap iPhone 15 dengan berbagai pilihan warna dan storage.',
      image: '/img/ban2.jpg',
      discount: '5%',
      originalPrice: 'Mulai dari Rp 15.999.000',
      currentPrice: 'Mulai dari Rp 14.999.000'
    },
    {
      id: 3,
      title: 'Trade-in Program',
      subtitle: 'Tukar iPhone lama dengan yang baru',
      description: 'Dapatkan nilai tukar terbaik untuk iPhone lama Anda.',
      image: '/img/ban3.jpg',
      discount: 'Hingga 30%',
      originalPrice: 'Nilai tukar hingga',
      currentPrice: 'Rp 8.000.000'
    }
  ];

  const featuredProducts = products.slice(0, 4);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Wijaya',
      rating: 5,
      comment: 'Pelayanan sangat memuaskan! iPhone 15 Pro yang saya beli kondisinya perfect dan pengiriman cepat. Terima kasih iPhone Inter!',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Ahmad Fauzi',
      rating: 5,
      comment: 'Harga kompetitif dan garansi jelas. Sudah 3 kali beli di sini, selalu puas dengan kualitas produk dan servicenya.',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Lisa Pratiwi',
      rating: 5,
      comment: 'Customer service sangat responsif, proses pembelian mudah via WhatsApp. iPhone 14 Pro Max saya berfungsi dengan sempurna.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`
                }}
              >
                <div className="flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl mx-auto px-4 space-y-2 md:space-y-4">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Diskon {slide.discount}
                </div>

                <h1 className="text-3xl md:text-6xl font-bold">
                  {slide.title}
                </h1>

                <h2 className="text-lg md:text-2xl font-light">
                  {slide.subtitle}
                </h2>

                <p className="text-sm md:text-lg max-w-2xl mx-auto">
                  {slide.description}
                </p>

                <div>
                  <p className="text-sm line-through text-gray-300">
                    {slide.originalPrice}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-yellow-400">
                    {slide.currentPrice}
                  </p>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center bg-blue-600 text-white px-5 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm md:text-base"
                >
                  Pesan Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </div>
              </div>

              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="pt-4 pb-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Produk Unggulan</h2>
            <p className="text-gray-600 max-w-1xl mx-auto">
              Koleksi iPhone terbaru dengan harga terbaik dan kualitas terjamin
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
              key={product.id}
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative aspect-[3/3] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                      Diskon
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs rounded">
                    Stok: {product.stock}
                  </div>
                </div>
                
                <div className="pt-3 pb-2 px-4 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-1">{product.storage} • {product.color}</p>
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-2">({product.rating})</span>
                </div>
                <div className="mb-3">
                  {product.originalPrice && (
                    <p className="text-xs text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </p>
                  )}
                  <p className="text-base font-bold text-blue-600">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <div className="mt-auto space-y-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="block w-full bg-gray-100 text-gray-700 text-center py-1.5 rounded-lg hover:bg-gray-200"
                  >
                    Lihat Detail
                  </Link>
                  <button
                    className="block w-full bg-blue-600 text-white text-center py-1.5 rounded-lg hover:bg-blue-700"
                  >
                    + Keranjang
                  </button>
                </div>
              </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-7">
            <Link
              to="/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Lihat Semua Produk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-12 bg-white">
        <div className="px-4 overflow-x-auto">
          <div className="flex gap-6 min-w-[640px] md:min-w-full justify-between">
            <div className="flex-1 text-center min-w-[200px]">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Garansi Resmi</h3>
              <p className="text-gray-600 text-sm">Semua produk dilengkapi garansi resmi dan keaslian 100%</p>
            </div>
            <div className="flex-1 text-center min-w-[200px]">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">Pengiriman aman ke seluruh Indonesia</p>
            </div>
            <div className="flex-1 text-center min-w-[200px]">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Customer Support</h3>
              <p className="text-gray-600">Tim support kami siap bantu 24 jam melalui WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni Pelanggan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ribuan pelanggan telah mempercayai iPhone Inter untuk kebutuhan iPhone mereka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <div className="flex">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{t.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Upgrade iPhone Anda?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Dapatkan iPhone impian Anda dengan harga terbaik, garansi resmi, dan pelayanan terpercaya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100"
            >
              Lihat Katalog
            </Link>
            <a
              href="https://wa.me/6285840469673"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
