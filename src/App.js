import Home from './Home';
import Student from './Student'
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import StudentDesc from './StudentDesc';
import {Studentprovide} from './CreateContext'


function App() {
  return (
    <Studentprovide>

        <Router>
        <Header/>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/studentDesc' element={<StudentDesc/>}>
              <Route path=':id' element={<StudentDesc/>}></Route>
            </Route>

          </Routes>

        </Router>

    </Studentprovide>
  );
}

export default App;