import React from 'react';
import Navbar from './Nav';
import Footer from './Footer';


import S24Ultra from '../Images/S24Ultra.svg';
import S24 from '../Images/S24.svg';
import S241 from '../Images/S241.svg';
import S242 from '../Images/S242.svg';
import ZFold4 from '../Images/ZFold4.svg';
import Note10 from '../Images/Note10.svg';
import S23 from '../Images/S23.svg';
import S21 from '../Images/S21.svg';
import Silver from '../Images/Silver.svg';
import Grey from '../Images/Grey.svg';
import Cart from '../Images/cart2.svg';
import Ratings from '../Images/Ratings.svg';
import Loves from '../Images/Loves.svg';
import Love from '../Images/Love.svg';
import Sub from '../Images/Sub.svg';
import Add from '../Images/Add.svg'

const products = [
  { name: 'Samsung Galaxy S23 Ultra 5G 8GB + 256GB', price: '₦600,000', image: S23, reviews: 21 },
  { name: 'Samsung Galaxy Z Fold 4 5G (16GB + 256GB)', price: '₦900,000', image: ZFold4, reviews: 21 },
  { name: 'Samsung Galaxy Note 10Plus - 6.8" (256GB/12GB)', price: '₦780,000', image: Note10, reviews: 21 },

  { name: 'Samsung Galaxy S21 Ultra 5G Single Sim (12GB + 128GB)', price: '₦200,000', image: S21, reviews: 21 },
];

