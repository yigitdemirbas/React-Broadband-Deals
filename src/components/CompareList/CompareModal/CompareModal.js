import './CompareModal.scss';
import { useContext } from 'react';
import { ReferenceDataContext } from '../../../state/ReferenceDataContext';
import { Modal, Box, Rating, Button } from '@mui/material';
import { Close } from '@mui/icons-material';

export const CompareModal = () => {
  const { compareProviderList, isCompareModalOpen, setCompareModalOpen } =
    useContext(ReferenceDataContext);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={isCompareModalOpen} onClose={() => setCompareModalOpen(false)}>
      <Box sx={style}>
        <div className="modal-header">
          <h3>Compare</h3>
          <Button onClick={() => setCompareModalOpen(false)}>
            <Close />
          </Button>
        </div>

        <div className="compare-wrapper">
          <table className="compare-table">
            <tbody>
              <tr>
                <td></td>
                {compareProviderList.map((provider) => {
                  return (
                    <td key={provider.deal_id}>
                      <div className="provider__head">
                        <img
                          className="provider__image"
                          src={provider.provider_logo_image_url}
                          alt={provider.provider_name}
                        />
                        <div className="provider__info-box">
                          <span>{provider.provider_name}</span>
                          <span className="small">{provider.deal_name}</span>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Rating</td>
                {compareProviderList.map((provider) => {
                  return (
                    <td key={provider.deal_id}>
                      <Rating
                        name="read-only"
                        value={provider.provider_rating * 5}
                        precision={0.1}
                        readOnly
                      />
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Monthly Cost</td>
                {compareProviderList.map((provider) => {
                  return (
                    <td key={provider.deal_id}>£{provider.monthly_price}</td>
                  );
                })}
              </tr>
              <tr>
                <td>Speed</td>
                {compareProviderList.map((provider) => {
                  return (
                    <td key={provider.deal_id}>
                      {provider.internet_speed}Mbps
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Broadband Type</td>
                {compareProviderList.map((provider) => {
                  return (
                    <td key={provider.deal_id}>{provider.broadband_type}</td>
                  );
                })}
              </tr>
              <tr>
                <td>Set Up Cost</td>
                {compareProviderList.map((provider) => {
                  return (
                    <td key={provider.deal_id}>£{provider.set_up_cost}</td>
                  );
                })}
              </tr>
              <tr>
                <td>Term End</td>
                {compareProviderList.map((provider) => {
                  return (
                    <td key={provider.deal_id}>£{provider.contract_info}</td>
                  );
                })}
              </tr>
              <tr>
                <td>Data Limits</td>
                {compareProviderList.map((provider) => {
                  return <td key={provider.deal_id}>{provider.data_limits}</td>;
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </Modal>
  );
};
