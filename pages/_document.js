import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import LoaderScreenPage from '../components/loader-screen-page'

export default function Document () {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <title>Logousek</title>
      <meta
        name="description"
        content="Aplikace pro předškolní děti podporující logopedickou prevenci hravou formou."
      />
      <meta name="keywords" content="Průpravná cvičení, logopedická prevence, cvičení pro předškolní věk, předškoláci, logopedie, dílní funkce, rozvoj zrakového vnímání, rozvoj sluchového vnímání, oromotorika, cvičení na motoriku jazyka, serialita, časová posloupnost, předškolní věk, logopedie v MŠ"></meta>
      <meta name="author" content="Petr Holčák"></meta>
      <meta property="og:title" content="Logoušek" /> 
      <meta property="og:description" content="Aplikace pro předškolní děti podporující logopedickou prevenci hravou formou." /> 
      <meta property="og:site_name" content="logousek" /> 
      <meta property="og:image" content="https://www.logousek.cz/images/og_image.png" />
      <meta property="og:image:secure_url" content="https://www.logousek.cz/images/og_image.png" /> 
      <meta property="og:image:type" content="image/jpeg" /> 
      <meta property="og:image:width" content="400" /> 
      <meta property="og:image:height" content="300" />
      <body>
        <LoaderScreenPage />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
