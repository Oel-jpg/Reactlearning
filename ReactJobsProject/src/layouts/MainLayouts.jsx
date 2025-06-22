import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const MainLayouts = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </> 
  )
}

export default MainLayouts