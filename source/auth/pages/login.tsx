import React, {useEffect, useState} from 'react';
import DomainTemplate from '../components/template/domain';
import LoginTemplate from '../components/template/login';
import {fetchEnterpriseConfiguration} from '../services/enterpriseLogin.service';
import {
  clearEnterpriseInformation,
  setEnterpriseData,
} from '../services/enterprise-configuration.service';
import EnterpriseConfiguration from '../models/enterprise-configuration';
import Loader from '../../ui/loader/Loader';
import {BackHandler} from 'react-native';

interface Props {
  refreshHome: () => void;
}

const LoginPage: React.FC<Props> = ({refreshHome}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [enterpriseConfig, setEnterpriseConfig] =
    useState<EnterpriseConfiguration>();

  const validateSubdomain = (subdomain: string) => {
    setLoading(true);
    fetchEnterpriseConfiguration(subdomain)
      .then(response => {
        setLoading(false);
        setEnterpriseConfig(response);
        setEnterpriseData(response);
      })
      .catch(err => {
        setLoading(false);
        console.log('err', err); /* TODO: Error handler */
      });
  };

  useEffect(() => {
    const backAction = () => {
      setEnterpriseConfig(undefined);
      clearEnterpriseInformation();
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  if (enterpriseConfig) {
    return (
      <LoginTemplate enterprise={enterpriseConfig} refreshHome={refreshHome} />
    );
  }
  return (
    <>
      <DomainTemplate onSubdomainSelected={validateSubdomain} />
      {loading && <Loader overlay size={80} />}
    </>
  );
};

export default LoginPage;
