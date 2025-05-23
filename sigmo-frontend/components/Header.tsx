"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-[1200px] h-28 mx-auto my-0 flex items-center justify-between">
      {/* Logo à esquerda */}
      <div className="flex-shrink-0">
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

      {/* Menu no centro */}
      <div className="flex-1 text-center">
        <nav className="menu">
          <ul className="flex justify-center space-x-[25px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/reportar">Relatar problema</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Botões à direita */}
      <div className="flex space-x-[25px]">

        <Link href="/login" className="text-[#8c8c8c] flex items-center">
          <i className="fa fa-user pr-[15px]"></i> Login
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl lg:hidden">
          &#9776;
        </button>
        {menuOpen && (
          <nav className="absolute bg-white w-full top-20 left-0 p-4 shadow-lg lg:hidden">
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
    </header>
  );
};

export default Header;
