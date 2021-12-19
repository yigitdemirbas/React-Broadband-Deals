import axios from 'axios';
import { ReferenceDataContext } from './state/ReferenceDataContext';
import { useContext } from 'react';

export const useProvidersAPI = async () => {
  const { setLoading, setProviderList, setError } =
    useContext(ReferenceDataContext);
  setLoading(true);
  await axios('https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals')
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
