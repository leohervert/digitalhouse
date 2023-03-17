import {StyleSheet} from 'react-native';
import AppStyles, {colors, fontStyles} from '../../styles/AppStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
  },
  mainButton: {
    backgroundColor: colors.main,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    ...AppStyles.boxShadow,
  },
  textButton: {
    ...fontStyles.defaultFont,
    color: colors.white,
  },
});
