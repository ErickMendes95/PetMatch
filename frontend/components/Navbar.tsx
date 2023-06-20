"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-200 flex justify-between gap-2 w-full mb-4 pt-2 pb-2">
      <div>
        <Link href="/" className="flex gap-3 items-center ml-2">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={40}
            height={40}
            className="ml-1 object-contain"
          />
          <h1 className="text-2xl text-black">PetMatch</h1>
        </Link>
      </div>
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
    </nav>
  );
};

export default Navbar;
