import React from 'react';
import DomainHelpLink from '../atoms/DomainHelpLink';

const DomainHelpInfo: React.FC = () => {
  const domainArticleURL =
    'https://intercom.help/rankmi/es/articles/4598714-que-es-el-dominio-de-empresa';
  return (
    <DomainHelpLink
      linkURL={domainArticleURL}
      linkTitle={'¿Qué es el dominio de empresa? '}
    />
  );
};

export default DomainHelpInfo;
