"use client";
import { PetModalProps } from "@app/types/types";

const PetModal: React.FC<PetModalProps> = ({ pet, closeModal }) => {
  if (!pet) {
    return null;
  }
  return (
    <div className="text-black fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-900 opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white w-1/2 h-4/6 p-8 rounded-lg z-10 flex flex-row gap-2 justify-around">
        <div className="flex items-center">
          <img src={pet.image} alt="petImage" width={400} />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="">
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <div className="font-bold">Nome:</div>
                <div className="text-sm">{pet.name}</div>
              </div>
              <div className="">
                <div className="font-bold">Raça:</div>
                <div className="text-sm">{pet.race}</div>
              </div>
              <div className="">
                <div className="font-bold">Espécie:</div>
                <div className="text-sm">{pet.species}</div>
              </div>
              <div>
                <div className="font-bold">Peso:</div>
                <div className="text-sm">{pet.weight}kg</div>
              </div>

              <div>
                <div className="font-bold">Sexo:</div>
                <div className="text-sm">{pet.sex}</div>
              </div>
              <div>
                <div className="font-bold">Cidade:</div>
                <div className="text-sm">{pet.city}</div>
              </div>
              <div>
                <div className="font-bold">Estado:</div>
                <div className="text-sm">{pet.state}</div>
              </div>
              <div>
                <div className="font-bold">Adopted:</div>
                <div className="text-sm">{pet.isAdopted ? "Sim" : "Não"}</div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              Quero Adotar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
