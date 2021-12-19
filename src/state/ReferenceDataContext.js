import React, { createContext, useState } from 'react';

export const ReferenceDataContext = createContext();

export const ReferenceDataProvider = ({ children }) => {
  const [providerList, setProviderList] = useState([]);
  const [compareProviderList, setCompareProviderList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isCompareModalOpen, setCompareModalOpen] = useState(false);

  return (
    <ReferenceDataContext.Provider
      value={{
        providerList,
        compareProviderList,
        isCompareModalOpen,
        loading,
        error,
        setProviderList,
        setCompareProviderList,
        setCompareModalOpen,
        setLoading,
        setError,
      }}
    >
      {children}
    </ReferenceDataContext.Provider>
  );
};
