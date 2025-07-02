import React from 'react';
import { Shield, Eye, Lock, Database, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="text-center mb-8">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Kebijakan Privasi</h1>
          <p className="text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="h-5 w-5 text-blue-600 mr-2" />
              Pengantar
            </h2>
            <p className="text-gray-600 leading-relaxed">
              iPhone Inter berkomitmen untuk melindungi privasi dan keamanan informasi pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, 
              dan melindungi informasi yang Anda berikan kepada kami melalui website dan layanan kami.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="h-5 w-5 text-blue-600 mr-2" />
              Informasi yang Kami Kumpulkan
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran (tidak menyimpan detail kartu kredit)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Informasi Otomatis</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Alamat IP</li>
                  <li>Jenis browser dan perangkat</li>
                  <li>Halaman yang dikunjungi</li>
                  <li>Waktu dan durasi kunjungan</li>
                  <li>Cookies dan teknologi pelacakan serupa</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Lock className="h-5 w-5 text-blue-600 mr-2" />
              Bagaimana Kami Menggunakan Informasi Anda
            </h2>
            <div className="space-y-2">
              <p className="text-gray-600">Kami menggunakan informasi Anda untuk:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Memproses dan memenuhi pesanan Anda</li>
                <li>Berkomunikasi mengenai pesanan dan layanan</li>
                <li>Memberikan dukungan pelanggan</li>
                <li>Meningkatkan website dan layanan kami</li>
                <li>Mengirim informasi promosi (dengan persetujuan Anda)</li>
                <li>Mencegah penipuan dan menjaga keamanan</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Berbagi Informasi</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, 
                kecuali dalam situasi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Penyedia layanan pengiriman untuk memproses pesanan</li>
                <li>Penyedia layanan pembayaran untuk memproses transaksi</li>
                <li>Pihak berwenang jika diwajibkan oleh hukum</li>
                <li>Dalam kasus merger, akuisisi, atau penjualan aset</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Keamanan Data</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi Anda:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Enkripsi SSL untuk transmisi data</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Pemantauan keamanan secara berkala</li>
                <li>Penyimpanan data yang secure</li>
                <li>Pelatihan privasi untuk karyawan</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Website kami menggunakan cookies untuk meningkatkan pengalaman Anda. Cookies adalah 
                file kecil yang disimpan di perangkat Anda yang membantu kami:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Mengingat preferensi Anda</li>
                <li>Menyimpan item dalam keranjang belanja</li>
                <li>Menganalisis penggunaan website</li>
                <li>Menyediakan konten yang relevan</li>
              </ul>
              <p className="text-gray-600">
                Anda dapat mengatur browser untuk menolak cookies, namun beberapa fitur website mungkin tidak berfungsi optimal.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Hak Anda</h2>
            <div className="space-y-4">
              <p className="text-gray-600">Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Mengakses data pribadi yang kami miliki tentang Anda</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi Anda</li>
                <li>Membatasi pemrosesan data Anda</li>
                <li>Portabilitas data</li>
                <li>Keberatan terhadap pemrosesan data tertentu</li>
                <li>Menarik persetujuan kapan saja</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Penyimpanan Data</h2>
            <p className="text-gray-600">
              Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk tujuan yang ditetapkan 
              dalam kebijakan ini, atau selama diwajibkan oleh hukum. Data transaksi akan disimpan 
              selama 7 tahun sesuai dengan peraturan perpajakan yang berlaku.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Perubahan Kebijakan</h2>
            <p className="text-gray-600">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
              dinotifikasi melalui website atau email. Penggunaan berkelanjutan layanan kami 
              setelah perubahan dianggap sebagai persetujuan terhadap kebijakan yang diperbarui.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Kami
            </h2>
            <p className="text-blue-800 mb-4">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak-hak Anda, 
              silakan hubungi kami:
            </p>
            <div className="space-y-2 text-blue-700">
              <p><strong>Email:</strong> riopray38@gmail.com</p>
              <p><strong>WhatsApp:</strong> +62 858-4046-9673</p>
              <p><strong>Nama Perusahaan:</strong> iPhone Inter</p>
              <p><strong>Pemilik:</strong> Rio Prayoga</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;