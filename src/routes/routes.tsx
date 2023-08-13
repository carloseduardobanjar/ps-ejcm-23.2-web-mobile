import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const Router = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
    </BrowserRouter>
   )
}

export default Router;