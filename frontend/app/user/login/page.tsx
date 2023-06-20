"use client";
import Image from "next/image";
import React, { useState } from "react";

export default async function Login() {
  const [formValue, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="text-black w-full h-screen flex flex-col items-center">
      <h1 className="text-blue-500 text-4xl mt-3">Faça seu login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 bg-gradient-to-b from-blue-200 border border-blue-500 p-4 rounded-xl flex flex-col gap-4 mt-10"
      >
        <label>
          <span className="text-xl">Email</span>
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            className="pl-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <label>
          <span className="text-xl">Senha</span>
          <input
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
            className="pl-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="text-xl px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
