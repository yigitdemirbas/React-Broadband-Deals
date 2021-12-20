import './App.scss';
import { useEffect } from 'react';
import { ProvidersList } from './components/ProvidersList/ProvidersList';
import API from './API/api';

const App = () => {
  const { getProviderList } = API();

  useEffect(() => {
    getProviderList('api/test/deals');
  }, []);

  return (
    <div className="app">
      <ProvidersList />
    </div>
  );
};

export default App;
