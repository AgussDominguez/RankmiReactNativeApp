import React from 'react';
import Input from '../../../ui/input/Input';

interface Props {
  domain: string;
  setDomain: any;
  onSubmit: (subdomain: string) => void;
  placeholder: string;
  noEnptyMessage: string;
}

const DomainInput: React.FC<Props> = ({
  domain,
  setDomain,
  onSubmit,
  placeholder = '',
  noEnptyMessage,
}) => {
  const handleSubmit = () => {
    if (domain) {
      onSubmit(domain);
    }
  };

  return (
    <Input
      value={domain}
      onChange={setDomain}
      suffix=".rankmi.com"
      placeholder={placeholder}
      noEnpty
      dataToSubmit={domain}
      onSubmit={handleSubmit}
      autoCapitalize="none"
      noEnptyMessage={noEnptyMessage}
    />
  );
};

export default DomainInput;
