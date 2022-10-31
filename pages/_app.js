import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { StoreProvider } from '../helper/Store';
import { ThemeProvider } from "next-themes";
import NavBar from '../components/Header/NavBar';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossOrigin="anonymous"></script>
        </Head>
        <ThemeProvider enableSystem={true} attribute="class">
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </ThemeProvider>
      </>
    )
  }
  return (
    <>
      <Head>
        <script defer src="https://kit.fontawesome.com/441504c5bc.js" crossOrigin="anonymous"></script>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <StoreProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </StoreProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
