import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element={<Comp1/>} />
          <Route path="/comp2" element={<Comp2/>} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
