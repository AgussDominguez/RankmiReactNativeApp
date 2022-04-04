import React from 'react';
import Input from '../../../ui/Input';

interface Props {
  domain: string;
  setDomain: any;
}

const DomainInput: React.FC<Props> = ({domain, setDomain}) => {
  return (
    <Input
      value={domain}
      onChange={setDomain}
      suffix=".rankmi.com"
      placeholder="miempresa"
      noEnpty
    />
  );
};

export default DomainInput;
