import React from 'react'
import '../assets/css/App.css'
import CustomProvider from '../CustomProvider'
// CONFIG GLOBAL
export default function App({ Component, pageProps }) {
    return (
      <CustomProvider>
        <Component {...pageProps} />
      </CustomProvider>
    )
  }
