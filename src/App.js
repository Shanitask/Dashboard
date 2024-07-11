
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './Pages/Home';
import About from './Pages/About';
import Registratration from './Pages/Registratration';
import Login from './Pages/Login';
import CreateHome from './Pages/CreateHome';
import EditHome from './Pages/EditHome';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>

    <Route path='Registration' element={<Registratration></Registratration>}></Route>

      <Route path='/Dashboard/' element={<Dashboard></Dashboard>}>
      
      <Route path="Home" element={<Home></Home>}></Route>
      <Route path='CreateHome'element={<CreateHome></CreateHome>}></Route>
      <Route path="EditHome/:empid" element={<EditHome></EditHome>}></Route>

      <Route path="About" element={<About></About>}></Route>
      </Route>
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
