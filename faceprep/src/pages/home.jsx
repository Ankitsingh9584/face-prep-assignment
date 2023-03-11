import { useEffect, useState } from "react";
import { Loader } from "../components/loader";
import axios from "axios"
import { HStack, VStack,Text,Image, Box } from "@chakra-ui/react";
import { Dashboard } from "../components/dashboard";


export function Home(){
    const [loading,setLoading]=useState(false);
    const [user,setUser]=useState([]);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(15)
    useEffect(()=>{
        setLoading(true)
      callApi()
    },[page]);
  

    const callApi=async()=>{
   
        let res=await axios.get(`https://randomuser.me/api/?page=${page}&results=${limit}`);
        console.log(res.data.results)
          setUser([...user,...res.data.results]);
          setLoading(false);
          }


          const handleScroll = () => {

            setTimeout(() => {
                if (window.innerHeight + document.documentElement.scrollTop + 1 >=
                    document.documentElement.scrollHeight) {
    
                    setLoading(true)
                    setPage((prev) => prev + 1)
                }
            }, 1000);
    
        }
    
        useEffect(() => {
            window.addEventListener('scroll', handleScroll)
    
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, [])
     
    


    



    return(
        <>
      <Dashboard/>
      {
        loading ?   <Loader/> :
        <VStack w={"100%"} margin={"auto"} >
         {user && user.map((el)=>{
            return(
                <>
                <HStack w={"100%"} margin={"auto"} textAlign={"center"}>
                    <Box w={"70%"}>
                    <Text fontSize={{base:"xl",md:"2xl",lg:"2xl"}} fontWeight={"bold"}> {el.name.first} {el.name.last}</Text>
                    </Box>
          
            <Box w={"40%"}>
            <Image  borderRadius={"50%"} src={el.picture.medium}/>
            </Box>
         </HStack>
                </>
            )
         })}
        </VStack>
      }
        </>
    )
}