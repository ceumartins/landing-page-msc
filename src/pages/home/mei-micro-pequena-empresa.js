import React from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'
import FooterDashboard from '../../components/FooterDashboard'
import Link from 'next/link'

const MMPEmpresa = () => {
  return (
    <LayoutDashboard>
      <div className="w-full flex flex-col items-center justify-center">
        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center">
          <h1 className="w-full px-4 text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold text-primary_first_color lg:mb-8">
            Antecipe com as{' '}
            <span className="text-secundary_first_color">
              Empresas Simples de Crédito
            </span>{' '}
            da sua região, de um jeito rápido, econômico e seguro
          </h1>
          <div className="justify-center items-center flex flex-col lg:flex-row space-y-8 md:space-y-0">
            <div className="flex flex-col w-full items-center lg:items-end lg:w-1/4">
              <img
                className="w-60 lg:w-80 mt-6 mb-4 lg:mt-0 lg:mb-0"
                src="/assets/msc/png/empreendedor-18.jpg"
              />
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/4">
              <h1 className="w-[80%] text-secundary_first_color text-center text-base xl:text-2xl mb-4">
                Não espere para receber suas vendas de cartão e fuja das taxas
                de antecipação cobradas pela sua maquininha
              </h1>
              <Link href="https://mercadosimplesdecredito.us20.list-manage.com/subscribe?u=7d545d08b2d66c4db6a605125&id=308f4887c2">
                <a
                  rel="noreferrer noopener"
                  data-type="URL"
                  target="_blank"
                  className="flex lg:mt-2 xl:mt-4 items-center justify-center p-2 lg:p-4 px-6 font-bold transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color"
                >
                  ENTRE PARA A LISTA DE ESPERA
                </a>
              </Link>
            </div>
            <div className="flex flex-col w-full items-center lg:items-start lg:w-1/4">
              <img
                className="w-60 lg:w-80 mt-6 lg:mt-0 invisible lg:visible -mb-96 lg:mb-0"
                src="/assets/msc/png/empreendedor-03.jpg"
              />
            </div>
          </div>
        </section>

        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center bg-primary_first_color">
          <h1 className="w-full px-4 text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold text-bright_color mb-8">
            Veja o que a{' '}
            <span className="text-secundary_first_color">
              Mercado Simples de Crédito
            </span>{' '}
            pode fazer por você
          </h1>
          <div className="justify-center flex flex-col items-center space-y-8 md:space-y-0">
            <iframe 
              className="w-[60%] aspect-video md:aspect-video"
              src="https://www.youtube.com/embed/oRLV5kHzwv0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center">
          <h1 className="w-full px-4 mb-12 text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold text-secundary_first_color">
            Cinco motivos para{' '}
            <span className="text-primary_first_color">você</span> utilizar a
            Plataforma Mercado Simples de Crédito
          </h1>
          <div className="justify-center items-start flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Economia
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon8.png"
              />
              <p className="w-[70%] lg:w-[80%] 2xl:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Não pague nada por nossos serviços.
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Simplicidade
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon9.png"
              />
              <p className="w-[70%] lg:w-[80%] 2xl:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Selecione o tipo de crédito, preencha algumas informações e o
                resto é com a gente.
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Facilidade
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon10.png"
              />
              <p className="w-[70%] lg:w-[80%] 2xl:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Um só cadastro e você negocia com todas as Empresas Simples de
                crédito da sua região.
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Conveniência
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon11.png"
              />
              <p className="w-[70%] lg:w-[80%] 2xl:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Aqui, você resolve tudo de forma digital. Xô complicação!
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Suporte
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon12.png"
              />
              <p className="w-[70%] lg:w-[80%] 2xl:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Temos um time pronto para te ajudar em nossos canais de
                atendimento.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <Link href="https://mercadosimplesdecredito.us20.list-manage.com/subscribe?u=7d545d08b2d66c4db6a605125&id=308f4887c2">
              <a
                rel="noreferrer noopener"
                data-type="URL"
                target="_blank"
                className="flex mt-12 items-center justify-center text-sm lg:text-base font-bold text-center p-4 px-6 lg:px-12 transition-colors duration-150 text-bright_color rounded-lg bg-secundary_first_color hover:bg-secundary_second_color"
              >
                ENTRE PARA A LISTA DE ESPERA
              </a>
            </Link>
          </div>
          </section>

          <FooterDashboard />

      </div>
    </LayoutDashboard>
  )
}

export default MMPEmpresa
