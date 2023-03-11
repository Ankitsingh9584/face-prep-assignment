import { VStack,Input,Text, Button, Box,useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const userDetails={userName:"",password:""}


export function Login(){
const [user,setUser]=useState(userDetails);

const navigate=useNavigate();
const toast=useToast();
const setUserFun=(target)=>{
    const {value,name}=target;
    setUser({...user,[name]:value})
};

const checkUser=()=>{
    if(user.userName==="" || user.password===""){
        return  toast({
            title: 'All fields are mandatory',
            description: "Please fill both the fields",
            status: 'warning',
            duration: 3000,
            isClosable: true,
          })
    }
if(user.userName==="foo" && user.password==="bar"){
return navigate("/home")
}
else{
 return   toast({
        title: 'Wrong Credentials',
        description: "Please try to login with right username and password",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
}
}

    return(
        <>
       <Box boxShadow={"md"} w={"35%"} margin={"auto"} padding={"34px"} marginTop={"100px"}>
       <Text fontSize={"4xl"} fontWeight={"bold"} align={"center"}>Login</Text>
        <VStack w={"90%"} align={"start"} margin={"auto"}>
            <Text fontWeight={"bold"} fontSize={"2xl"}>UserName :</Text>
            <Input name="userName" onChange={(e)=>setUserFun(e.target)} placeholder="Enter UserName"/>
            <Text fontWeight={"bold"} fontSize={"2xl"}>Password :</Text>
            <Input name="password" onChange={(e)=>setUserFun(e.target)}  placeholder="Enter Password"/>
        
        </VStack>
      <Box align={"center"} marginTop={"18px"} >  <Button colorScheme={"blue"} 
      bgGradient={'linear(to-l, #7928CA, #FF0080)'}
      _hover={{ bgGradient:'linear(to-l, #7928CA, orange)'}}
      onClick={checkUser}
      >Submit</Button></Box>
       </Box>

        </>
    )
}