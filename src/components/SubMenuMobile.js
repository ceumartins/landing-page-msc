import React from 'react'
import Link from 'next/link'

const SubMenuMobile = () => {
  return (
    <>
      <div className={`fixed right-0 top-0 w-full h-screen`}></div>
      <ul className="absolute z-30 flex flex-col w-80 h-60 top-16 -right-6 text-sm bg-bright_color  shadow-md space-y-0.5 rounded-sm">
        <li
          className="flex justify-center rounded-sm bg-transparent text-gray_color hover:bg-primary_first_color hover:text-bright_color first-letter:
  "
        >
          <Link href="/dashboard">
            <a className="w-full h-full py-3 text-center">Início</a>
          </Link>
        </li>
        <li
          className="flex justify-center rounded-sm bg-transparent text-gray_color hover:bg-primary_first_color hover:text-bright_color first-letter:
  "
        >
          <Link href="/dashboard/mei-micro-pequena-empresa">
            <a className="w-full h-full py-3 text-center">
              Mei, Micro e Pequena Empresa
            </a>
          </Link>
        </li>
        <li
          className="flex justify-center rounded-sm bg-transparent text-gray_color hover:bg-primary_first_color hover:text-bright_color first-letter:
  "
        >
          <Link href="/dashboard/empresa-credito">
            <a className="w-full h-full py-3 text-center">
              Empresa Simples de Crédito
            </a>
          </Link>
        </li>
        <li
          className="flex justify-center rounded-sm bg-transparent text-gray_color hover:bg-primary_first_color hover:text-bright_color first-letter:
  "
        >
          <Link href="http://suporte.mercadosimplesdecredito.com.br">
            <a className="w-full h-full py-3 text-center">
              Perguntas Frequentes
            </a>
          </Link>
        </li>
        <li
          className="flex justify-center rounded-sm bg-transparent text-gray_color hover:bg-primary_first_color hover:text-bright_color first-letter:
  "
        >
          <Link href="https://www.simplesdecredito.com.br/">
            <a className="w-full h-full py-3 text-center">Entrar</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default SubMenuMobile
