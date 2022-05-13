import React from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <div className="w-full flex flex-col items-center justify-center">
        <section className="w-screen px-60 py-20 -mt-6 flex-col justify-center items-center bg-primary_first_color">
          <h1 className="w-full text-center text-lg lg:text-3xl font-bold text-bright_color mt-20 mb-6">
            Agradecemos o seu interesse em{' '}
            <span className="text-secundary_first_color">participar</span> do
            nosso ecossistema
          </h1>
          <p className="w-full text-center mt-4 mb-16 text-bright_color text-lg">
            Para completar o processo de inscrição, clique no link do e-mail que
            acabamos de lhe enviar.
          </p>
          <div className="justify-center items-center flex">
            <img
              className="w-16 mt-10 md:mt-0 mb-12"
              src="/assets/msc/png/icon-mail.png"
            />
          </div>
        </section>

        <section className="w-screen px-60 py-20 flex-col justify-center items-center bg-primary_dark_color">
          <div className="justify-start items-start flex flex-col sm:flex-row space-y-8 sm:space-y-0 lg:px-14">
            <div className="flex flex-col w-full items-start md:w-1/3 lg:px-4">
              <img
                className="w-60 mt-10 md:mt-0"
                src="/assets/msc/png/logo-branca.png"
              />
              <p className="flex mt-6 justify-start items-start text-base text-bright_color">
                R. Guaicuí, nº 20, Sala 1002
              </p>
              <p className="flex justify-start items-start text-base text-bright_color">
                Coração de Jesus, Belo Horizonte,
              </p>
              <p className="flex justify-start items-start text-base text-bright_color">
                MG - CEP 30380-380
              </p>
            </div>
            <div className="flex flex-col w-full items-start md:w-1/3 lg:px-4">
              <ul className="space-y-2">
                <li className="flex justify-start items-start text-lg font-bold text-bright_color">
                  <a href="/dashboard">Início</a>
                </li>
                <li className="flex justify-start items-start text-lg font-bold text-bright_color">
                  <a href="/dashboard/mei-micro-pequena-empresa">
                    MEI, Micro e Pequena Empresa
                  </a>
                </li>
                <li className="flex justify-start items-start text-lg font-bold text-bright_color">
                  <a href="/dashboard/empresa-credito">
                    Empresa Simples de Crédito
                  </a>
                </li>
                <li className="flex justify-start items-start text-lg font-bold text-bright_color">
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
            <div className="flex flex-col w-full items-start md:w-1/3 lg:px-4">
              <h1 className="text-secundary_first_color text-lg font-black">
                Quer saber mais? Envie um e-mail para:
              </h1>
              <a
                href="mailto:precisoconversar@simplesdecredito.com.br"
                className="text-bright_color text-lg font-black"
              >
                precisoconversar@simplesdecredito.com.br
              </a>
              <div className="flex flex-row justify-center items-center mt-6">
                <div>
                  <h1 className="text-secundary_first_color text-start text-xl font-black">
                    SIGA NAS REDES
                  </h1>
                  <div className="flex flex-row w-full justify-start items-start gap-2 mt-2">
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
                  className="w-32 mt-10 ml-10 md:mt-0"
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
