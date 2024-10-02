import React from 'react'
import Header from '../components/Header';

import Featured from '../components/Featured'
import Amenities from '../components/Amenities'

function Home() {
  return (
    <div>
        <Header/>
      <Featured />
      <Amenities />
    </div>
  )
}

export default Home