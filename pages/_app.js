import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { StoreProvider } from '../utils/Store';
import { ThemeProvider } from "next-themes";
import NavBar from '../components/Header/NavBar';
import Footer from '../components/footer/Footer';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../features/store'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossOrigin="anonymous"></script>
        </Head>
        <Provider store={store}>
          <ThemeProvider enableSystem={true} attribute="class">
            <StoreProvider>
              <Component {...pageProps} />
            </StoreProvider>
          </ThemeProvider>
        </Provider>
      </>
    )
  }
  return (
    <>
      <Head>
        <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossOrigin="anonymous"></script>
      </Head>
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <StoreProvider>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </StoreProvider>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
