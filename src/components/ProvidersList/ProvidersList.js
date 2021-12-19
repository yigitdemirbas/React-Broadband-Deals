import './ProvidersList.scss';
import { useContext } from 'react';
import { ReferenceDataContext } from '../../state/ReferenceDataContext';
import { ProviderItem } from './ProviderItem/ProviderItem';
import { CompareList } from '../CompareList/CompareList';

export const ProvidersList = () => {
  const { providerList } = useContext(ReferenceDataContext);

  return (
    <div className="App">
      <div className="list-wrapper">
        {providerList.map((provider) => {
          return <ProviderItem key={provider.deal_id} item={provider} />;
        })}
      </div>
      <CompareList />
    </div>
  );
};
