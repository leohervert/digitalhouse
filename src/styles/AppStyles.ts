import {StyleSheet} from 'react-native';

const FONT_FAMILY = 'sans-serif';
const DEFAULT_WEIGHT = '800';
const LIGHT_WEIGHT = '400';
const FONT_SIZE = 14;
export const colors = {
  white: '#F8F8F8',
  gray: '#9B9898',
  dark: '#020202',
  main: '#334FFA',
  green: '#00B833',
  red: '#FF0000',
};

export const fontStyles = StyleSheet.create({
  defaultFont: {
    fontFamily: FONT_FAMILY,
    fontWeight: DEFAULT_WEIGHT,
    fontSize: FONT_SIZE,
    fontStyle: 'normal',
    color: colors.dark,
  },
  lightFont: {
    fontFamily: FONT_FAMILY,
    fontWeight: LIGHT_WEIGHT,
    fontSize: FONT_SIZE,
    fontStyle: 'normal',
    color: colors.dark,
  },
});

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  boxShadow: {
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    shadowColor: colors.dark,
    elevation: 10,
  },
  grayTitle: {
    ...fontStyles.defaultFont,
    color: colors.gray,
    textTransform: 'uppercase',
    lineHeight: 19,
    marginBottom: 20,
  },
  mainText: {
    ...fontStyles.defaultFont,
  },
  subText: {
    ...fontStyles.lightFont,
  },
});
