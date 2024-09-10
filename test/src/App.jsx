
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu from './Menu';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Menu/>
      <br/>
      <Routes>
<Route path="/"element={<>this is home</>}/>
<Route path="/About" element={<>this is about</>}/>
<Route path="/contact" element={<>this is contact</>}/>

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;