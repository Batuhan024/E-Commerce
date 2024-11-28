import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageContainer from './contanier/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'

function App() {
  return (
    <div>
      <PageContainer>
          <Loading/>
          <Header/>
          <RouterConfig/>
      </PageContainer>
    </div>
  )
}

export default App
