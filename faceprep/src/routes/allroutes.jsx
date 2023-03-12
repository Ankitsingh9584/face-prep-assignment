import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { PrivateAuth } from "./privateauth";



export function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<PrivateAuth><Home/></PrivateAuth>}/>
        </Routes>
        </>
    )
}