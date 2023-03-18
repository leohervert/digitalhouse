import React from 'react';
import {TouchableOpacity} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';

export const Button = ({
  style,
  onPress,
  children,
}: TouchableOpacityProps): JSX.Element => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
