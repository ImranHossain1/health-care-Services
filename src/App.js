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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='/*' element={<PrivateOutlet/>}>
              <Route path='services/:serviceId' element={<Services></Services>}></Route>
            </Route>
            
            <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
            <Route path='/faq' element={<FaQs></FaQs>}></Route>
            <Route path='/login' element={<Login></Login>}></Route> 
            <Route path='/registration' element={<Registration></Registration>}></Route> 
          </Routes>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
