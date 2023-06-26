'use client'

import React, { useState } from "react";
// import { Size, Sex, CreatePet } from "@app/types/types";

export enum Sex {
  M = "M",
  F = "F",
}

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}


export interface CreatePet {
  name: string;
  species: string;
  size: Size;
  weight: number;
  race: string;
  sex: Sex;
  image: string;
  city: string;
  state: string;
}

const CriarPet: React.FC = () => {
  const [pet, setPet] = useState<CreatePet>({
    name: "",
    species: "",
    size: Size.small,
    weight: 0,
    race: "",
    sex: Sex.M,
    image: "",
    city: "",
    state: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar os dados do pet para o backend ou realizar outras ações necessárias
    console.log("Pet data:", pet);
    // Limpar o formulário após a submissão, se necessário
    setPet({
      name: "",
      species: "",
      size: Size.small,
      weight: 0,
      race: "",
      sex: Sex.M,
      image: "",
      city: "",
      state: "",
    });
  };

  return (
    <div className="text-black flex justify-center items-center min-h-screen bg-cover" style={{ backgroundImage: 'url(/pets.jpg)' }}>
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-3xl text-center mb-8">Criar Novo Pet</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={pet.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="species" className="block text-gray-700 font-bold mb-2">
                Espécie
              </label>
              <input
                type="text"
                id="species"
                name="species"
                value={pet.species}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="size" className="block text-gray-700 font-bold mb-2">
                Tamanho
              </label>
              <select
                id="size"
                name="size"
                value={pet.size}
                onChange={handleSelectChange}
                className="w-full px-3 py-2 border rounded-md bg-white"
                required
              >
                <option value={Size.small}>Pequeno</option>
                <option value={Size.medium}>Médio</option>
                <option value={Size.large}>Grande</option>
              </select>
            </div>
            <div>
              <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
                Peso
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={pet.weight}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="race" className="block text-gray-700 font-bold mb-2">
                Raça
              </label>
              <input
                type="text"
                id="race"
                name="race"
                value={pet.race}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="sex" className="block text-gray-700 font-bold mb-2">
                Sexo
              </label>
              <select
                id="sex"
                name="sex"
                value={pet.sex}
                onChange={handleSelectChange}
                className="w-full px-3 py-2 border rounded-md bg-white"
                required
              >
                <option value={Sex.M}>Macho</option>
                <option value={Sex.F}>Fêmea</option>
              </select>
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                Imagem
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={pet.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                Cidade
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={pet.city}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
                Estado
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={pet.state}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
            >
              Criar Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CriarPet;
