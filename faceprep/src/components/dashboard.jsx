import { Image, Flex, Text, Box} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useNavigate } from "react-router-dom";

// dashboard component where logo and logout is there

export function Dashboard(){
    let auth=sessionStorage.getItem("auth");
    const navigate=useNavigate();
const callLogout=()=>{
    sessionStorage.removeItem("auth")
navigate("/")
}
// navigate to home
const callHome=()=>{
    
navigate("/home")
}


    return(
        <>
       <Flex w={"full"} height={"62px"} margin={"auto"} boxShadow={"md"} justifyContent={"space-between"}>
        <Image w={{base:"40%",md:"28%",lg:'20%'}} h={"25px"} marginTop={"15px"} src="https://www.faceprep.in/statics/media/logo_web.47d10a50.svg"/>
  
        <Box w={"60%"} display={"flex"} justifyContent={"end"}> 
        <Text marginTop={'7px'}  onClick={callHome} _hover={{color:"orange.500" , cursor:"pointer"} } fontWeight={"bold"} 
   fontSize={{base:"2xl",md:"3xl",lg:"3xl"}}  align={"end"} paddingRight={'5%'}>
 Home</Text>
   <Text marginTop={'7px'}  onClick={callLogout} _hover={{color:"orange.500" , cursor:"pointer"} } fontWeight={"bold"} 
   fontSize={{base:"2xl",md:"3xl",lg:"3xl"}}  align={"end"} paddingRight={'5%'}>
  { auth==="yes" ?  "Logout" :"Login"}</Text>
        </Box>
       </Flex>
        </>
    )
}