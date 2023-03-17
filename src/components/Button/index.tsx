import React from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';

type UserProps = {
  textStyles?: StyleProp<TextStyle>;
};

type Props = UserProps & TouchableOpacityProps;

export const Button = ({
  style,
  textStyles,
  onPress,
  children,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
