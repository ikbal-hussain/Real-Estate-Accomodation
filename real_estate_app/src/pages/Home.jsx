import React from 'react'
import Header from '../components/Header';

import Featured from '../components/Featured'
import Welcome from '../components/Welcome';
import Amenities from '../components/Amenities'
import Footer from '../components/Footer';

function Home() {


  return (
    <div>
        <Header/>
        <Welcome/>
      <Featured />
      <Amenities />
      <Footer />
    </div>
  )
}

export default Home