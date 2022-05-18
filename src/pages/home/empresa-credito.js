import React from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'
import Link from 'next/link'

const PainelEsc = () => {
  return (
    <LayoutDashboard>
      <div className="w-full flex flex-col items-center justify-center">
        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center">
          <h1 className="w-full text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold text-primary_first_color lg:mb-8">
            Conectamos sua{' '}
            <span className="text-secundary_first_color">ESC</span> ao Mercado
            de Recebíveis de cartões
          </h1>
          <div className="justify-center items-center flex flex-col lg:flex-row space-y-8 md:space-y-0">
            <div className="flex flex-col w-full items-center lg:items-end lg:w-1/4">
              <img
                className="w-60 lg:w-80 mt-6 mb-4 lg:mt-0 lg:mb-0"
                src="/assets/msc/png/empresario-01.png"
              />
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/4">
              <h1 className="w-[80%] text-secundary_first_color text-center text-base xl:text-2xl mb-4">
                Negocie créditos com os MEIs, Micro e Pequenas Empresas da sua
                região
              </h1>
              <Link href="https://www.simplesdecredito.com.br/esc/cadastro/bem-vindo">
              <a
                  rel="noreferrer noopener"
                  data-type="URL"
                  target="_blank"
                  className="flex lg:mt-2 xl:mt-4 items-center justify-center p-2 lg:p-4 px-6 font-bold transition-colors duration-150 text-bright_color rounded-lg bg-primary_first_color hover:bg-primary_second_color"
                >
                  COMECE JÁ
                </a>
              </Link>
            </div>
            <div className="flex flex-col w-full items-center lg:items-start lg:w-1/4">
              <img
                className="w-60 lg:w-80 mt-6 lg:mt-0 invisible lg:visible -mb-96 lg:mb-0"
                src="/assets/msc/png/empresaria-02.jpg"
              />
            </div>
          </div>
        </section>

        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center bg-primary_first_color">
          <h1 className="w-full text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold text-bright_color mb-8">
            Veja o que a{' '}
            <span className="text-secundary_first_color">
              Mercado Simples de Crédito
            </span>{' '}
            pode fazer pela sua ESC
          </h1>
          <div className="justify-center flex flex-col items-center space-y-8 md:space-y-0">
            <iframe
              className="w-[60%] aspect-video md:aspect-video"
              src="https://www.youtube.com/embed/toEaFrZ5LAE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="sm:w-screen py-12 lg:py-20 flex-col justify-center items-center">
          <h1 className="w-full mb-12 text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold text-secundary_first_color">
            Cinco motivos para sua{' '}
            <span className="text-primary_first_color">ESC</span> utilizar a
            Plataforma Mercado Simples de Crédito
          </h1>
          <div className="justify-center items-start flex flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Conveniência
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon11.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Fazemos a prospecção de empresas dentro da sua área geográfica
                de atuação.
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Economia
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon8.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Sem mensalidades, pague apenas pelos serviços que utilizar.
              </p>
            </div>
            <div className="flex flex-col w-full items-center lg:w-1/6">
              <h1 className="text-primary_first_color text-lg lg:text-xl xl:text-2xl font-black mt-4 mb-6">
                Abertura
              </h1>
              <img
                className="w-32 2xl:w-48"
                src="/assets/msc/png/icon13.png"
              />
              <p className="w-[50%] md:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Depois de aprovada, sua ESC terá acesso ao mercado de Recebíveis
                de cartões.
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
              <p className="w-[50%] md:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Informações setoriais e ofertas de serviços essenciais num só
                lugar.
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
              <p className="w-[50%] md:w-full flex justify-center text-center text-base xl:text-lg font-bold text-gray_color mt-4">
                Temos um time pronto para te ajudar em nossos canais de
                atendimento.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <Link href="https://www.simplesdecredito.com.br/esc/cadastro/bem-vindo">
              <a
                rel="noreferrer noopener"
                data-type="URL"
                target="_blank"
                className="flex mt-12 items-center justify-center text-sm lg:text-base font-bold text-center p-4 px-6 lg:px-12 transition-colors duration-150 text-bright_color rounded-lg bg-secundary_first_color hover:bg-secundary_second_color"
              >
                COMECE JÁ
              </a>
            </Link>
          </div>
        </section>

        <section className="w-screen py-12 lg:py-20 flex-col justify-center items-center bg-primary_dark_color">
          <div className="justify-center items-center flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="flex flex-col w-full justify-center items-center lg:1/3 2xl:w-1/4 lg:px-2">
              <img className="w-60" src="/assets/msc/png/logo-branca.png" />
              <p className="flex mt-6 justify-center items-center text-sm xl:text-base text-bright_color">
                R. Guaicuí, nº 20, Sala 1002
              </p>
              <p className="flex justify-center items-center text-sm xl:text-base text-bright_color">
                Coração de Jesus, Belo Horizonte,
              </p>
              <p className="flex justify-center items-center text-sm xl:text-base text-bright_color">
                MG - CEP 30380-380
              </p>
            </div>
            <div className="flex flex-col w-full justify-center items-center lg:1/3 2xl:w-1/4 lg:px-2">
              <ul className="space-y-2">
                <li className="flex justify-center items-center text-sm xl:text-lg font-bold text-bright_color">
                  <a href="/home">Início</a>
                </li>
                <li className="flex justify-center items-center text-sm xl:text-lg font-bold text-bright_color">
                  <a href="/home/mei-micro-pequena-empresa">
                    MEI, Micro e Pequena Empresa
                  </a>
                </li>
                <li className="flex justify-center items-center text-sm xl:text-lg font-bold text-bright_color">
                  <a href="/home/empresa-credito">
                    Empresa Simples de Crédito
                  </a>
                </li>
                <li className="flex justify-center items-center text-sm xl:text-lg font-bold text-bright_color">
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
            <div className="flex flex-col w-full justify-center items-center lg:1/3 2xl:w-1/4 lg:px-2">
              <h1 className="text-secundary_first_color text-sm xl:text-lg font-bold">
                Quer saber mais? Envie um e-mail para:
              </h1>
              <a
                href="mailto:precisoconversar@simplesdecredito.com.br"
                className="text-bright_color text-sm xl:text-lg font-bold"
              >
                precisoconversar@simplesdecredito.com.br
              </a>
              <div className="flex flex-row justify-center items-center mt-6">
                <div>
                  <h1 className="text-secundary_first_color text-center text-sm xl:text-base 2xl:text-lg font-black">
                    SIGA NAS REDES
                  </h1>
                  <div className="flex flex-row w-full justify-center items-center gap-2 mt-2">
                    <a
                      rel="noreferrer noopener"
                      href="https://www.facebook.com/mercadosimplesdecredito"
                      data-type="URL"
                      target="_blank"
                    >
                      <img
                        className="h-6 xl:h-8"
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
                        className="h-6 xl:h-8"
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
                        className="h-6 xl:h-8"
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
                        className="h-6 xl:h-8"
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

export default PainelEsc
