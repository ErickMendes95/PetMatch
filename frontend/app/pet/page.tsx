"use client";

import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PetData } from "@app/types/types";
import { PetCard } from "@components";
import PetModal from "@components/PetModal";

const Pets: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pets, setPets] = useState<PetData[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/pet");
        setPets(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const imageClick = (pet: PetData) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  if(isLoading) return <div className="mt-5 text-center text-red-500 text-2xl">Carregando...</div>

  return (
    <div className="mt-5 text-center">
      <h2 className="text-blue-400 text-3xl font-bold mb-4">
        Vejam nossos pets
      </h2>
      <div className="grid grid-cols-4 gap-3 px-8 py-2">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} imageClick={imageClick} />
        ))}
      {isModalOpen && <PetModal pet={selectedPet} closeModal={() => setIsModalOpen(false)}/>}
      </div>
    </div>
  );
};

export default Pets;
