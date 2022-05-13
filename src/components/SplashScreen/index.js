const SplashScreen = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray_extra_light_color ">
      <div className="flex justify-center">
        <img
          className="h-12 md:h-16 mt-4 mb-8"
          src="/assets/msc/png/logo.png"
          alt="Logo Msc"
        />
      </div>
      <div className=" flex justify-center items-center">
        <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary_first_color"></span>
      </div>
    </div>
  )
}

export default SplashScreen
