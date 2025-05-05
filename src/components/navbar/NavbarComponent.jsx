import { useCart } from "@/store/cart.store";
import { FaBox } from "react-icons/fa";
import { useStoreFavorite } from "@/store/favorite.store";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function NavbarComponent() {
  const { cartIds } = useCart();
  const cartSize = cartIds?.length || 0;

  const { selectedFavoriteIds } = useStoreFavorite();
  const favoriteSize = selectedFavoriteIds?.length || 0
  return (
    <div className="flex justify-between fixed z-50 items-center bg-fuchsia-900 text-white p-4 h-[70px] w-full">
      <Link href="/" className="font-bold text-4xl">
        Pokemon
      </Link>
      <div className="flex gap-10 items-center">
        {/* Cart Icon */}
        <div className="relative">
          <FaBox size={25} color="white" className="cursor-pointer" />
          <div className="bg-fuchsia-700 text-white py-1 px-2 text-xs rounded-full absolute -top-2 -right-2">
            {cartSize}
          </div>
        </div>

        {/* Favorite Icon */}
        <div className="relative">
          <FaHeart size={25} color="white" className="cursor-pointer" />
          <div className="bg-fuchsia-700 text-white py-1 px-2 text-xs rounded-full absolute -top-2 -right-2">
            {favoriteSize}
          </div>
        </div>

        {/* Contact Link */}
        <Link
          href="/contact"
          className="cursor-pointer hover:text-fuchsia-300 transition duration-300"
        >
          Contact
        </Link>

        {/* Auth Section */}
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
