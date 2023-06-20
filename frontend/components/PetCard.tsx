import React from "react";
import Link from "next/link";
import { FaMars, FaVenus } from "react-icons/fa";
import { Sex, Size, PetData } from "@app/types/types";


interface PetCardProps {
  pet: PetData;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <div className="text-black border border-blue-300 rounded-xl flex flex-col justify-between">
      <Link href={`/pet/${pet.id}`}>
        <div>
          <img
            src={pet.image}
            alt={pet.name}
            className="border rounded-xl cursor-pointer"
          />
        </div>
      </Link>
      <div className="px-4 mt-2 flex justify-between">
        <div className="text-lg font-bold">{pet.name}</div>
        {pet.sex === 'M' ? (
          <FaMars className="text-blue-500 mx-1 mt-1 text-xl" />
        ) : (
          <FaVenus className="text-pink-500 mx-1 mt-1 text-xl" />
        )}
      </div>
      <div className="px-4 mt-1 text-sm text-gray-500">
        {pet.city}, {pet.state}
      </div>
      <button
        className="mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded mb-3"
        onClick={() => console.log("Quero adotar!")}
      >
        Quero adotar
      </button>
    </div>
  );
};
export default PetCard;
