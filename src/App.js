
import Auth from './Auth/Auth';
import ButtonUsage from './components/button/ButtonUsage';
import Inicio from './Auth/Inicio';

import {BrowserRouter, Routes,Route} from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    // <div className="App">
    //   {/* <Auth/> */}
    //   {/* <ButtonUsage/> */}
    //   {/* <p>Hola mundo</p> */}
    //   <Inicio/>
    // </div>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<Auth/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
