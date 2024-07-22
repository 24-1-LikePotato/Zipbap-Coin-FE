import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/header/NavBar';

function App() {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;