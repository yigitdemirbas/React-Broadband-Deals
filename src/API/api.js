import axios from 'axios';
import { ReferenceDataContext } from '../state/ReferenceDataContext';
import { useContext } from 'react';

const API = () => {
  const { setLoading, setProviderList, setError } =
    useContext(ReferenceDataContext);

  const getProviderList = async (endpoint) => {
    setLoading(true);
    await axios(`https://6177b8b59c328300175f5adc.mockapi.io/${endpoint}`)
      .then((resp) => {
        setProviderList(resp?.data?.deals);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    getProviderList,
  };
};

export default API;
