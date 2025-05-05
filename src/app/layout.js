import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { 
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
   } from '@clerk/nextjs'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokemon App",
  description: "A dynamic Pokémon web application for browsing, searching, and learning about Pokémon characters, types, stats, and evolutions using the PokéAPI. Built with Next.js and styled for responsive performance.",
  icons: {
    icon: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    apple: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    shortcut: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  openGraph: {
    title: "Pokémon Explorer - Web App",
    description:
      "Browse, search, and explore Pokémon characters with real-time data from the PokéAPI. Beautiful, fast, and responsive Pokémon web app built with Next.js.",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", // update with your actual URL
    siteName: "Pokémon Explorer",
    images: [
      {
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", // change this to your OG image URL
        width: 1200,
        height: 630,
        alt: "Pokémon Explorer Web App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Explorer - Web App",
    description:
      "Explore detailed Pokémon info with a modern, responsive web app powered by PokéAPI and Next.js.",
    images: ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"], // same image as above
    creator: "@yourhandle", // optional
  },
};
 


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
