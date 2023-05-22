import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {INotas} from '../../@types';
import {COLORS} from '../../global/styles';
import nf_image from '../../assets/payment.png';

interface INfItem {
  data: INotas;
  handleOpenDetails: () => void;
}

export const NfItem = ({data, handleOpenDetails}: INfItem) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleOpenDetails}>
      <View style={styles.container}>
        <View style={styles.wrapper_image}>
          <Image source={nf_image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.subTile}>
            Dias de atraso:{' '}
            <Text style={[styles.highlights, {color: COLORS.RED}]}>
              {data?.diasAtraso} dias
            </Text>
          </Text>
          <Text style={styles.subTile}>
            Data: <Text style={styles.highlights}>{data?.data}</Text>
          </Text>
          <Text style={styles.subTile}>
            Nota Fiscal:{' '}
            <Text style={styles.highlights}>{data?.notaFiscal}</Text>
          </Text>
          <Text style={styles.subTile}>
            Número da Loja:{' '}
            <Text style={styles.highlights}>{data?.numLoja}</Text>
          </Text>
          <Text style={styles.subTile}>
            Número de série:{' '}
            <Text style={styles.highlights}>{data?.serie}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
