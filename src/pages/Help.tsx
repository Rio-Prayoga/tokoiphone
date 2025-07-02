import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Search, ChevronDown, ChevronUp } from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      id: 1,
      question: 'Bagaimana cara melakukan pemesanan?',
      answer: 'Anda dapat melakukan pemesanan dengan cara: 1) Pilih produk yang diinginkan, 2) Tambahkan ke keranjang, 3) Isi form checkout, 4) Klik "Pesan via WhatsApp" untuk konfirmasi dengan tim kami.'
    },
    {
      id: 2,
      question: 'Apakah semua iPhone yang dijual original?',
      answer: 'Ya, semua iPhone yang kami jual adalah 100% original dan bergaransi resmi. Kami bekerja sama dengan distributor resmi Apple di Indonesia.'
    },
    {
      id: 3,
      question: 'Berapa lama garansi produk?',
      answer: 'Semua iPhone yang kami jual dilengkapi dengan garansi resmi 1 tahun dari Apple. Garansi berlaku untuk kerusakan hardware dan software yang bukan disebabkan oleh kesalahan pengguna.'
    },
    {
      id: 4,
      question: 'Bagaimana sistem pembayaran?',
      answer: 'Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, Dana, GoPay), dan kartu kredit. Pembayaran dilakukan setelah konfirmasi ketersediaan stok melalui WhatsApp.'
    },
    {
      id: 5,
      question: 'Berapa ongkos kirim ke seluruh Indonesia?',
      answer: 'Ongkos kirim bervariasi tergantung lokasi tujuan. Untuk pembelian di atas Rp 10.000.000, kami berikan gratis ongkir. Tim kami akan menginformasikan detail ongkir saat konfirmasi pesanan.'
    },
    {
      id: 6,
      question: 'Apakah ada program trade-in?',
      answer: 'Ya, kami memiliki program trade-in untuk iPhone lama Anda. Nilai tukar akan disesuaikan dengan kondisi dan model iPhone yang akan di-trade-in. Hubungi kami untuk penilaian.'
    },
    {
      id: 7,
      question: 'Bagaimana jika produk yang diterima rusak?',
      answer: 'Jika produk yang diterima dalam kondisi rusak atau tidak sesuai, Anda dapat menghubungi kami dalam 1x24 jam setelah penerimaan. Kami akan melakukan penggantian atau refund sesuai kebijakan.'
    },
    {
      id: 8,
      question: 'Apakah bisa COD (Cash on Delivery)?',
      answer: 'Untuk saat ini, kami belum melayani sistem COD. Pembayaran dilakukan sebelum pengiriman untuk menjaga keamanan transaksi kedua belah pihak.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `PESAN DARI WEBSITE - iPhone Inter

Nama: ${contactForm.name}
Email: ${contactForm.email}
Subjek: ${contactForm.subject}

Pesan:
${contactForm.message}

Mohon respon. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6285840469673?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    alert('Pesan Anda akan dikirim melalui WhatsApp. Terima kasih!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pusat Bantuan</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan jawaban untuk pertanyaan yang sering diajukan atau hubungi tim customer service kami
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Options */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Hubungi Kami</h2>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/6285840469673"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <p className="font-medium text-green-900">WhatsApp</p>
                  <p className="text-sm text-green-700">085840469673</p>
                  <p className="text-xs text-green-600">Respon cepat 1-2 jam</p>
                </div>
              </a>

              <a
                href="tel:+6285840469673"
                className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-blue-900">Telepon</p>
                  <p className="text-sm text-blue-700">085840469673</p>
                  <p className="text-xs text-blue-600">Sen-Sab: 08:00-20:00</p>
                </div>
              </a>

              <a
                href="mailto:riopray38@gmail.com"
                className="flex items-center p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <Mail className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium text-purple-900">Email</p>
                  <p className="text-sm text-purple-700">riopray38@gmail.com</p>
                  <p className="text-xs text-purple-600">Respon dalam 1x24 jam</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Kirim Pesan</h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama *
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subjek *
                </label>
                <select
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Pilih subjek</option>
                  <option value="Pertanyaan Produk">Pertanyaan Produk</option>
                  <option value="Status Pesanan">Status Pesanan</option>
                  <option value="Keluhan">Keluhan</option>
                  <option value="Saran">Saran</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pertanyaan yang Sering Diajukan</h2>
            
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Tidak ada pertanyaan yang cocok dengan pencarian Anda</p>
              </div>
            )}
          </div>

          {/* Additional Help */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Tidak menemukan jawaban?</h3>
            <p className="text-blue-700 mb-4">
              Tim customer service kami siap membantu Anda 24/7 melalui WhatsApp. 
              Dapatkan respon cepat dalam 1-2 jam pada jam kerja.
            </p>
            <a
              href="https://wa.me/6285840469673"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;