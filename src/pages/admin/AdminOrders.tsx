import React, { useState } from 'react';
import { Search, Filter, Eye, MessageCircle, Truck, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const AdminOrders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      customerName: 'Sarah Wijaya',
      customerEmail: 'sarah.wijaya@email.com',
      customerPhone: '081234567890',
      items: [
        {
          name: 'iPhone 15 Pro Max',
          storage: '256GB',
          color: 'Natural Titanium',
          quantity: 1,
          price: 21999000
        }
      ],
      total: 21999000,
      status: 'pending',
      date: '2024-01-15T10:30:00',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10220',
      notes: 'Mohon packing dengan bubble wrap extra'
    },
    {
      id: 'ORD-002',
      customerName: 'Ahmad Fauzi',
      customerEmail: 'ahmad.fauzi@email.com',
      customerPhone: '081234567891',
      items: [
        {
          name: 'iPhone 15',
          storage: '128GB',
          color: 'Pink',
          quantity: 1,
          price: 14999000
        }
      ],
      total: 14999000,
      status: 'confirmed',
      date: '2024-01-15T09:15:00',
      address: 'Jl. Gatot Subroto No. 456, Bandung, Jawa Barat 40123',
      notes: ''
    },
    {
      id: 'ORD-003',
      customerName: 'Lisa Pratiwi',
      customerEmail: 'lisa.pratiwi@email.com',
      customerPhone: '081234567892',
      items: [
        {
          name: 'iPhone 14 Pro',
          storage: '256GB',
          color: 'Deep Purple',
          quantity: 1,
          price: 17999000
        }
      ],
      total: 17999000,
      status: 'shipped',
      date: '2024-01-14T14:20:00',
      address: 'Jl. Malioboro No. 789, Yogyakarta, DIY 55213',
      notes: 'Kirim secepatnya'
    },
    {
      id: 'ORD-004',
      customerName: 'Budi Santoso',
      customerEmail: 'budi.santoso@email.com',
      customerPhone: '081234567893',
      items: [
        {
          name: 'iPhone 13',
          storage: '128GB',
          color: 'Midnight',
          quantity: 2,
          price: 10999000
        }
      ],
      total: 21998000,
      status: 'delivered',
      date: '2024-01-14T11:45:00',
      address: 'Jl. Diponegoro No. 321, Surabaya, Jawa Timur 60241',
      notes: 'Untuk hadiah ulang tahun'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800'
    };
    
    const labels = {
      pending: 'Menunggu Konfirmasi',
      confirmed: 'Dikonfirmasi',
      shipped: 'Dikirim',
      delivered: 'Selesai'
    };

    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // In real app, this would make an API call
    console.log(`Updating order ${orderId} to status ${newStatus}`);
  };

  const contactCustomer = (order: any) => {
    const message = `Halo ${order.customerName},

Terima kasih telah berbelanja di iPhone Inter.

Pesanan Anda:
ID: ${order.id}
Status: ${order.status}
Total: ${formatPrice(order.total)}

Ada yang bisa kami bantu?

Terima kasih!
iPhone Inter Team`;

    const whatsappUrl = `https://wa.me/${order.customerPhone.replace(/^0/, '62')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Pesanan</h1>
          <p className="text-gray-600">Pantau dan kelola semua pesanan pelanggan</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Cari pesanan atau nama pelanggan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Semua Status</option>
                <option value="pending">Menunggu Konfirmasi</option>
                <option value="confirmed">Dikonfirmasi</option>
                <option value="shipped">Dikirim</option>
                <option value="delivered">Selesai</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID Pesanan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pelanggan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produk
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{order.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{order.customerName}</p>
                        <p className="text-sm text-gray-500">{order.customerPhone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        {order.items.map((item, index) => (
                          <div key={index} className="text-sm">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-gray-500">{item.storage} • {item.color} • {item.quantity}x</p>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-gray-900">{formatPrice(order.total)}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-500">{formatDate(order.date)}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-blue-600 hover:text-blue-700 p-1"
                          title="Lihat Detail"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => contactCustomer(order)}
                          className="text-green-600 hover:text-green-700 p-1"
                          title="Hubungi via WhatsApp"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Tidak ada pesanan yang ditemukan</p>
            </div>
          )}
        </div>

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Detail Pesanan {selectedOrder.id}</h2>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Customer Info */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Informasi Pelanggan</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p><span className="font-medium">Nama:</span> {selectedOrder.customerName}</p>
                    <p><span className="font-medium">Email:</span> {selectedOrder.customerEmail}</p>
                    <p><span className="font-medium">Telepon:</span> {selectedOrder.customerPhone}</p>
                    <p><span className="font-medium">Alamat:</span> {selectedOrder.address}</p>
                    {selectedOrder.notes && (
                      <p><span className="font-medium">Catatan:</span> {selectedOrder.notes}</p>
                    )}
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Detail Produk</h3>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.storage} • {item.color}</p>
                          <p className="text-sm text-gray-600">Jumlah: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total Pesanan:</span>
                      <span className="text-lg font-bold text-blue-600">{formatPrice(selectedOrder.total)}</span>
                    </div>
                  </div>
                </div>

                {/* Status Update */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Update Status</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Status saat ini:</span>
                    {getStatusBadge(selectedOrder.status)}
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'confirmed')}
                      className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Konfirmasi
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'shipped')}
                      className="flex items-center px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      <Truck className="h-4 w-4 mr-1" />
                      Kirim
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'delivered')}
                      className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Selesai
                    </button>
                    <button
                      onClick={() => contactCustomer(selectedOrder)}
                      className="flex items-center px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;