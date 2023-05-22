import {StyleSheet} from 'react-native';
import {COLORS} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    height: 170,
    backgroundColor: COLORS.BLUE1,
    width: '100%',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {fontWeight: 'bold', fontSize: 25, padding: 18, color: COLORS.WHITE},
  subTile: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 20,
    color: COLORS.WHITE,
  },
});
