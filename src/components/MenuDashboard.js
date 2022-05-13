import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import SubMenuMobile from './SubMenuMobile'

const MenuDashboard = () => {
  const [showSubMenuMobile, setShowSubMenuMobile] = useState(false)
  const router = useRouter()

  return (
    <header className="bg-white shadow-md">
      <nav className="flex h-full items-center container mx-auto md:px-44">
        <div className="hidden sm:flex w-full h-20 items-center justify-between">
          <article className="flex items-center space-x-8">
            <Link href="/home" className="pl-6 md:pl-0">
              <a>
                <img
                  className="h-12"
                  src="/assets/msc/png/logo-inteira-large.png"
                  alt="Logo"
                />
              </a>
            </Link>
          </article>
          <article className="flex items-center space-x-4">
            <Link href="/home">
              <a
                className={`flex px-2 font-bold items-center justify-center py-2 transition-colors duration-150 text-primary_first_color hover:text-secundary_first_color ${
                  router.pathname === '/home' &&
                  'flex items-center justify-center py-2 transition-colors duration-150 text-secundary_first_color'
                }`}
              >
                Início
              </a>
            </Link>
            <Link href="/home/mei-micro-pequena-empresa">
              <a
                className={`flex px-2 font-bold items-center justify-center py-2 transition-colors duration-150 text-primary_first_color hover:text-secundary_first_color ${
                  router.pathname === '/home/mei-micro-pequena-empresa' &&
                  'flex items-center justify-center py-2 transition-colors duration-150 text-secundary_first_color'
                }`}
              >
                Mei, Micro e Pequena Empresa
              </a>
            </Link>
            <Link href="/home/empresa-credito">
              <a
                className={`flex px-2 font-bold items-center justify-center py-2 transition-colors duration-150 text-primary_first_color hover:text-secundary_first_color ${
                  router.pathname === '/home/empresa-credito' &&
                  'flex items-center justify-center py-2 transition-colors duration-150 text-secundary_first_color'
                }`}
              >
                Empresa Simples de Crédito
              </a>
            </Link>
            <Link href="http://suporte.mercadosimplesdecredito.com.br">
              <a
                rel="noreferrer noopener"
                data-type="URL"
                target="_blank"
                className="flex px-2 font-bold items-center justify-center py-2 transition-colors duration-150 text-primary_first_color hover:text-secundary_first_color"
              >
                Perguntas Frequentes
              </a>
            </Link>
            <Link href="https://www.simplesdecredito.com.br/">
              <a
                rel="noreferrer noopener"
                data-type="URL"
                target="_blank"
                className="flex px-4 font-bold items-center justify-center py-2 transition-colors duration-150 bg-secundary_first_color hover:bg-secundary_second_color rounded-lg text-bright_color"
              >
                Entrar
              </a>
            </Link>
          </article>
        </div>
        <div className="flex sm:hidden w-full px-6 h-20 items-center justify-between">
          <Link href="/dashboard" className="pl-6 md:pl-0">
            <a>
              <img
                className="h-10"
                src="/assets/msc/png/logo-short.png"
                alt="Logo"
              />
            </a>
          </Link>

          <div className="relative flex items-center">
            <div className="mr-4 ">
              <button onClick={() => setShowSubMenuMobile(!showSubMenuMobile)}>
                <img src="/assets/msc/png/hamburger.png" alt="menu mobile" />
                {showSubMenuMobile && <SubMenuMobile />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default MenuDashboard
