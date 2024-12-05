/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Image from "next/image";

// Define the type for the product object
interface Product {
  name: string;
  image: string;
  discount: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
}

function FreshSales() {
  return (
    <main>
      {/* Header Section */}
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">Today&apos;s</h3>
            <div className="flex">
              <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Fresh Sales</h1>
              <Image
                src="/images/freesh/freesh.png"
                width={200}
                height={200}
                className="ml-10 sm:hidden md:block"
                alt="Fresh Sales"
              />
            </div>
          </div>

          {/* Product Boxes */}
          <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap gap-4">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* View All Products Button */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[80%] flex justify-center border-b-2 border-neutral-100 pb-10">
          <button className="bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm">View All Products</button>
        </div>
      </div>
    </main>
  );
}

// Product Box Component
const ProductBox = ({ product }: { product: Product }) => (
  <div>
    <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
      <Image src={product.image} width={150} height={100} alt={product.name} />
      <span className="bg-red-500 px-2 rounded-md text-white absolute top-0 left-0">{product.discount}</span>
      <span className="absolute top-1 right-1 text-red rounded-full">
        <FontAwesomeIcon icon={faHeart} className="text-xl" />
      </span>
      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
    </div>
    <h1 className="font-bold font-sans pt-2">{product.name}</h1>
    <span className="text-red-500 font-bold">{product.price}</span>
    <span className="text-gray-400 font-bold line-through ml-2">{product.originalPrice}</span>
    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={i < product.rating ? solidStar : regularStar}
        />
      ))}
      <span className="text-gray-400">({product.reviews})</span>
    </div>
  </div>
);

// Mock Product Data
const products: Product[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image: "/images/freesh/gaming.png",
    discount: "-40%",
    price: "$120",
    originalPrice: "$160",
    rating: 4,
    reviews: 88,
  },
  {
    name: "AK-900 Wired Keyboard",
    image: "/images/freesh/keyboard.png",
    discount: "-25%",
    price: "$920",
    originalPrice: "$1160",
    rating: 4,
    reviews: 90,
  },
  {
    name: "IPS LCD Gaming Monitor",
    image: "/images/freesh/lcd.png",
    discount: "-32%",
    price: "$1500",
    originalPrice: "$2240",
    rating: 4,
    reviews: 95,
  },
  {
    name: "S-Series Comfort Chair",
    image: "/images/freesh/chair.png",
    discount: "-40%",
    price: "$320",
    originalPrice: "$630",
    rating: 4,
    reviews: 99,
  },
];

export default FreshSales;
