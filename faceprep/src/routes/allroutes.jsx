import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";



export function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </>
    )
}