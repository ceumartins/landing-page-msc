import React from 'react'
import Link from 'next/link'
import LayoutDashboard from '../../components/LayoutDashboard'
import FooterDashboard from '../../components/FooterDashboard'


const Dashboard = () => {
  return (
    <LayoutDashboard>
      <div className="w-full flex flex-col items-center justify-center">
        <section className="sm:w-screen py-12 lg:py-20 flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="w-full mt-8 lg:mt-0 lg:w-3/5 2xl:w-2/5 lg:px-6 flex flex-col">
            <h1 className="text-secundary_first_color text-center lg:text-left text-2xl lg:text-3xl 2xl:text-4xl font-bold">
              Mercado Simples de Crédito
            </h1>
            <p className="lg:w-[70%] px-4 lg:px-0 text-center lg:text-left text-gray_color text-base lg:text-lg xl:text-xl mt-4">
              O primeiro ecossistema a conectar MEIs, Micro e Pequenas Empresas
              às empresas Simples de Crédito.
            </p>
            <div className="flex flex-col w-full items-center lg:items-start">
              <Link href="#saibamais">
                <a className="flex mt-8 items-center lg:items-start justify-center py-2 px-6 lg:px-12 transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color">
                  Saiba Mais
                </a>
              </Link>
            </div>
          </div>
          <img className="items-center justify-center w-48 sm:48 md:w-56 lg:w-56 xl:w-72 2xl:w-80" src="/assets/msc/png/marca.png" />
        </section>

        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-start bg-primary_first_color">
          <h1 className="w-full text-center text-2xl lg:text-3xl 2xl:text-4xl font-bold text-bright_color">
            Olá, eu sou o Simplício!
          </h1>
          <p className="w-full px-4 text-center mt-4 mb-6 lg:mb-16 text-bright_color font-bold text-lg lg:text-xl 2xl:text-2xl">
            Aqui a sua empresa encontra um jeito rápido, econômico e seguro para
            solicitar e negociar créditos.
          </p>
          <div className="justify-center items-start flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="flex w-full justify-center items-center lg:w-1/5">
              <img
                className="w-28 lg:w-36 2xl:w-44"
                src="/assets/msc/png/simplicio.png"
              />
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/5">
              <h1 className="text-bright_color text-xl xl:text-3xl font-black lg:mb-4">
                Somos
              </h1>
              <img
                className="w-32 2xl:w-48 mb-4"
                src="/assets/msc/png/icon1.png"
              />
              <p className="flex w-[90%] 2xl:w-[70%] justify-center text-center text-sm lg:text-base xl:text-lg font-bold text-bright_color">
                O primeiro, mais completo e seguro ecossistema digital
                desenvolvido com o objetivo de estruturar nacionalmente um
                mercado de crédito concebido para funcionar nos limites dos
                municípios.
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/5">
              <h1 className="text-bright_color text-xl xl:text-3xl font-black lg:mb-4">
                Desejamos
              </h1>
              <img
                className="w-32 2xl:w-48 mb-4"
                src="/assets/msc/png/icon2.png"
              />
              <p className="flex w-[90%] 2xl:w-[70%] justify-center text-center text-sm lg:text-base xl:text-lg font-bold text-bright_color">
                Transformar os hábitos de consumo de crédito dos MEIs, Micro e
                Pequenos empresários e mudar a maneira como o cidadão poupador
                fará seus investimentos.
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/5">
              <h1 className="text-bright_color text-xl xl:text-3xl font-black lg:mb-4">
                Conectamos
              </h1>
              <img
                className="w-32 2xl:w-48 mb-4"
                src="/assets/msc/png/icon3.png"
              />
              <p className="flex w-[90%] 2xl:w-[70%] justify-center text-center text-sm lg:text-base xl:text-lg font-bold text-bright_color">
                As Empresas Simples de Crédito - ESC aos MEIs, Micro e Pequenas
                Empresas e criamos as possibilidades para que possam negociar
                seus créditos com segurança em ambiente digital.
              </p>
            </div>
          </div>
        </section>

        <section
          id="saibamais"
          className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center"
        >
          <h1 className="w-full px-4 text-center text-2xl lg:text-3xl 2xl:text-4xl font-bold text-secundary_first_color">
            O que a{' '}
            <span className="text-primary_first_color">
              Mercado Simples de Crédito
            </span>{' '}
            pode fazer pela sua empresa?
          </h1>
          <div className="justify-center items-center flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="flex flex-col w-full items-center lg:w-1/3">
              <img
                className="w-96 lg:w-[90%] mt-10"
                src="/assets/msc/png/img1.png"
              />
              <h1 className="text-secundary_first_color justify-center text-center text-xl xl:text-2xl font-black mt-6">
                MEIs, Micro e Pequenas Empresas
              </h1>
              <p className="flex w-[80%] justify-center text-center text-sm xl:text-base text-gray_color">
                Auxiliamos gratuitamente sua empresa a solicitar e negociar
                créditos junto às Empresas Simples de Crédito que atuam na sua
                região.
              </p>
              <Link href="/home/mei-micro-pequena-empresa">
                <a className="flex mt-9 items-start justify-center p-4 px-6 transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color">
                  Saiba Mais
                </a>
              </Link>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/3">
              <img
                className="w-96 lg:w-[90%] mt-10"
                src="/assets/msc/png/img2.png"
              />
              <h1 className="text-secundary_first_color justify-center text-center text-xl xl:text-2xl font-black mt-6">
                Empresas Simples de Crédito – ESC
              </h1>
              <p className="flex w-[80%] justify-center text-center text-sm xl:text-base text-gray_color">
                Auxiliamos gratuitamente sua ESC a captar, qualificar e
                pré-avaliar o risco de crédito, dentre outros serviços pensados
                para sua empresa.
              </p>
              <Link href="/home/empresa-credito">
                <a className="flex mt-9 items-start justify-center p-4 px-6 transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color">
                  Saiba Mais
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center bg-primary_first_color">
          <h1 className="w-full text-center text-2xl lg:text-3xl 2xl:text-4xl font-bold text-bright_color">
            Junte-se a nós!
          </h1>
          <p className="w-full px-4 text-center mt-4 mb-8 lg:mb-16 text-bright_color font-bold text-lg lg:text-xl 2xl:text-2xl">
            Para transformar a economia dos 5.570 municípios brasileiros
          </p>
          <div className="justify-center items-start flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="flex flex-col w-full justify-center items-center lg:w-1/5">
              <img className="w-32 2xl:w-48" src="/assets/msc/png/icon4.png" />
              <h1 className="text-bright_color text-xl lg:text-2xl xl:text-3xl font-black mt-4 lg:mb-6">
                888
              </h1>
              <p className="flex w-[80%] text-center text-sm lg:text-base xl:text-lg font-bold text-bright_color">
                Total de Empresas Simples de Crédito - ESCs em atividade
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/5">
              <img className="w-32 2xl:w-48" src="/assets/msc/png/icon5.png" />
              <h1 className="text-bright_color text-xl lg:text-2xl xl:text-3xl font-black mt-4 lg:mb-6">
                555.323.180,00
              </h1>
              <p className="flex w-[80%] justify-center text-center text-sm lg:text-base xl:text-lg font-bold text-bright_color">
                Total estimado de recursos disponíveis para concessão
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/5">
              <img className="w-32 2xl:w-48" src="/assets/msc/png/icon1.png" />
              <h1 className="text-bright_color text-xl lg:text-2xl xl:text-3xl font-black mt-4 lg:mb-6">
                1983
              </h1>
              <p className="flex w-[80%] justify-center text-center text-sm lg:text-base xl:text-lg font-bold text-bright_color">
                Total de Municípios atendidos pelas ESCs
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/5">
              <img className="w-32 2xl:w-48" src="/assets/msc/png/icon7.png" />
              <h1 className="text-bright_color text-xl lg:text-2xl xl:text-3xl font-black mt-4 lg:mb-6">
                19.210.664
              </h1>
              <p className="flex w-[80%] justify-center text-center text-sm lg:text-base xl:text-lg font-bold text-bright_color">
                Total de MEIs, Micro e Pequenas Empresas que as ESCs já
                conseguem atender
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <Link href="https://www.simplesdecredito.com.br/esc/cadastro/bem-vindo">
              <a
                rel="noreferrer noopener"
                data-type="URL"
                target="_blank"
                className="flex mt-12 items-center justify-center text-sm lg:text-base font-bold text-center py-4 px-6 mx-6 lg:mx-0 lg:px-12 transition-colors duration-150 text-bright_color rounded-lg bg-secundary_first_color hover:bg-secundary_second_color"
              >
                SEJA UM DOS PRIMEIROS A SABER SE HÁ ESC ATENDENDO NO SEU
                MUNICÍPIO
              </a>
            </Link>
            <p className="flex mt-6 text-center text-sm justify-center text-bright_color">
              *Nossos números são atualizados semanalmente.
            </p>
          </div>
        </section>

        <FooterDashboard />

      </div>
    </LayoutDashboard>
  )
}

export default Dashboard
