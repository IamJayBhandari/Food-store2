import React from 'react'
import Header from '../component/Header'
import RecommensedFood from '../component/RecommensedFood'
import Service from '../component/Service'
import NewFoods from '../component/NewFoods'
import Service2 from '../component/Service2'
import Special from '../component/Special'

const Home = () => {
  return (
    <div>
      <Header />
      <RecommensedFood />
      <Service/>
      <NewFoods/>
      <Service2/>
      <Special/>
        
    </div>
  )
}

export default Home