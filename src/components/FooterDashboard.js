import React from 'react'
import { useMemo } from 'react'

const FooterDashboard = () => {
    const currentYear = useMemo(() => {
        return new Date().getFullYear()
      }, [])

  return (
      <div className="w-full flex flex-col items-center justify-center">
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

        <section className="w-screen h-16 justify-between items-center bg-gray_color">
          <div className="flex flex-col lg:flex-row py-4 2xl:py-6">
            <div className="flex w-full">
                <p className="flex justify-center lg:justify-start text-center pl-6 text-xs text-bright_color">
                © COPYRIGHT &nbsp; {currentYear} &nbsp; MERCADO SIMPLES DE CRÉDITO
                BRASIL - 35.183.811/0001-50 - TODOS OS DIREITOS RESERVADOS
                </p>
            </div>
          <div className="flex w-full justify-center lg:justify-end gap-4 lg:pr-20 2xl:pr-40">
              <div className="flex items-center text-xs font-bold text-bright_color hover:text-secundary_first_color">
                <a
                  rel="noreferrer noopener"
                  href="https://positionfiles.sfo3.digitaloceanspaces.com/public/MSCB%20Politica%20de%20Privacidade%20V10.pdf"
                  data-type="URL"
                  target="_blank"
                >
                  POLÍTICA DE PRIVACIDADE
                </a>
              </div>
              <div className="flex items-center text-xs font-bold text-bright_color hover:text-secundary_first_color">
                <a
                  rel="noreferrer noopener"
                  href="https://positionfiles.sfo3.digitaloceanspaces.com/public/MSCB%20Termos%20Uso%2024032022.pdf"
                  data-type="URL"
                  target="_blank"
                >
                  TERMOS E CONDIÇÕES GERAIS DE USO
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default FooterDashboard