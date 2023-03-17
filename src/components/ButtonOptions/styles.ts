import {StyleSheet} from 'react-native';
import AppStyles, {colors, fontStyles} from '../../styles/AppStyles';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 43,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  rightOption: {
    marginRight: 13,
  },
  leftOption: {
    marginLeft: 13,
  },
  mainButton: {
    backgroundColor: colors.main,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    ...AppStyles.boxShadow,
  },
  subButton: {
    flex: 1,
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
