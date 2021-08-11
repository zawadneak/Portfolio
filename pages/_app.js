import 'tailwindcss/tailwind.css';
import './styles/animation.css'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigator />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
