import React from 'react'
import { Pokemons, Types } from "@/utils/data";

    const Page = async ({ params }) => {
        const { id } = await params;
        // find pokemon based on its id
        const pokedata = Pokemons.find(item => item.id == id);
  return (
    <div className="flex justify-center items-center h-[100vh]">
        <img src={pokedata.image} width="300px" height="300px" />
      <h1 className="text-[70px]">{pokedata.name}</h1>
    </div>
  )
}

export default Page
