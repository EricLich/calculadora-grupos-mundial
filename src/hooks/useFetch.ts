import { useEffect, useState } from "react";
import { customFetch } from "../services/fetch";

interface useFecthReturn<T> {
  data: T[];
  loading: boolean;
  error: any;
}

export const useFetch = <T>(fetchUrl: string): useFecthReturn<T> => {
  const [fetchReturn, setFetchReturn] = useState<useFecthReturn<T>>({
    data: [],
    error: undefined,
    loading: false
  })

  useEffect(() => {
    const abortController = new AbortController();
    setFetchReturn({ ...fetchReturn, loading: true });
    customFetch(fetchUrl).then(res => {
      setFetchReturn({ ...fetchReturn, data: [...fetchReturn.data, ...res], loading: false });
    }).catch(err => setFetchReturn({ ...fetchReturn, error: err }));

    return () => {
      abortController.abort();
    }
  }, []);

  return fetchReturn;
}