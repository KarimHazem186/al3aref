import React from 'react'


const products = {
  superDeals: [
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/chair/chair_1.png" },
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/chair/chair_2.png" },
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/chair/chair_3.png" },
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/chair/chair_1.png" },
  ],
  megaDeals: [
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/sofa/sofa_1.png" },
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/sofa/sofa_2.png" },
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/sofa/sofa_3.png" },
    { title: "Accent chair crafted from", price: 18550, oldPrice: 26550, image: "./assets/sofa/sofa_1.png" },
  ],
};

const DealsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <div className="bg-[#FFF1DC] p-4 rounded-lg">
        <h2 className="text-center text-2xl font-semibold italic mb-4 text-primary">Super Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.superDeals.map((p, idx) => (
            <div key={idx} className="bg-[#FFF9F1] p-4 rounded-lg shadow-sm">
              <span className="bg-green-200 text-green-900 text-xs px-2 py-1 rounded font-medium">
                Furniture
              </span>
              <img src={p.image} alt={p.title} className="mx-auto my-3 h-24 object-contain" />
              <p className="text-sm text-center">{p.title}</p>
              <div className="text-center mt-2">
                <span className="font-bold">₹{p.price}</span>{" "}
                <span className="line-through text-gray-500">₹{p.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-center text-2xl font-semibold italic mb-4 text-primary">Mega Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.megaDeals.map((p, idx) => (
            <div key={idx} className="bg-yellow-50 p-4 rounded-lg shadow-sm">
              <span className="bg-green-200 text-green-900 text-xs px-2 py-1 rounded font-medium">
                Furniture
              </span>
              <img src={p.image} alt={p.title} className="mx-auto my-3 h-24 object-contain" />
              <p className="text-sm text-center">{p.title}</p>
              <div className="text-center mt-2">
                <span className="font-bold">₹{p.price}</span>{" "}
                <span className="line-through text-gray-500">₹{p.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealsSection