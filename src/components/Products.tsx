import React from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { FaSearchPlus } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";

import Link from "next/link";

import { productData } from "./Data";

export const obj = [
  {
    title: "Cantilever chair",
    descrtipion: "lorem 30 the name of the products",
    code: "Y523201",
    oldprice: "42.00",
    image: "/image4.png",
    dis: 35,
    price:"42.00",
    id: 30,
    description: "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . "
  },
  {
    title: "Cantilever chair",
    descrtipion: "lorem 30 the name of the products",
    code: "Y523201",
    oldprice: "42.00",
    dis: 30,
    price:"42.00",
    image: "/chairfor.png",
    id: 31,
    description: " Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr. Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. "
  },
  {
    title: "Cantilever chair",
    descrtipion: "lorem 30 the name of the products",
    code: "Y523201",
    oldprice: "42.00",
    dis: 28,
    price:"42.00",
    image: "/image3.png",
    id: 32,
    description: " Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr ."
  },
  {
    title: "Cantilever chair",
    descrtipion: "lorem 30 the name of the products",
    code: "Y523201",
    price:"42.00",
    oldprice: "42.00",
    dis: 15,
    image: "/image2.png",
    id: 33,
    description: " Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr. Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt."
  },
];

const Products = () => {
  return (
    <div className="max-w-[1177px] mx-auto px-4">
      <h2 className="text-[42px] font-semibold text-center mb-8 mt-16 font-josefin text-[#151875]">
        Featured Products
      </h2>
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {productData.featuredProducts.map((items, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-[270px] h-[361px] bg-white shadow-lg overflow-hidden relative">
              <div className="relative w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center">
                <div className="w-[178px] h-[178px] flex items-center justify-center">
                  <Image
                    src={items.image}
                    alt={items.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                  <div className="bg-[#eeeffb] h-[30px] w-[30px] p-2 rounded-full flex items-center justify-center">
                    <PiShoppingCartSimple size={19} className="text-[#151875]" />
                  </div>
                  <div className="p-2">
                    <GoHeart size={17} className="text-[#1DB4E7]" />
                  </div>
                  <div className="p-2">
                    <FaSearchPlus size={15} className="text-[#1DB4E7]" />
                  </div>
                </div>
                <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  
                <Link href={ `/products/${items.id}`}>
                <button className="bg-[#08D15F] text-white py-2 px-4 rounded-[2px] w-[94px] h-[29px] flex items-center gap-2 text-[12px] whitespace-nowrap">
                    View Details
                  </button>
            </Link>
                  
                </div>
              </div>
              <div className="p-4 flex flex-col items-center gap-2 group-hover:bg-[#2F1AC4] group-hover:text-white transition-all">
                <div className="font-lato font-semibold text-[18px] group-hover:text-white text-[#FB2E86]">
                  {items.name}
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <div className="h-[4px] rounded-[10px] w-[14px] bg-[#05E6B7]"></div>
                  <div className="h-[4px] rounded-[10px] w-[14px] bg-[#F701A8]"></div>
                  <div className="h-[4px] rounded-[10px] w-[14px] group-hover:bg-white bg-[#00009D]"></div>
                </div>
                <div className="font-josefin text-[14px] group-hover:text-white text-[#151875]">
                  {`Code - ${items.code}`}
                </div>
                <div className="text-[14px] group-hover:text-white text-[#151875]">
                  {`$${items.price}`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
