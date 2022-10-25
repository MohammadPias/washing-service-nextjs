import Layout from '../components/Layout/Layout'
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import { StoreProvider } from '../helper/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    /*  if (Cookies.get("theme") === 'dark' || (!('theme' in Cookies) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       document.documentElement.classList.add('dark')
     } else {
       document.documentElement.classList.remove('dark')
     } */
  }, [])
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
