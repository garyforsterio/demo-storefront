import { useEffect, useState } from 'react';

import config from '/config';

type UseFetchReturn<T> = {
  response: T | undefined;
  error: Error | undefined;
  loading: boolean;
};

/**
 * Used to access API
 * Prefixes default API pathname and performs HTTP request
 */
function useApi<T>(url: string, options?: RequestInit): UseFetchReturn<T> {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(config.apiUrl + url, options);
        const json: { data: T } | T = await res.json();
        setResponse('data' in json ? json.data : json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return { response, error, loading };
}

export default useApi;
