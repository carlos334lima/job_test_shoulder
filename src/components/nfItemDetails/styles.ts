import {StyleSheet} from 'react-native';
import {COLORS} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK1,
    height: 100,
    justifyContent: 'center',
    width: '95%',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
  },
  wrapper_image: {
    width: '12%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '85%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
  },
  subTile: {
    fontSize: 14,
    paddingLeft: 20,
    color: COLORS.WHITE,
  },
  highlights: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: COLORS.WHITE,
  },
  image: {height: 50, width: 50},
});
