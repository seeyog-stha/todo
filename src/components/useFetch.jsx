import { useEffect,useState } from "react";
const useFetch=(url,method=null)=>{
    const [data, setData] = useState([]);
    const [pending, isPeinding] = useState(true);
    const [error,setError]=useState(null)
    async function fetchdata() {
        try {
    
          let response = await fetch(url,method);
          let dataa = await response.json();
          setData(dataa);
          isPeinding(false)
        } 
        catch (err) {
          isPeinding(false)
          setError(err.message)
        }
      }
    
      useEffect(() => {
        
        fetchdata(url);
      }, [url,data.id]);
      console.log(data);
      return [data,pending,error]
}
export default useFetch