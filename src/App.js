import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header/Header';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Services from './pages/Services/Services/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Aboutus from './pages/AboutUs/Aboutus.js/Aboutus';
import FaQs from './pages/FaQ/FaQs/FaQs';
import Login from './pages/User/Login/Login';
import Registration from './pages/User/Registration/Registration';
import PrivateOutlet from './pages/User/PrivateOutlet/PrivateOutlet';

import Doctors from './pages/Doctors/Doctors/Doctors';
import Confirm from './pages/Appintment/Confirm/Confirm';
import Appointment from './pages/Appintment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='services/:serviceId' element={<Services></Services>}></Route>
            {/* private router */}
            <Route path='/*' element={<PrivateOutlet/>}>
              <Route path='appointment/:doctorId' element={<Appointment/>}></Route>
              <Route path='confirm' element={<Confirm/>}></Route>
            </Route>
            
            <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
            <Route path='/faq' element={<FaQs></FaQs>}></Route>
            <Route path='/doctors' element={<Doctors></Doctors>}></Route>
            <Route path='/login' element={<Login></Login>}></Route> 
            <Route path='/registration' element={<Registration></Registration>}></Route> 
          </Routes>
           <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
