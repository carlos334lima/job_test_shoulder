import {StyleSheet} from 'react-native';
import {COLORS} from './global/styles';

export const styles = StyleSheet.create({
  container_animated: {
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.BLACK1,
    padding: 20,
  },
  highlights: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.BLUE1,
  },
  subTile: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.BLACK1,
    padding: 20,
    paddingTop: 0,
  },
  wrapper_animation: {
    height: 500,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
