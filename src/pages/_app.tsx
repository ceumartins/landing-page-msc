import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
//import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

/*const tagManagerArgs = {
  gtmId: 'G-WN8Y6CBFNP'
}
TagManager.initialize(tagManagerArgs)*/

export default MyApp
