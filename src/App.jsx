import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import allBeasts from './data.json'
import SelectedBeast from './components/SelectedBeast'
import './App.css'
import { useState } from 'react'


function App() {

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});

  function displayAsModal(name) {
    const beastWithName = allBeasts.find(beast => beast.title === name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }

  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <>
      <Header />
      <Gallery
        allBeasts={allBeasts}
        displayAsModal={displayAsModal}
      />
      <SelectedBeast
        selectedBeast={selectedBeast}
        show={displayModal}
        handleClose={handleClose}
      />
      <Footer />
    </>
  )
}

export default App
