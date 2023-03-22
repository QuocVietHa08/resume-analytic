import React from 'react'
import Introduction from './Introduction';
import Service from './Service';
import Work from './Work';
import Helper from './Helper';
import Certification from './Certification';
import Testimonials from './Testimonials';

const Home = () => {
  return <div>
    <Introduction />
    <Service />
    <Work />
    <Helper />
    <Certification />
    <Testimonials />
  </div>
}

export default Home;