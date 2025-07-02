import React from 'react';
import { BarChart3, TrendingUp, Package, Users, ShoppingCart, Star } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const AdminDashboard: React.FC = () => {
  // Mock data - in real app, this would come from API
  const stats = [
    {
      name: 'Total Pesanan',
      value: '148',
      change: '+12%',
      changeType: 'positive',
      icon: ShoppingCart
    },
    {
      name: 'Penjualan Bulan Ini',
      value: 'Rp 245.6M',
      change: '+18%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      name: 'Produk Aktif',
      value: '24',
      change: '+2',
      changeType: 'positive',
      icon: Package
    },
    {
      name: 'Pengguna Terdaftar',
      value: '567',
      change: '+23%',
      changeType: 'positive',
      icon: Users
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Sarah Wijaya',
      product: 'iPhone 15 Pro Max 256GB',
      amount: 'Rp 21.999.000',
      status: 'pending',
      date: '2024-01-15'
    },
    {
      id: 'ORD-002',
      customer: 'Ahmad Fauzi',
      product: 'iPhone 15 128GB',
      amount: 'Rp 14.999.000',
      status: 'confirmed',
      date: '2024-01-15'
    },
    {
      id: 'ORD-003',
      customer: 'Lisa Pratiwi',
      product: 'iPhone 14 Pro 256GB',
      amount: 'Rp 17.999.000',
      status: 'shipped',
      date: '2024-01-14'
    },
    {
      id: 'ORD-004',
      customer: 'Budi Santoso',
      product: 'iPhone 13 128GB',
      amount: 'Rp 10.999.000',
      status: 'delivered',
      date: '2024-01-14'
    }
  ];

  const topProducts = [
    {
      name: 'iPhone 15 Pro Max',
      sales: 45,
      revenue: 'Rp 989.5M'
    },
    {
      name: 'iPhone 15 Pro',
      sales: 38,
      revenue: 'Rp 721.6M'
    },
    {
      name: 'iPhone 15',
      sales: 32,
      revenue: 'Rp 479.7M'
    },
    {
      name: 'iPhone 14 Pro',
      sales: 28,
      revenue: 'Rp 503.7M'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800'
    };
    
    const labels = {
      pending: 'Menunggu',
      confirmed: 'Dikonfirmasi',
      shipped: 'Dikirim',
      delivered: 'Selesai'
    };

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Ringkasan aktivitas dan performa iPhone Inter</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white rounded-lg border p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Pesanan Terbaru</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{order.id}</span>
                        {getStatusBadge(order.status)}
                      </div>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{order.amount}</p>
                      <p className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString('id-ID')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Produk Terlaris</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">#{index + 1}</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.sales} terjual</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Package className="h-6 w-6 text-blue-600 mr-3" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Tambah Produk</p>
                <p className="text-xs text-gray-500">Tambah produk iPhone baru</p>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <ShoppingCart className="h-6 w-6 text-green-600 mr-3" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Kelola Pesanan</p>
                <p className="text-xs text-gray-500">Lihat dan kelola pesanan</p>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Lihat Laporan</p>
                <p className="text-xs text-gray-500">Analisis penjualan detail</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;