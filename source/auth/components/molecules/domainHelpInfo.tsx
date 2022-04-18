import React from 'react';
import DomainHelpLink from '../atoms/DomainHelpLink';

interface IProps {
  t: any;
}

const DomainHelpInfo: React.FC<IProps> = ({t}) => {
  const domainArticleURL =
    'https://intercom.help/rankmi/es/articles/4598714-que-es-el-dominio-de-empresa';
  return (
    <DomainHelpLink
      linkURL={domainArticleURL}
      linkTitle={t('login.newLogin.subdomain.helpButton')}
    />
  );
};

export default DomainHelpInfo;
