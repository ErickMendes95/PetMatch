"use client";

import { useAuth } from "@app/AuthContext";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className="bg-blue-700 flex justify-between gap-2 w-full border-b-4 border-gray-400 pt-2 pb-2">
      <div>
        <Link href="/" className="flex gap-3 items-center ml-2">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={40}
            height={40}
            className="ml-1 object-contain"
          />
          <h1 className="text-3xl text-gray-200">PetMatch</h1>
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="flex gap-2 mr-3">
          <Link href="/pet">
            <button
              type="button"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              Pets
            </button>
          </Link>
          <Link href="/pet/criar">
            <button
              type="button"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              Adicionar Pet
            </button>
          </Link>
          <Link href="/pet/atualizar">
            <button
              type="button"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              Atualizar Pet
            </button>
          </Link>
          <Link 
          href={"/pet"}
          // href={`/user/${id}`}
          >
            <button
              type="button"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              usuario logado
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-2 mr-3">
          <Link href="/user/login">
            <button
              type="button"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              Login
            </button>
          </Link>
          <Link href="/user/cadastro">
            <button
              type="button"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
              Cadastro
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
