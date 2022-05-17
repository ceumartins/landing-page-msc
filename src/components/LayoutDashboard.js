import { useMemo } from 'react'
import MenuDashboard from './MenuDashboard'

const LayoutDashboard = ({ children }) => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
        <section className="bg-gray_extra_light_color ">
      <MenuDashboard />
      <div className="flex flex-col w-full h-full justify-center container mx-auto py-6">
        {children}
      </div>
      <footer className="flex bottom-0 flex-row justify-center items-center text-center w-full text-xs text-gray_mid_color">
        © COPYRIGHT &nbsp; {currentYear} &nbsp; MERCADO SIMPLES DE CRÉDITO
        BRASIL - 35.183.811/0001-50 - TODOS OS DIREITOS RESERVADOS
      </footer>
    </section>
  )
}

export default LayoutDashboard
