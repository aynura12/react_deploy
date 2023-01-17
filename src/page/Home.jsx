import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Input from '../components/Input'

const Home = () => {
  return (
    <HelmetProvider>
        <Helmet>
            <title>Home</title>
        </Helmet>
       <Input/>
    </HelmetProvider>
  )
}

export default Home