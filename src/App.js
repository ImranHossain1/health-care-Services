import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header/Header';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Services from './pages/Services/Services/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/services/:serviceId' element={<Services></Services>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
