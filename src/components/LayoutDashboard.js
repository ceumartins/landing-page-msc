import MenuDashboard from './MenuDashboard'

const LayoutDashboard = ({ children }) => {
  return (
        <section className="bg-gray_extra_light_color ">
      <MenuDashboard />
      <div className="flex flex-col w-full h-full justify-center container mx-auto">
        {children}
      </div>
    </section>
  )
}

export default LayoutDashboard
