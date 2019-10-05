import { useState, useEffect } from 'react';
import axios from 'axios';
import '@babel/polyfill'; // fix regeneratorruntime is randomly not defined babel issue

const useFetch = (url, params) => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(url, { params });
      setState(response.data);
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { loading, state };
};

export default useFetch;
