import {useState, useEffect} from 'react';
import axios from 'axios';

const useGet = ({url}) => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(url);
        setData(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false)
      } catch (error) {
        setError(true);
        console.log(error);
      }finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return ([data, loading, nextUrl, prevUrl, error]);
}

export default useGet;