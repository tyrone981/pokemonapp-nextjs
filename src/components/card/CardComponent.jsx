import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useStoreFavorite } from "../../store/favorite.store";
import { useCart } from "../../store/cart.store";

export default function CardComponent({ id, image, name, type, hp, attack }) {
  const { selectedFavoriteIds, toggleHeartIcon } = useStoreFavorite();
  const { addToCart, cartIds, removeFromCart } = useCart();

  const isSelected = selectedFavoriteIds.includes(id);
  const isInCart = cartIds?.includes(id) || false;

  return (
    <div className="border-2 relative w-[400px] h-[530px] overflow-hidden border-gray-200 rounded-md">
      {/* Image area */}
      <Link
        href={`/pokemon/${id}`}
        className="flex overflow-hidden justify-center items-center w-full bg-gray-200"
      >
        <img src={image} width="100%" height="100%" alt={name} />
      </Link>

      {/* Content area */}
      <div className="mt-4 p-4">
        <h1 className="text-2xl font-bold">{name}</h1>

        {/* Heart icon */}
        <FaHeart
          onClick={() => toggleHeartIcon(id)}
          size={25}
          color={isSelected ? "red" : "white"}
          className="absolute top-2 right-2 cursor-pointer"
        />

        {/* Type badge */}
        <div className="bg-fuchsia-900 opacity-[0.9] text-white py-2 px-5 rounded-full absolute top-2 left-2 flex items-center justify-center">
          <h3 className="font-bold">{type}</h3>
        </div>

        {/* Toggle cart button */}
        <button
          className={`mt-4 ${
            isInCart
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white py-2 px-4 rounded-md w-full cursor-pointer transition duration-300`}
          onClick={() => (isInCart ? removeFromCart(id) : addToCart(id))}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
