import {StyleSheet} from 'react-native';
import {COLORS} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {height: '100%', width: '100%'},
  wrapper: {height: 500, width: '100%'},
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.BLACK1,
    padding: 20,
  },
  wrapper_animation: {
    height: 500,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
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
    padding: 15,
    paddingTop: 0,
  },
  image: {height: 20, width: 20},
});
