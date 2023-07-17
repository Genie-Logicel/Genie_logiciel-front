import Test from './Test';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Portofolio from './Portofolio/Portofolio';
import Competence from './screen/Competences/Competence';
function App() {
  return (
    <div className="App">
      <Router>

<Routes>
     <Route exact path="/" element={<Test/>}/>
     <Route exact path="/portofolio" element={<Portofolio/>}/>
</Routes>



  
  
</Router>
      
    </div>
  );
}

export default App;
