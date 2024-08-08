import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then(result => {
          if (!result.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return result.json()
        })
        .then(responseData => {
          setData(responseData)
          setIsLoading(false) 
          setError(null)
        })
        .catch(err => {
          setIsLoading(false);
          setError(err.message)
        });
    }, [url]);

  return { data, isLoading, error };
}

export default useFetch;