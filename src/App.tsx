import React, { useState } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {
  const [selectedNavIsHome, setSelectedNavIsHome] = useState(true);

  return (
    <>
      <Header selectedNavIsHome={selectedNavIsHome} setSelectedNavIsHome={setSelectedNavIsHome} />
      {selectedNavIsHome && <Main />} 
      <Footer />
    </>
  );
}

export default App;
