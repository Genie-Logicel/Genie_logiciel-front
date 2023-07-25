<<<<<<< HEAD
import Test from './Test';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Competence from './screen/Competences/Competence';
import Portofolio from './Portofolio/Portofolio';
=======
import Test from "./Test";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Portofolio from "./Portofolio/Portofolio";
>>>>>>> b427936a6405ddeadb62852f6eb25346c7de3b0c
function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD

<Routes>
<Route exact path="/" element={<Test/>}/>
     <Route exact path="/portofolio" element={<Portofolio />}/>
</Routes>



  
  
</Router>
      
=======
        <Routes>
          <Route exact path="/" element={<Test />} />
          <Route exact path="/portofolio" element={<Portofolio />} />
        </Routes>
      </Router>
>>>>>>> b427936a6405ddeadb62852f6eb25346c7de3b0c
    </div>
  );
}

export default App;
