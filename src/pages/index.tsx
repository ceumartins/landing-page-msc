import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SplashScreen from '../components/SplashScreen'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
      return
    }
  )

  return <SplashScreen />

}

export default Home
