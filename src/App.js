import Test from './Test';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import About from './About/About';
function App() {
  return (
    <div className="App">
      <Router>

<Routes>
     <Route exact path="/" element={<Test/>}/>
     <Route exact path="/about" element={<About/>}/>
</Routes>



  
  
</Router>
      
    </div>
  );
}

export default App;
