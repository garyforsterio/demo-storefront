import React, { useState } from 'react';

import config from '/config';

type UseFetchReturn<T> = {
  response: T | undefined;
  error: Error | undefined;
  loading: boolean;
};

function useFetch<T>(url: string, options?: RequestInit): UseFetchReturn<T> {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(config.apiUrl + url, options);
        const json: { data: T } = await res.json();
        setResponse(json.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return { response, error, loading };
}

export default useFetch;
