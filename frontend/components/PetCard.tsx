import React from "react";
import Link from "next/link";
import { FaMars, FaVenus } from "react-icons/fa";
import { Sex, Size, PetData, PetCardProps } from "@app/types/types";

const PetCard: React.FC<PetCardProps> = ({ pet, imageClick }) => {
  const showModal = () => {
    imageClick(pet);
  };
  return (
    <div className="text-black border border-blue-300 rounded-xl flex flex-col justify-between">
      <div>
        <img
          src={pet.image}
          alt={pet.name}
          className="border rounded-xl cursor-pointer"
          onClick={showModal}
        />
      </div>

      <div className="px-4 mt-2 flex justify-between">
        <div className="text-lg font-bold">{pet.name}</div>
        {pet.sex === "M" ? (
          <FaMars className="text-blue-500 mx-1 mt-1 text-xl" />
        ) : (
          <FaVenus className="text-pink-500 mx-1 mt-1 text-xl" />
        )}
      </div>
      <div className="px-4 mt-1 text-sm flex items-start text-gray-500">
        {pet.city}, {pet.state}
      </div>
      <button
        className="mx-auto mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded mb-3"
        onClick={() => console.log("Quero adotar!")}
      >
        Quero adotar
      </button>
    </div>
  );
};
export default PetCard;
