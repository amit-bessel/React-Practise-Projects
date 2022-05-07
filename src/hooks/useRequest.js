import { useState, useEffect } from "react";
import axios from 'axios';

function useRequest({ method, url, data = null, config = null }) {
   const [response, setResponse] = useState(null);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const executeApi = async () => {
         try {
            const response = await axios[method](`${process.env.REACT_APP_BASE_URL}${url}`, JSON.parse(config), JSON.parse(data));
            setResponse(response.data);
         }
         catch (err) {
            setError(err); 
         }
         finally {
            setIsLoading(false);
         }
      };
      executeApi();
   },[method, url, data, config]);
  
     

   return { response, error, isLoading };
}

export default useRequest;