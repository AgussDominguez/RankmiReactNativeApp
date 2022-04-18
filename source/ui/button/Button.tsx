import React, {ReactElement} from 'react';
import {Text, Pressable} from 'react-native';
import styles from './Button.template.style';

type ButtonTypes = 'default' | 'text' | 'card';
type IconPosition = 'left' | 'right';

interface Props {
  color?: string;
  fontColor?: string;
  buttonTitle: string;
  dataToSubmit?: any;
  disabled?: boolean;
  onClick: (dataToSubmit?: any) => void;
  icon?: ReactElement<any, any>;
  size?: number;
  paddingVertical?: number;
  type?: ButtonTypes;
  iconPosition?: IconPosition;
  marginVertical?: number;
}

const Button: React.FC<Props> = ({
  color = '#2684ff',
  fontColor = '#fff',
  buttonTitle,
  dataToSubmit,
  disabled = false,
  onClick,
  icon,
  size = 14,
  paddingVertical = 6,
  type = 'default',
  iconPosition = 'left',
  marginVertical = 4,
}) => {
  const handleClick = () => {
    if (dataToSubmit) {
      onClick(dataToSubmit);
    }
    onClick();
  };

  return (
    <Pressable
      style={[
        {
          backgroundColor: color,
          paddingVertical: paddingVertical,
          marginVertical: marginVertical,
        },
        styles.button,
        type === 'card' && styles.cardButton,
        type === 'text' && styles.textButton,
      ]}
      onPress={handleClick}
      disabled={disabled}>
      {iconPosition === 'left' && icon && (
        <>
          {icon}
          <Text>{'   '}</Text>
        </>
      )}
      <Text
        style={[
          {
            fontSize: size,
            color: fontColor,
          },
          styles.buttonText,
          type === 'card' && styles.cardButtonText,
          type === 'text' && styles.textButtonText,
        ]}>
        {`${buttonTitle}`}
      </Text>
      {iconPosition === 'right' && icon && (
        <>
          <Text>{'   '}</Text>
          {icon}
        </>
      )}
    </Pressable>
  );
};

export default Button;
