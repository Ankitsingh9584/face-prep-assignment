import { Box, Text} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useNavigate } from "react-router-dom";



export function Dashboard(){
    const navigate=useNavigate();
const callLogout=()=>{
navigate("/")
}

    return(
        <>
       <Box w={"full"} height={"55px"} bgColor={"blue"}>
   <Text onClick={callLogout} _hover={{color:"orange" , cursor:"pointer"} } fontWeight={"bold"} fontSize={"2xl"} color={"white"} align={"end"} paddingRight={'5%'}>Logout</Text>
       </Box>
        </>
    )
}