import React from 'react';
import DomainTemplate from '../components/template/domain';
import LoginTemplate from '../components/template/login';

const LoginPage: React.FC = () => {
  const enterprise = false; /* TODO: Logica obtener empresa desde url */
  return enterprise ? <LoginTemplate /> : <DomainTemplate />;
};

export default LoginPage;
