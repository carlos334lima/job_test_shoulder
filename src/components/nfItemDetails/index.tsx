import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

import Barcode from '@kichiyaki/react-native-barcode-generator';

import {styles} from './styles';
import {COLORS} from '../../global/styles';
import barcode_image from '../../assets/barcode.png';

interface INfItem {
  data: {
    codigoBarras: number | string;
    pecasNF: number | string;
  };
}

export const NfItemDetails = ({data}: INfItem) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper_image}>
          <Image source={barcode_image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.subTile}>
            Código de barras:{' '}
            <Text style={[styles.highlights, {color: COLORS.BLUE1}]}>
              {data?.codigoBarras}
            </Text>
          </Text>
          <Text style={styles.subTile}>
            Peças da NF:{' '}
            <Text style={[styles.highlights, {color: COLORS.BLUE1}]}>
              {data?.pecasNF}
            </Text>
          </Text>
        </View>
      </View>
      <Barcode
        format="CODE128"
        value={(data?.codigoBarras as string) || 'ShoulderCodigoBarras'}
        text={data?.codigoBarras || 'ShoulderCodigoBarras'}
        style={{marginBottom: 20}}
        textStyle={{color: '#000'}}
        maxWidth={Dimensions.get('window').width / 1.5}
      />
    </>
  );
};
