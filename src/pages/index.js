import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from '../Componets/Footer/footer'
import GlobalStyle from '../Componets/GlobalStyles/Global'
import { Header } from '../Componets/Header/header'
import { Main } from '../Componets/Main/main'

export default function Index() {
  return (
    <div>
      <GlobalStyle />
        <Helmet>
          <title>Naruto</title>
        </Helmet>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}
