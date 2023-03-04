import React from 'react';
import Header from './component/header/header.js';
import Slider from './component/slider/slider.js';
import About from './component/about/about.js';
import Offer from './component/offer/offer.js';
import Team from './component/team/team.js';
import Footer from './component/footer/footer.js';

function App() {
  return (
    <div className="App">
		<Header />
        <Slider /> 
        <About /> 
        <Offer /> 
        <Team /> 
		<Footer />
       
     
      
    </div>
  );
}

export default App;
