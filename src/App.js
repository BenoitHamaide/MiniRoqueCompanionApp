import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home/Home';
import SheetComponent from './Components/SheetComponent/SheetComponent';

function App() {
  return (
  <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personnage" element={<SheetComponent />} />  
        </Routes>
         </div>
    </Router>
  );
}

export default App;
