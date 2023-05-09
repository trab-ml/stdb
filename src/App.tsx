import React, { useState } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { selectedNavIsHomeContext } from './header/Context';

function App() {
  const [selectedNavIsHome, setSelectedNavIsHome] = useState(true);
  console.log(selectedNavIsHome)

  return (
    <selectedNavIsHomeContext.Provider value={{ selectedNavIsHome, setSelectedNavIsHome }}>
      <Header/>
      {selectedNavIsHome && <Main />} 
      <Footer />
    </selectedNavIsHomeContext.Provider>
  );
}

export default App;
