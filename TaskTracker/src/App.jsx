
import './App.css'
import img from './assets/a.jpeg'
import './component/style.css'

import Abc from './component/Abc.jsx'
import Copy from './component/Copy.jsx'
function App() {
  return (
    <>
      <h1>hello</h1>
     
     <div className="image">
      <img src={img} alt="Description of image" />
      </div>
    <Abc/>
    <Abc/>
    <Abc/>
    <Abc/>
    <Abc/>
    <Copy/>
    </>
  )
}

export default App