const ProductCard = () => {
  return (
    <>
    <Navbar/>
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Samsung Galaxy S24 Ultra 5G (12GB+512GB) Dual Sim</h1>
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-3" style={{ flex: '0 0 49%' }}>
          <div className="mb-3 bg-white flex justify-center rounded-2xl">
            <img src={S24Ultra} alt="Display" style={{ width: '500px' }} className="h-auto" />
          </div>
          <div className="flex gap-5">
            <div className="bg-white p-2 flex-1 flex items-center justify-center"><img src={S24} alt="S24 Gold" className="w-112 h-auto" /></div>
            <div className="bg-white p-2 flex-1 flex items-center justify-center"><img src={S242} alt="S24" className="w-112 h-auto" /></div>
            <div className="bg-white p-2 flex-1 flex items-center justify-center"><img src={S241} alt="S24 Bronze" className="w-112 h-auto" /></div>
          </div>
        </div>
        <div className="flex-1 bg-white  rounded-lg p-4" style={{ flex: '0 0 49%' }}>
          <div className="flex justify-end pt-5 pb-3 ">
            <button className="flex items-center mb-2 rounded-xl border border-[#0F6100] text-[#0F6100] p-2 cursor-pointer">
              <img src={Loves} alt="Fav" className="w-5 h-auto mr-2" />
              <p className="font-bold">Add to Favourite</p>
            </button>
          </div>
          <div className="mb-3 bg-white">
            <p className=" leading-7 pb-3 tracking-wide" >
              The Samsung Galaxy S24 Ultra 5G features a 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate, powered by Snapdragon 8 Gen 3 or Exynos 2400 processors. It boasts a 200 MP quad-camera system, a durable titanium frame, IP68 rating, and a 5000 mAh battery. Running on Android 14 with One UI 6.1, it includes an enhanced S Pen for added functionality.
            </p>
            <div className="mt-5 pt-3 space-y-3 tracking-wide">
              <h2 className=" text-3xl font-bold">Main Features</h2>
              <p><b>Network:</b> 5G</p>
              <p><b>Display:</b> 6.8 inches</p>
              <p><b>Camera (rear):</b> 200 MP</p>
              <p><b>Battery:</b> Li-Ion, 5000 mAh</p>
              <p><b>Operating System:</b> Android 14</p>
              <p><b>Memory:</b> 12GB+512GB</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-white pt-5"> 
            <div className="flex space-x-2 gap-2">
              <p className=" text-xl" ><b>Color:</b></p>
              <div className="flex items-center border border-[#CCCBCB] rounded-lg bg-[#CCCBCB] px-3">
                <img src={Grey} alt="Grey" className="w-8 h-auto mr-2" />
                <b>Black Grey</b>
              </div>
              <div className="flex items-center rounded-lg p-2">
                <img src={Silver} alt="Silver" className="w-8 h-auto mr-2" />
                <b>Silver</b>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img src={Sub} alt="Sub" className="w-8 h-8 p-1 border-2 border-[#6A6A6A] rounded-2xl" />
              <p className="px-6 py-3.5 border-2 border-black ">1</p>
              <img src={Add} alt="Add" className="w-8 h-8 p-1 border-2 border-[#6A6A6A] rounded-2xl" />
             </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="bg-white p-3 rounded-xl tracking-wide">
          <p className=" text-3xl py-5 font-bold">Specifications</p>
          <div className="mb-3 space-y-3">
            <p>Design and Build:</p>
            <ul className="list-disc list-inside pl-3">
              <li>Frame: Titanium, offering increased durability and resistance to corrosion and accidental bumps.</li>
              <li>Dimensions: 162.3 x 79 x 8.6 mm</li>
              <li>Weight: 233 grams</li>
              <li>Display Protection: Gorilla Glass Armor, the toughest glass protection yet from Corning.</li>
              <li>Water and Dust Resistance: IP68 rating.</li>
            </ul>
            <p>Display:</p>
            <ul className="list-disc list-inside  pl-3">
              <li>Type: Dynamic AMOLED 2X</li>
              <li>Size: 6.8 inches</li>
              <li>Resolution: QHD+ (3200 x 1440)</li>
              <li>Refresh Rate: Up to 120Hz</li>
            </ul>
            <p>Performance:</p>
            <ul className="list-disc list-inside  pl-3">
              <li>Processor: Qualcomm Snapdragon 8 Gen 3 or Exynos 2400 (varies by region)</li>
              <li>RAM: Options for 12GB or 16GB</li>
              <li>Storage: Options for 256GB, 512GB, or 1TB</li>
            </ul>
            <p>Camera System:</p>
            <ul className="list-disc list-inside  pl-3">
              <li>Main Camera: Quad setup</li>
              <li className="pl-3">Primary Sensor: 200 MP</li>
              <li className="pl-3">Ultra-wide Sensor: 12 MP</li>
              <li className="pl-3">Telephoto Sensor: 10 MP (3x optical zoom)</li>
              <li className="pl-3">Periscope Telephoto Sensor: 10 MP (10x optical zoom)</li>
              <li>Front Camera: 40 MP</li>
            </ul>
            <p>Battery:</p>
            <ul className="list-disc list-inside  pl-3">
              <li>Capacity: 5000 mAh</li>
              <li>Charging: 45W wired, 15W wireless, reverse wireless charging</li>
            </ul>
            <p>Software:</p>
            <ul className="list-disc list-inside  pl-3">
              <li>Operating System: Android 14 with One UI 6.1</li>
            </ul>
            <p>Additional Features:</p>
            <ul className="list-disc list-inside  pl-3">
              <li>S Pen: Included, with enhanced design and integration.</li>
              <li>Sustainability: Constructed with more recycled materials, and the packaging is made from 100% recycled paper.</li>
            </ul>
          </div>
          <div className="flex justify-end py-5">
            <button className="flex items-center bg-[#0F6100]  px-28 py-2 border border-[#0F6100]  rounded-lg cursor-pointer">
              <img src={Cart} alt="Cart" className="w-5 h-auto mr-2" />
              <p className="text-[#DEFFD8]"><b>Add to Cart</b></p>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
      <div className="flex justify-between items-center mb-5 pt-8">
        <h2 className="text-3xl font-semibold">Recommendations</h2>
        <button className="flex items-center border border-[#0F6100] p-2 px-3 rounded-lg cursor-pointer">
          <b className="text-[#0F6100]">See More</b>
        </button>
      </div>
      <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-9">
          {products.map((product, index) => (
            <div className="product bg-white p-2 rounded-md relative pb-6" key={index}>
              <div className="bg-[#FAFAFA] w-full h-auto flex flex-col py-12 relative">
                <img src={Love} alt="Fav" className="favorite-icon absolute top-2 right-2 cursor-pointer z-10" />
                <div className="product-image h-64 w-full bg-contain bg-center bg-no-repeat rounded-md" style={{ backgroundImage: `url(${product.image})` }}></div>
             </div>

              <div className="product-info mt-2 px-2">
                <h3 className="font-semibold tracking-wide space-y-3 py-2">{product.name}</h3>
                <p className="text-xl font-bold">{product.price}</p>
                <div className="product-reviews flex items-center text-base">
                  <span className="inline-block mr-2 py-2"><img src={Ratings} alt="Ratings" className="Rate" /></span> ({product.reviews} reviews)
                </div>

                <button className="add-to-cart  gap-2 mt-2 bg-[#0F6100] text-[#DEFFD8] px-3 py-2 rounded-xl flex items-center justify-center">
                  <img src={Cart} alt="Cart" className="w-5 h-5 mr-1" /> 
                  <b>Add to Cart</b>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductCard;
