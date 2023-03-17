import './App.css';
import NavBar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route,Outlet} from 'react-router-dom'
import HomePage from './Pages/Home/main'
import ActivitiesPage from './Pages/Activities/Main' 
import LabPage from './Pages/Lab/main'
import './Pages/Home/main.css'
import Footer from './components/Footer/Footer'
import FacultyPage from './Pages/Faculty/Faculty';
import MgPage from "./Pages/Lab/main1";
import Error from './Pages/404/main'
import Eventspage from "./Pages/Eventspage/EveMain"
function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Outlet />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="faculty" element={<FacultyPage />} />
        <Route path="activity" element={<ActivitiesPage />} />
        <Route path="events" element={<Eventspage />} />
        <Route path="labs" element={<LabPage />} />
        <Route path='mg' element={<MgPage  />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
