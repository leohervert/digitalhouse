import {StyleSheet} from 'react-native';
import AppStyles, {colors, fontStyles} from '../../styles/AppStyles';
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pointsContainer: {
    width: '100%',
    marginTop: 20,
  },
  boxContainer: {
    backgroundColor: colors.main,
    minWidth: 250,
    width: 286,
    maxWidth: 286,
    height: 143,
    borderRadius: 20,
    marginBottom: 20,
    ...AppStyles.boxShadow,
  },
  monthText: {
    ...fontStyles.defaultFont,
    color: colors.white,
    fontSize: 16,
    lineHeight: 21,
    flexGrow: 1,
    paddingLeft: 20,
    textAlignVertical: 'center',
  },
  pointsText: {
    ...fontStyles.defaultFont,
    fontSize: 32,
    flexGrow: 2,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 43,
  },
});
