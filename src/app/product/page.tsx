'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type ProductFromAPI = {
  product_id: number;
  product_name: string;
  product_brand: string;
  created_date: string;
  owner_name?: string;
};

export default function ProductTablePage() {
  const [products, setProducts] = useState<ProductFromAPI[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Daftar Produk Kami</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-indigo-100 text-indigo-700">
              <tr>
                <th className="px-6 py-3 font-semibold">ID</th>
                <th className="px-6 py-3 font-semibold">Product Name</th>
                <th className="px-6 py-3 font-semibold">Product Brand</th>
                <th className="px-6 py-3 font-semibold">Product Owner</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.product_id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{product.product_id}</td>
                  <td className="px-6 py-4">{product.product_name}</td>
                  <td className="px-6 py-4">{product.product_brand}</td>
                  <td className="px-6 py-4">{product.owner_name || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => router.push('/landing')}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-medium font-ubuntu cursor-pointer"
        >
          Back to Page
        </button>
      </div>
    </main>
  );
}
