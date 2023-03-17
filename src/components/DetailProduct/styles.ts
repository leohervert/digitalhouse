import {StyleSheet} from 'react-native';
import {colors, fontStyles} from '../../styles/AppStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    lineHeight: 27.32,
  },
  detailTitle: {
    ...fontStyles.defaultFont,
    color: colors.gray,
    marginBottom: 19,
  },
  detailText: {
    ...fontStyles.defaultFont,
  },
  dateText: {
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 21.86,
  },
  pointsText: {
    marginTop: 32,
    fontSize: 24,
    lineHeight: 32.78,
  },
});
