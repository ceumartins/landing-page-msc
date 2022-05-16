import React from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <div className="w-full flex flex-col items-center justify-center">
        <section className="md:w-screen md:px-60 py-12 md:py-20 flex-col justify-center items-center">
          <h1 className="w-full text-center text-2xl lg:text-4xl font-bold text-primary_first_color md:mt-8 md:mb-8">
            Antecipe com as{' '}
            <span className="text-secundary_first_color">
              Empresas Simples de Crédito
            </span>{' '}
            da sua região, de um jeito rápido, econômico e seguro
          </h1>
          <div className="justify-center items-center flex flex-col sm:flex-row space-y-8 sm:space-y-0 lg:px-14">
            <div className="flex flex-col w-full items-center md:w-1/3">
              <img
                className="w-60 md:w-96 mt-10 md:mt-0"
                src="/assets/msc/png/empreendedor-18.jpg"
              />
            </div>
            <div className="flex flex-col w-full items-center md:w-1/3">
              <h1 className="w-[80%] text-secundary_first_color text-center text-lg md:text-2xl mt-6 mb-4">
                Não espere para receber suas vendas de cartão e fuja das taxas
                de antecipação cobradas pela sua maquininha
              </h1>
              <Link href="https://www.simplesdecredito.com.br/esc/cadastro/bem-vindo">
                <a
                  rel="noreferrer noopener"
                  data-type="URL"
                  target="_blank"
                  className="flex mt-4 items-center justify-center p-4 px-6 font-bold transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color"
                >
                  COMECE JÁ
                </a>
              </Link>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/3">
              <img
                className="w-60 md:w-96 mt-10 md:mt-0 invisible md:visible -mb-96 md:mb-0"
                src="/assets/msc/png/empreendedor-03.jpg"
              />
            </div>
          </div>
        </section>

        <section className="md:w-screen md:px-60 py-12 md:py-20 flex-col justify-center items-center bg-primary_first_color">
          <h1 className="w-full text-center text-2xl lg:text-3xl font-bold text-bright_color mt-12 mb-8">
            Veja o que a{' '}
            <span className="text-secundary_first_color">
              Mercado Simples de Crédito
            </span>{' '}
            pode fazer por você
          </h1>
          <div className="justify-center flex flex-col items-center space-y-8 sm:space-y-0 lg:px-14">
            <iframe 
              className="w-full aspect-video md:aspect-video"
              src="https://www.youtube.com/embed/oRLV5kHzwv0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="md:w-screen md:px-60 py-12 md:py-20 flex-col justify-center items-center">
          <h1 className="w-full mb-12 text-center text-2xl lg:text-4xl font-bold text-secundary_first_color mt-12">
            Cinco motivos para{' '}
            <span className="text-primary_first_color">você</span> utilizar a
            Plataforma Mercado Simples de Crédito
          </h1>
          <div className="justify-start items-start flex flex-col sm:flex-row space-y-8 sm:space-y-0 lg:px-14">
            <div className="flex flex-col w-full items-center md:w-1/5 lg:px-4 ">
              <h1 className="text-primary_first_color text-2xl sm:text-3xl font-black mt-4 mb-6">
                Economia
              </h1>
              <img
                className="w-32 md:w-56"
                src="/assets/msc/png/icon8.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-lg md:text-xl font-bold text-gray_color mt-4">
                Utilize nossos serviços e não pague nada por isso.
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/5 lg:px-4">
              <h1 className="text-primary_first_color text-2xl sm:text-3xl font-black mt-4 mb-6">
                Simplicidade
              </h1>
              <img
                className="w-32 md:w-56"
                src="/assets/msc/png/icon9.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-lg md:text-xl font-bold text-gray_color mt-4">
                Selecione o tipo de crédito, preencha algumas informações e o
                resto é com a gente.
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/5 lg:px-4">
              <h1 className="text-primary_first_color text-2xl sm:text-3xl font-black mt-4 mb-6">
                Facilidade
              </h1>
              <img
                className="w-32 md:w-56"
                src="/assets/msc/png/icon10.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-lg md:text-xl font-bold text-gray_color mt-4">
                Um só cadastro e você negocia com todas as Empresas Simples de
                crédito da sua região.
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/5 lg:px-4">
              <h1 className="text-primary_first_color text-2xl sm:text-3xl font-black mt-4 mb-6">
                Conveniência
              </h1>
              <img
                className="w-32 md:w-56"
                src="/assets/msc/png/icon11.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-lg md:text-xl font-bold text-gray_color mt-4">
                Aqui, você resolve tudo de forma digital. Xô complicação!
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:w-1/5 lg:px-4">
              <h1 className="text-primary_first_color text-2xl sm:text-3xl font-black mt-4 mb-6">
                Suporte
              </h1>
              <img
                className="w-32 md:w-56"
                src="/assets/msc/png/icon12.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-lg md:text-xl font-bold text-gray_color mt-4">
                Temos um time pronto para te ajudar em nossos canais de
                atendimento.
              </p>
            </div>
          </div>
          <div>
            <Link href="https://www.simplesdecredito.com.br/esc/cadastro/bem-vindo">
              <a
                rel="noreferrer noopener"
                data-type="URL"
                target="_blank"
                className="flex flex-col mt-12 mx-8 md:mx-96 text-sm md:text-base font-bold items-center justify-center p-4 px-6 transition-colors duration-150 text-bright_color rounded-lg bg-secundary_first_color hover:bg-secundary_second_color"
              >
                COMECE JÁ
              </a>
            </Link>
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
                  <a href="/home">Início</a>
                </li>
                <li className="flex justify-center items-center md:justify-start md:items-start text-base md:text-lg font-bold text-bright_color">
                  <a href="/home/mei-micro-pequena-empresa">
                    MEI, Micro e Pequena Empresa
                  </a>
                </li>
                <li className="flex justify-center items-center md:justify-start md:items-start text-base md:text-lg font-bold text-bright_color">
                  <a href="/home/empresa-credito">
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
