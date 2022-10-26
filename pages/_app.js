import Layout from '../components/Layout/Layout'
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import { StoreProvider } from '../helper/Store';
import { ThemeProvider } from "next-themes";
import NavBar from '../components/Header/NavBar';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ThemeProvider enableSystem={true} attribute="class">
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <StoreProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </StoreProvider>
    </ThemeProvider>
  )
}

export default MyApp
