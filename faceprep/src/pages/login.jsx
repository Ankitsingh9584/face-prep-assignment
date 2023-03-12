import { VStack,Input,Text, Button, Box,useToast,Image } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../components/dashboard";


const userDetails={userName:"",password:""}

// login component where user can login
export function Login(){
const [user,setUser]=useState(userDetails);

const navigate=useNavigate();
const toast=useToast();
// saving values to states
const setUserFun=(target)=>{
    const {value,name}=target;
    setUser({...user,[name]:value})
};
// button onclick function for checking username and password
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
    // if username and password matches navigate to home page
if(user.userName==="foo" && user.password==="bar"){
    sessionStorage.setItem("auth","yes")
return navigate("/home")
}
else{ 
    // if  username and password not matches
    setUser({userName:"",password:""});
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
        <Dashboard/>
       
       <Box boxShadow={"md"} w={{base:"90%",md:"65%",lg:"38%"}} margin={"auto"} padding={"34px"} marginTop={"40px"}>
       <Text fontSize={"4xl"} fontWeight={"bold"} align={"center"}>Login</Text>
        <VStack w={"90%"} align={"start"} margin={"auto"}>
            <Text fontWeight={"bold"} fontSize={"2xl"}>UserName :</Text>
            <Input value={user.userName} name="userName" onChange={(e)=>setUserFun(e.target)} placeholder="Enter UserName"/>
            <Text fontWeight={"bold"} fontSize={"2xl"}>Password :</Text>
            <Input value={user.password} name="password" onChange={(e)=>setUserFun(e.target)}  placeholder="Enter Password"/>
        
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