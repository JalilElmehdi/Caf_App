import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Application from './application';
import Match from './matchs';
import Historical from './histo';
import Groups from './groups';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path='/' element={<Application />}/>
            <Route  path='/historical' element={<Historical />}/>
            <Route  path='/matchs' element={<Match />}/>
            <Route  path='/groups' element={<Groups />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
