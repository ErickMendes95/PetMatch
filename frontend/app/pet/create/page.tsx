"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { PetData, Size, Sex} from "@app/types/types";

export default async function CreatePet() {
  const [formData, setFormData] = useState<PetData>({
    name: "",
    isAdopted: false,
    species: "",
    size: Size.small,
    weight: 0,
    race: "",
    sex: Sex.M,
    image: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-green-400 flex justify-center items-center h-screen">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Species</span>
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Size</span>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value={Size.small}>Small</option>
                <option value={Size.medium}>Medium</option>
                <option value={Size.large}>Large</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Weight</span>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Race</span>
              <input
                type="text"
                name="race"
                value={formData.race}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Sex</span>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value={Sex.M}>Male</option>
                <option value={Sex.F}>Female</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Image URL</span>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">City</span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">State</span>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
        </div>

        <div className="w-full text-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
