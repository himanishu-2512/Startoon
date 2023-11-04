import React from 'react'
import Header from './Components/Header';
import Info from './Components/Info';
import { patient_data } from './data/data';
function App() {
  return (
    <>
    <Header/>
    <Info props={patient_data[0]}/>
    </>
  )
}

export default App;