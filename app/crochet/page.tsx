"use client";

import { crochetItems } from "@/data/crochet";

export default function CrochetPage() {
  return (
    <div className="min-h-screen bg-[#f0e9dc] text-black">
      <div className="px-6 md:px-16 pt-24 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-orange-600 text-sm tracking-widest uppercase mb-4">
            Handmade with Love
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-3">
            Crochet Corner
          </h1>
          <p className="text-gray-600">
            Managed by <a href="#" className="underline">@thekalacrochet</a>
          </p>
        </div>
        <a href="https://instagram.com/thekalacrochet" target="_blank" className="bg-orange-600 text-white px-6 py-3 rounded-full whitespace-nowrap hover:bg-orange-700 transition-colors">
          Order via DM
        </a>
      </div>

      <div className="px-6 md:px-16 pb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {crochetItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-square mb-3">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-orange-600 text-white text-sm px-4 py-2 rounded-full">
                  DM to Order
                </span>
              </div>
            </div>
            <h3 className="font-serif text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.category}</p>
            <p className="text-orange-700 font-medium mt-1">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-16 pb-16 text-center text-gray-600 text-sm">
        Custom orders welcome. Prices vary by size and complexity. DM <span className="text-orange-700">@arts.hiyaa</span> on Instagram to order.
      </div>
    </div>
  );
}