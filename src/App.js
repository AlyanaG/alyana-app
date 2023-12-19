import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Accessories from './Components/Accessories/Accessories';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Login/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/accessories' element={<Accessories></Accessories>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
