import React,{useState,useEffect} from "react";
import axios from "axios";
 

const useFetch = (endpoint,query) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(null);
    const [error ,setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
      };

      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options)
            setData(response.data.data)
             setIsLoading(false)
       
        } catch (error) {
              setError(error)
              console.log(error);
              alert("There is an error")
        } finally {
            setIsLoading(false)
        }
      }

      useEffect(() => {
        fetchData()
      },[]);
      const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch};
}

export default useFetch;