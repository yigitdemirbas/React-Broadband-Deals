import './ProviderItem.scss';
import { useContext } from 'react';
import { Button, Rating } from '@mui/material';
import { ReferenceDataContext } from '../../../state/ReferenceDataContext';

export const ProviderItem = (props) => {
  const provider = props?.item;
  const { compareProviderList, setCompareProviderList } =
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
    <div className="item">
      <div className="item__image-wrapper">
        <img
          className="item__image"
          src={provider.provider_logo_image_url}
          alt={provider.provider_name}
        />
      </div>
      <div className="item__info-box">
        <span>{provider.provider_name}</span>
        <span>{provider.deal_name}</span>
        <Rating name="read-only" value={(provider.provider_rating * 5)} precision={0.1} readOnly />
      </div>
      <div>
          <span>£{provider.monthly_price}</span>
          <span>Monthly Cost</span>
      </div>
      <div>
          <span>{provider.internet_speed}</span>
          <span>{provider.broadband_type} Speed</span>
      </div>
      <div>
          <span>£{provider.set_up_cost}</span>
          <span>Setup Cost</span>
      </div>
      <div>
          <span>{provider.contract_info}</span>
          <span>Contract</span>
      </div>
      <div>
        <Button variant="outlined" onClick={() => toggle(provider)}>
          {compareProviderList.includes(provider) ? 'Remove' : 'Add to Compare'}
        </Button>
      </div>
    </div>
  );
};
