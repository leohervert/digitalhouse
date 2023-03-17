import {StyleSheet} from 'react-native';
import {fontStyles} from '../../styles/AppStyles';

export const styles = StyleSheet.create({
  textBold: {
    ...fontStyles.defaultFont,
    paddingTop: 20,
    fontSize: 20,
    lineHeight: 27.32,
  },
  text: {
    ...fontStyles.lightFont,
    fontSize: 16,
    lineHeight: 21.86,
  },
});
