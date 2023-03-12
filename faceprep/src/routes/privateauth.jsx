import { Navigate, useNavigate } from "react-router-dom";




export function PrivateAuth({children}){
   const auth=sessionStorage.getItem("auth");
   console.log(auth)
const navigate=useNavigate();
   if(auth==="yes"){
    return children
   }
else{
return <Navigate to="/" />;
}


}