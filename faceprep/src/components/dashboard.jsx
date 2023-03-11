import { Image, Flex, Text} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useNavigate } from "react-router-dom";

// dashboard component where logo and logout is there

export function Dashboard(){
    const navigate=useNavigate();
const callLogout=()=>{
navigate("/")
}

    return(
        <>
       <Flex w={"full"} height={"55px"} margin={"auto"} boxShadow={"md"} justifyContent={"space-between"}>
        <Image w={{base:"45%",md:"28%",lg:'20%'}} h={"25px"} marginTop={"15px"} src="https://www.faceprep.in/statics/media/logo_web.47d10a50.svg"/>
   <Text w={{base:"35%",md:"20%",lg:'18%'}} marginTop={'2px'}  onClick={callLogout} _hover={{color:"orange.500" , cursor:"pointer"} } fontWeight={"bold"} fontSize={{base:"2xl",md:"3xl",lg:"3xl"}}  align={"end"} paddingRight={'5%'}>Logout</Text>
       </Flex>
        </>
    )
}