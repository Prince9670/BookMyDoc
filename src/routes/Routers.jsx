import Home from "../pages/Home";
import Services from '../pages/Services';
import Login from '../pages/Login';
import Singup from '../pages/Singup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import { Routes, Route} from "react-router-dom";

const Routers = () => {
    return <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/home" element ={<Home/>} />
        <Route path="/services" element ={<Services/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/register" element ={<Singup/>} />
        <Route path="/Contact" element ={<Contact/>} />
        <Route path="/doctors" element ={<Doctors/>} />
        <Route path="/doctordetails" element ={<DoctorDetails/>} />
    </Routes>     
};


export default Routers;