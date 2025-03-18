"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-screen-lg mx-auto h-[112px] flex justify-between items-center px-4">
      {/* Logo */}
      <div className="w-1/4">
        <Link href="/">
          <img
            src="https://www.viamobilidade.com.br/custom/site-ccr-viamobilidade/img/logo-via-mobilidade.svg"
            width="260"
            height="35"
            alt="logo ViaMobilidade"
            className="max-w-full h-auto"
          />
        </Link>
      </div>

      {/* Menu (Mobile toggle) */}
      <div className="w-[55%] pr-[25px] hidden lg:block">
        <nav className="menu">
          <ul className="flex justify-end">
            <li className="px-[25px]">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[25px]">
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li className="px-[25px]">
              <Link href="/report">Relatar problema</Link>
            </li>
            <li className="px-[25px]">
              <Link href="/status">Status</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu (Hamburger for mobile) */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          &#9776;
        </button>
        {menuOpen && (
          <nav className="absolute bg-white w-full top-20 left-0 p-4 shadow-lg">
            <ul className="flex flex-col items-center">
              <li className="py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="py-2">
                <Link href="/sobre">Sobre Nós</Link>
              </li>
              <li className="py-2">
                <Link href="/report">Relatar problema</Link>
              </li>
              <li className="py-2">
                <Link href="/status">Status</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Botões interativos */}
      <div className="w-[20%] flex justify-end">
        <ul className="flex space-x-[25px]">
          {/* Botão "Buscar" */}
          <li>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              id="buscar-btn"
              className="text-[#8c8c8c] flex items-center"
            >
              <i className="fa fa-search pr-[15px]"></i> Buscar
            </button>
          </li>

          {/* Login */}
          <li className="border-l border-[#dedede]">
            <Link href="/login" className="text-[#8c8c8c]">
              <i className="fa fa-user pr-[15px]"></i> Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;