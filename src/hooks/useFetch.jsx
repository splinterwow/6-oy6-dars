import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Something went wrong :(");
        }
        const response = await request.json();
        setTodos(response);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        console.log(error.message);
        setError(error.message);
      }
    };
    getData();
  }, [url]);

  return { data, isPending, error };
}

export { useFetch };
