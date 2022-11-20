import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeProvider } from "next-themes";
import NavBar from '../components/Header/NavBar';
import Footer from '../components/footer/Footer';
import { Provider } from 'react-redux';
import { store } from '../features/store'

function MyApp({ Component, pageProps }) {



  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Provider store={store}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>


        <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossOrigin="anonymous" ></script>
      </>
    )
  }
  return (
    <>
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Provider>

      <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossOrigin="anonymous"></script>
    </>
  )
}

export default MyApp
