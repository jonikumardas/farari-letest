import { Route, Routes } from 'react-router-dom';
import './App.css';
import Manu from './components/Manu/Manu';
import Home from './components/Home/Home';
import Notfound from './components/NotFound/Notfound';
import Revews from './components/Reviews/Revews';
import Deshboard from './components/Deshboard/Deshboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About'

function App() {
  return (
    <div>
      <Manu></Manu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Revews></Revews>}></Route>
        <Route path='/deshboard' element={<Deshboard></Deshboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
   {/* <Home></Home> */}
     
    </div>
  );
}

export default App;
