'use client'

import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PetData } from "@app/types/types";
import { PetCard } from "@components";

export default function Pets() {
  const [pets, setPets] = useState<PetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/pet");
        setPets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-5 text-center">
      <h2 className="text-blue-400 text-3xl font-bold mb-4">Vejam nossos pets</h2>
      <div className="grid grid-cols-3 gap-3">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
  
}
