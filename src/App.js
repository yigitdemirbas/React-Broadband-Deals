import './App.scss';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { ProvidersList } from './components/ProvidersList/ProvidersList';
import { ReferenceDataContext } from './state/ReferenceDataContext';

const App = () => {
  const { setLoading, setProviderList, setError } = useContext(ReferenceDataContext);

  useEffect(() => {
    getProviderList();
  }, []);

  const getProviderList = async () => {
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

  return (
    <div className="app">
      <ProvidersList />
    </div>
  );
};

export default App;
