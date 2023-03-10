import { VStack,Input,Text, Button, Box } from "@chakra-ui/react";





export function Login(){
    return(
        <>
       <Box boxShadow={"md"} w={"35%"} margin={"auto"} padding={"34px"} marginTop={"100px"}>
       <Text fontSize={"4xl"} fontWeight={"bold"} align={"center"}>Login</Text>
        <VStack w={"90%"} align={"start"} margin={"auto"}>
            <Text fontWeight={"bold"} fontSize={"2xl"}>UserName :</Text>
            <Input placeholder="Enter UserName"/>
            <Text fontWeight={"bold"} fontSize={"2xl"}>Password :</Text>
            <Input placeholder="Enter Password"/>
        
        </VStack>
      <Box align={"center"} marginTop={"18px"}>  <Button colorScheme={"blue"} >Submit</Button></Box>
       </Box>

        </>
    )
}