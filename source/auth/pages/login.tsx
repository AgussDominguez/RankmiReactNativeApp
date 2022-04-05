import React, {useState} from 'react';
import DomainTemplate from '../components/template/domain';
import LoginTemplate from '../components/template/login';
import {fetchEnterpriseConfiguration} from '../services/enterpriseLogin.service';
import EnterpriseConfiguration from '../models/enterprise-configuration';
import {Text} from 'react-native';

const LoginPage: React.FC = () => {
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);
  const [enterpriseConfig, setEnterpriseConfig] =
    useState<EnterpriseConfiguration>();

  const validateSubdomain = (subdomain: string) => {
    setLoading(true);
    fetchEnterpriseConfiguration(subdomain)
      .then(response => {
        setLoading(false);

        setEnterpriseConfig(response);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  };
  if (enterpriseConfig) {
    return <LoginTemplate />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <>
      <DomainTemplate onSubdomainSelected={validateSubdomain} />
      {loading && <Text>loading...</Text>}
    </>
  );
};

export default LoginPage;
