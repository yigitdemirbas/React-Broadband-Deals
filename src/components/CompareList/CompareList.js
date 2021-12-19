import './CompareList.scss';
import { useContext } from 'react';
import { ReferenceDataContext } from '../../state/ReferenceDataContext';
import { CompareModal } from '../CompareList/CompareModal/CompareModal';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';

export const CompareList = () => {
  const { compareProviderList, setCompareProviderList, setCompareModalOpen } =
    useContext(ReferenceDataContext);

  const toggle = (provider) => {
    if (compareProviderList.some((x) => x?.deal_id === provider?.deal_id)) {
      setCompareProviderList([
        ...compareProviderList.filter((p) => p.deal_id !== provider.deal_id),
      ]);
    } else {
      if (compareProviderList.length && compareProviderList.length === 2)
        return;
      setCompareProviderList([...compareProviderList, provider]);
    }
  };

  return (
    <div>
      {compareProviderList.length ? (
        <div className="compare-list-wrapper">
          {compareProviderList.map((provider, index) => {
            return (
              <div key={index} className="compare-list-wrapper__provider">
                <img
                  className="compare-list-wrapper__image"
                  src={provider.provider_logo_image_url}
                  alt={provider.provider_name}
                />
                <div className="compare-list-wrapper__info-box">
                  <span>{provider.provider_name}</span>
                  <span>{provider.deal_name}</span>
                </div>
                <Button onClick={() => toggle(provider)}>
                  <Close />
                </Button>
              </div>
            );
          })}
          <Button variant="contained" onClick={() => setCompareModalOpen(true)}>
            Compare deals ({compareProviderList.length} of 2)
          </Button>
        </div>
      ) : null}
      <CompareModal />
    </div>
  );
};
