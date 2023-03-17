import {StyleSheet} from 'react-native';
import AppStyles, {colors} from '../../styles/AppStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  touchable: {
    marginBottom: 6,
  },
  titleContainer: {
    flexGrow: 4,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  pointsContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 11,
  },
  nameText: {
    ...AppStyles.mainText,
    lineHeight: 19,
  },
  dateText: {
    ...AppStyles.subText,
    lineHeight: 16,
    fontSize: 12,
  },
  pointsText: {
    ...AppStyles.mainText,
    lineHeight: 21.86,
    fontSize: 16,
  },
  redColor: {
    color: colors.red,
  },
  greenColor: {
    color: colors.green,
  },
});
