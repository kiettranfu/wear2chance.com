import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User } from "lucide-react";

const products = [
  { id: 1, name: "Basic Slim Fit T-Shirt", price: "$199", image: "/images/ao.jpg" },
  { id: 2, name: "Basic Heavy Weight T-Shirt", price: "$199", image: "/images/ao.jpg" },
  { id: 3, name: "Full Sleeve Zipper", price: "$199", image: "/images/ao.jpg" },
  { id: 4, name: "Casual Cotton Shirt", price: "$199", image: "/images/ao.jpg" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          <button className="text-gray-700 text-2xl">☰</button>
          <h1 className="text-xl font-bold">SecondHand Shop</h1>
        </div>
        <div className="relative w-1/3">
          <Input placeholder="Search" className="pl-10 border-gray-300" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-4">
          <ShoppingCart className="text-gray-700" />
          <User className="text-gray-700" />
        </div>
      </header>
      
      <div className="flex">
        {/* Sidebar bộ lọc */}
        <aside className="w-1/4 p-4 border-r hidden md:block">
          <h2 className="font-semibold mb-2">Filters</h2>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', '2X'].map(size => (
                <Button key={size} variant="outline" className="text-gray-700 border-gray-400 w-full">{size}</Button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Availability</h3>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Availability
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Out of Stock
            </label>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Category</h3>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Colors</h3>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Price Range</h3>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Collections</h3>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Tags</h3>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Ratings</h3>
          </div>
        </aside>
        
        {/* Danh sách sản phẩm */}
        <main className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4">
          {products.map((product) => (
            <Card key={product.id} className="bg-white border-gray-300 shadow-sm hover:shadow-lg transition">
              <CardContent className="p-2">
                <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg" />
                <p className="mt-2 font-semibold text-gray-800">{product.name}</p>
                <p className="text-sm text-gray-600">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center mt-auto">
        © 2025 SecondHand Shop. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
