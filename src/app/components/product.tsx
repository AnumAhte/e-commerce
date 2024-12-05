/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "The North Coat",
    price: 260,
    originalPrice: 360,
    rating: 4,
    reviews: 88,
    image: "/images/bestSeling/shirt.png",
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 90,
    image: "/images/bestSeling/prs.png",
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 95,
    image: "/images/bestSeling/speaker.png",
  },
  {
    id: 4,
    name: "Small Bookshelf",
    price: 320,
    originalPrice: null,
    rating: 4,
    reviews: 99,
    image: "/images/bestSeling/table.png",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div>
      <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
        <Image
          src={product.image}
          width={150}
          height={100}
          alt={product.name}
        />
        <span className="absolute top-1 right-1 text-red rounded-full">
          <FontAwesomeIcon icon={faHeart} className="text-xl" />
        </span>
        <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add to Cart
        </button>
      </div>
      <h1 className="font-bold font-sans pt-2">{product.name}</h1>
      <span className="text-red-500 font-bold">${product.price}</span>
      {product.originalPrice && (
        <span className="text-gray-400 font-bold line-through ml-2">
          ${product.originalPrice}
        </span>
      )}
      <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={index < product.rating ? solidStar : regularStar}
          />
        ))}
        <span className="text-gray-400">({product.reviews})</span>
      </div>
    </div>
  );
}

function Products() {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
              This Month
            </h3>
            <div className="flex justify-between">
              <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
                Best Selling Products
              </h1>
              <Link
                href={"#products"}
                className="bg-red-500 pt-2 hover:bg-red-600 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white rounded-sm h-10 mt-3"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
