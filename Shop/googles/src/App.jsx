import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from "./Menu";
import ''./AboutCompany';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <>Menu</>
     <Routes>
      <Route path="/" element={<>uhdGFCHYHDG</>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<h1>About sections</About></h1>}/>
      <Route path="/about/company" element={<><AboutCompany/></>}/>
      <Route path="/about/company/person" element={<><Person/></>}/>

  
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
export default AboutCompany
