import React from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <div className="w-full flex flex-col items-center justify-center">
        <section className="md:w-screen md:px-60 py-12 md:py-20 flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="w-full mt-8 md:mt-0 md:w-1/2 md:px-6 flex flex-col">
            <h1 className="text-secundary_first_color text-center md:text-left text-2xl lg:text-4xl font-bold">
              Mercado Simples de Crédito
            </h1>
            <p className="md:w-[80%] text-center md:text-left text-gray_color text-lg md:text-xl mt-4 ">
              O primeiro ecossistema a conectar MEIs, Micro e Pequenas Empresas
              às empresas Simples de Crédito.
            </p>
            <div className="flex flex-col w-full lg:w-1/2">
              <Link href="#saibamais">
                <a className="flex mt-8 items-center md:items-start justify-center p-2 transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color">
                  Saiba Mais
                </a>
              </Link>
            </div>
          </div>
          <img className="md:w-200 mt-0" src="/assets/msc/png/marca.png" />
        </section>

        <section className="md:w-screen md:px-60 py-12 md:py-20 flex-col justify-center items-center bg-primary_first_color">
          <h1 className="w-full text-center text-2xl lg:text-4xl font-bold text-bright_color">
            Olá, eu sou o Simplício!
          </h1>
          <p className="w-full px-8 text-center mt-4 mb-6 md:mb-16 text-bright_color font-bold text-xl sm:text-2xl">
            Aqui a sua empresa encontra um jeito rápido, econômico e seguro para
            solicitar e negociar créditos.
          </p>
          <div className="justify-center items-center flex flex-col sm:flex-row space-y-8 sm:space-y-0 lg:px-14">
            <div className="flex w-full justify-center items-center md:w-1/4 lg:px-4 ">
              <img
                className="w-32 md:w-56 md:mt-0"
                src="/assets/msc/png/simplicio.png"
              />
            </div>
            <div className="flex flex-col w-full items-center md:w-1/4 lg:px-4 ">
              <h1 className="text-bright_color text-3xl sm:text-3xl font-black md:mb-4">
                Somos
              </h1>
              <img
                className="w-32 md:w-56 mb-4 md:mt-0"
                src="/assets/msc/png/icon1.png"
              />
              <p className="flex w-[80%] justify-center text-center text-base md:text-lg font-bold text-bright_color">
                O primeiro, mais completo e seguro ecossistema digital
                desenvolvido com o objetivo de estruturar nacionalmente um
                mercado de crédito concebido para funcionar nos limites dos
                municípios.
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/4 lg:px-4">
              <h1 className="text-bright_color text-3xl sm:text-3xl font-black md:mb-4">
                Desejamos
              </h1>
              <img
                className="w-32 md:w-56 mb-4 md:mt-0"
                src="/assets/msc/png/icon2.png"
              />
              <p className="flex w-[80%] justify-center text-center text-base md:text-lg font-bold text-bright_color">
                Transformar os hábitos de consumo de crédito dos MEIs, Micro e
                Pequenos empresários e mudar a maneira como o cidadão poupador
                fará seus investimentos.
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/4 lg:px-4">
              <h1 className="text-bright_color text-3xl sm:text-3xl font-black md:mb-4">
                Conectamos
              </h1>
              <img
                className="w-32 md:w-56 mb-4 md:mt-0"
                src="/assets/msc/png/icon3.png"
              />
              <p className="flex w-[80%] justify-center text-center text-base md:text-lg font-bold text-bright_color">
                As Empresas Simples de Crédito - ESC aos MEIs, Micro e Pequenas
                Empresas e criamos as possibilidades para que possam negociar
                seus créditos com segurança em ambiente digital.
              </p>
            </div>
          </div>
        </section>

        <section
          id="saibamais"
          className="md:w-screen md:px-60 py-12 md:py-20 flex-col justify-center items-center"
        >
          <h1 className="w-full px-12 text-center text-2xl lg:text-3xl font-bold text-secundary_first_color">
            O que a{' '}
            <span className="text-primary_first_color">
              Mercado Simples de Crédito
            </span>{' '}
            pode fazer pela sua empresa?
          </h1>
          <div className="justify-center items-center flex flex-col sm:flex-row space-y-8 sm:space-y-0 lg:px-14">
            <div className="flex flex-col w-full items-center md:w-1/2">
              <img
                className="w-96 md:w-[90%] mt-10"
                src="/assets/msc/png/img1.png"
              />
              <h1 className="text-secundary_first_color text-2xl sm:text-2xl font-black mt-6 md:mb-8">
                MEIs, Micro e Pequenas Empresas
              </h1>
              <p className="flex w-[80%] justify-center text-center text-base text-gray_color">
                Auxiliamos gratuitamente sua empresa a solicitar e negociar
                créditos junto às Empresas Simples de Crédito que atuam na sua
                região.
              </p>
              <Link href="/dashboard/mei-micro-pequena-empresa">
                <a className="flex mt-9 items-start justify-center p-4 px-6 transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color">
                  Saiba Mais
                </a>
              </Link>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/2">
              <img
                className="w-96 md:w-[90%] mt-10"
                src="/assets/msc/png/img2.png"
              />
              <h1 className="text-secundary_first_color text-2xl sm:text-2xl font-black mt-6 md:mb-8">
                Empresas Simples de Crédito – ESC
              </h1>
              <p className="flex w-[80%] justify-center text-center text-base text-gray_color">
                Auxiliamos gratuitamente sua ESC a captar, qualificar e
                pré-avaliar o risco de crédito, dentre outros serviços pensados
                para sua empresa.
              </p>
              <Link href="/dashboard/empresa-credito">
                <a className="flex mt-9 items-start justify-center p-4 px-6 transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color">
                  Saiba Mais
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="md:w-screen md:px-60 py-12 md:py-20 flex-col justify-center items-center bg-primary_first_color">
          <h1 className="w-full text-center text-2xl lg:text-4xl font-bold text-bright_color">
            Junte-se a nós!
          </h1>
          <p className="w-full text-center mt-4 mb-8 md:mb-16 text-bright_color font-bold text-xl sm:text-2xl">
            Para transformar a economia dos 5.570 municípios brasileiros
          </p>
          <div className="justify-start items-start flex flex-col sm:flex-row space-y-8 sm:space-y-0 lg:px-14">
            <div className="flex flex-col w-full items-center md:w-1/4 lg:px-4 ">
              <img className="w-32 md:w-56" src="/assets/msc/png/icon4.png" />
              <h1 className="text-bright_color text-2xl sm:text-3xl font-black mt-4 md:mb-6">
                888
              </h1>
              <p className="flex w-[90%] justify-center text-center text-base md:text-lg font-bold text-bright_color">
                Total de Empresas Simples de Crédito - ESCs em atividade
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/4 lg:px-4">
              <img className="w-32 md:w-56" src="/assets/msc/png/icon5.png" />
              <h1 className="text-bright_color text-2xl sm:text-3xl font-black mt-4 md:mb-6">
                R$ 555.323.180,00
              </h1>
              <p className="flex w-[90%] justify-center text-center text-base md:text-lg font-bold text-bright_color">
                Total estimado de recursos disponíveis para concessão
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/4 lg:px-4">
              <img className="w-32 md:w-56" src="/assets/msc/png/icon1.png" />
              <h1 className="text-bright_color text-2xl sm:text-3xl font-black mt-4 md:mb-6">
                1983
              </h1>
              <p className="flex w-[90%] justify-center text-center text-base md:text-lg font-bold text-bright_color">
                Total de Municípios atendidos pelas ESCs
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/4 lg:px-4">
              <img className="w-32 md:w-56" src="/assets/msc/png/icon7.png" />
              <h1 className="text-bright_color text-2xl sm:text-3xl font-black mt-4 md:mb-6">
                19.210.664
              </h1>
              <p className="flex w-[90%] justify-center text-center text-base md:text-lg font-bold text-bright_color">
                Total de MEIs, Micro e Pequenas Empresas que as ESCs já
                conseguem atender
              </p>
            </div>
          </div>
          <div>
            <Link href="https://www.simplesdecredito.com.br/cadastro/bem-vindo">
              <a
                rel="noreferrer noopener"
                data-type="URL"
                target="_blank"
                className="flex mt-12 md:mx-96 font-bold items-center justify-center p-4 px-6 transition-colors duration-150 text-bright_color rounded-lg bg-secundary_first_color hover:bg-secundary_second_color"
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

        <section className="w-screen md:px-60 py-12 md:py-20 flex-col justify-center items-center bg-primary_dark_color">
          <div className="justify-center items-center md:justify-start md:items-start flex flex-col sm:flex-row space-y-8 sm:space-y-0 lg:px-14">
            <div className="flex flex-col w-full justify-center items-center md:justify-start md:items-start md:w-1/3 lg:px-4">
              <img className="w-60" src="/assets/msc/png/logo-branca.png" />
              <p className="flex mt-6 justify-center items-center md:justify-start md:items-start text-base text-bright_color">
                R. Guaicuí, nº 20, Sala 1002
              </p>
              <p className="flex justify-center items-center md:justify-start md:items-start text-base text-bright_color">
                Coração de Jesus, Belo Horizonte,
              </p>
              <p className="flex justify-center items-center md:justify-start md:items-start text-base text-bright_color">
                MG - CEP 30380-380
              </p>
            </div>
            <div className="flex flex-col w-full justify-center items-center md:justify-start md:items-start md:w-1/3 lg:px-4">
              <ul className="space-y-2">
                <li className="flex justify-center items-center md:justify-start md:items-start text-base md:text-lg font-bold text-bright_color">
                  <a href="/dashboard">Início</a>
                </li>
                <li className="flex justify-center items-center md:justify-start md:items-start text-base md:text-lg font-bold text-bright_color">
                  <a href="/dashboard/mei-micro-pequena-empresa">
                    MEI, Micro e Pequena Empresa
                  </a>
                </li>
                <li className="flex justify-center items-center md:justify-start md:items-start text-base md:text-lg font-bold text-bright_color">
                  <a href="/dashboard/empresa-credito">
                    Empresa Simples de Crédito
                  </a>
                </li>
                <li className="flex justify-center items-center md:justify-start md:items-start text-base md:text-lg font-bold text-bright_color">
                  <a
                    rel="noreferrer noopener"
                    href="http://suporte.mercadosimplesdecredito.com.br"
                    data-type="URL"
                    target="_blank"
                  >
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full justify-center items-center md:justify-start md:items-start md:w-1/3 lg:px-4">
              <h1 className="text-secundary_first_color text-base md:text-lg font-black">
                Quer saber mais? Envie um e-mail para:
              </h1>
              <a
                href="mailto:precisoconversar@simplesdecredito.com.br"
                className="text-bright_color text-base md:text-lg font-black"
              >
                precisoconversar@simplesdecredito.com.br
              </a>
              <div className="flex flex-row justify-center items-center mt-6">
                <div>
                  <h1 className="text-secundary_first_color text-start text-xl font-black">
                    SIGA NAS REDES
                  </h1>
                  <div className="flex flex-row w-full justify-center items-center md:justify-start md:items-start gap-2 mt-2">
                    <a
                      rel="noreferrer noopener"
                      href="https://www.facebook.com/mercadosimplesdecredito"
                      data-type="URL"
                      target="_blank"
                    >
                      <img
                        className="h-8"
                        src="/assets/msc/png/icon-facebook.png"
                      />
                    </a>
                    <a
                      rel="noreferrer noopener"
                      href="https://www.instagram.com/mercadosimplesdecredito/"
                      data-type="URL"
                      target="_blank"
                    >
                      <img
                        className="h-8"
                        src="/assets/msc/png/icon-instagram.png"
                      />
                    </a>
                    <a
                      rel="noreferrer noopener"
                      href="https://www.youtube.com/channel/UC2mjGfeWEHAKugpxg1Kw6vw"
                      data-type="URL"
                      target="_blank"
                    >
                      <img
                        className="h-8"
                        src="/assets/msc/png/icon-youtube.png"
                      />
                    </a>
                    <a
                      rel="noreferrer noopener"
                      href="https://www.linkedin.com/company/mercadosimplesdecredito/"
                      data-type="URL"
                      target="_blank"
                    >
                      <img
                        className="h-8"
                        src="/assets/msc/png/icon-linkedin.png"
                      />
                    </a>
                  </div>
                </div>
                <img
                  className="w-32 ml-10"
                  src="/assets/msc/png/certificado-ssl.png"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutDashboard>
  )
}

export default Dashboard
