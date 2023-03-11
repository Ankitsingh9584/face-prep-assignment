import { Box, Button, Flex, Text} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useNavigate } from "react-router-dom";



export function Dashboard(){
    const navigate=useNavigate();
const callLogout=()=>{
navigate("/")
}

    return(
        <>
       <Flex w={"full"} height={"55px"} bgColor={"blue"} justify={"flex-end"}>
   <Text w={"10%"}  onClick={callLogout} _hover={{color:"orange" , cursor:"pointer"} } fontWeight={"bold"} fontSize={"2xl"} color={"white"} align={"end"} paddingRight={'5%'}>Logout</Text>
       </Flex>
        </>
    )
}