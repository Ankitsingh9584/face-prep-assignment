import { useEffect, useState } from "react";
// importing loader component
import { Loader } from "../components/loader";
import axios from "axios"
import { HStack, VStack,Text,Image, Box } from "@chakra-ui/react";
import { Dashboard } from "../components/dashboard";
// using  InfiniteScroll for handelling scrolling part
import InfiniteScroll from "react-infinite-scroll-component";

// main page that is home component where all the users are going to show on infinite scrolling
export function Home(){
    const [loading,setLoading]=useState(false);
    const [user,setUser]=useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    useEffect(()=>{
        setLoading(true)
      callApi()
    },[]);
  
//  api call function
    const callApi=async()=>{
        let id;
        if(id){
            clearTimeout(id)
        }
       id= setTimeout(async () => {
        let res=await axios.get(`https://randomuser.me/api/?page=${page}&results=15`);
      
          setUser([...user,...res.data.results]);
          setPage(page+1)
          setLoading(false);
          if (res.data.results.length === 0) {
            setHasMore(false);
          }
        }, 1000);
          }
    
    return(
        <>
      <Dashboard/>
      {
        loading ?   <Loader/> :
        <InfiniteScroll
        dataLength={user.length}
        next={callApi}
        hasMore={true}
        scrollThreshold={0.9}
        style={{ overflow: "visible" }}
         loader={<Loader/> }
         endMessage={<h1>No more data</h1>}
      >
        <VStack w={"100%"} margin={"auto"} marginTop={"25px"}  >
         {user && user.map((el)=>{
            return(
                <>
                <HStack w={{base:"95%",md:"65%",lg:"50%"}} margin={"auto"} my={"15px"} textAlign={"center"} boxShadow={"lg"} p={"12px"}>
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
        </InfiniteScroll>
      }
        </>
    )
}