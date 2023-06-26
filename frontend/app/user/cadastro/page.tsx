"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function Cadastro() {
  const [formValue, setFormValues] = useState({
    nome: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handlePasswordVisibility = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="text-black bg-gray-200 w-full h-screen flex flex-col items-center">
      <h1 className="text-4xl mt-8">Faça seu cadastro</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 border border-blue-500 p-4 rounded-xl flex flex-col gap-4 mt-10"
      >
        <label>
          <span className="text-xl">Nome</span>
          <input
            type="text"
            name="nome"
            value={formValue.nome}
            onChange={handleChange}
            className="pl-1 mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label>
          <span className="text-xl">Email</span>
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            className="pl-1 mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label>
          <span className="text-xl">Senha</span>
          <div className="flex flex-row">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValue.password}
              onChange={handleChange}
              className="pl-1 mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="password-toggle-button ml-2"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>
        <button
          type="submit"
          className="text-xl px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
