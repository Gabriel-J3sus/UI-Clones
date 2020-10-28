import React from 'react';

import Menu from './Pages/Menu';
import Header from './components/Header';
import Guide from './components/Guide'; 
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Header />
      <Guide />
      <Menu />

      <GlobalStyles />
    </>
  );
}

export default App;
