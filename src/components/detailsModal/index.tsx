import React, {useCallback, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LottieView from 'lottie-react-native';
import ReactNativeAnimated from 'react-native-animated-component';

import {styles} from './styles';
import {data} from '../../utils/data-mocked';
import {NfItemDetails} from '../nfItemDetails';
import close_image from '../../assets/close.png';

interface IDetailsModal {
  visible: boolean;
  handleCloseModal: () => void;
}

export const DetailsModal = ({visible, handleCloseModal}: IDetailsModal) => {
  const [loading, setLoading] = useState<boolean>(true);
  const lottieFile = require('../../utils/lottie/invoice.json');

  const animationTimer = useCallback(() => {
    if (visible) {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  }, [visible]);

  animationTimer();

  return (
    <Modal visible={visible}>
      <ScrollView>
        <View style={styles.container}>
          <ReactNativeAnimated appearFrom="left" animationDuration={750}>
            {loading ? (
              <>
                <View style={styles.wrapper_title}>
                  <Text style={styles.title}>Entrada de Notas Fiscais</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Image source={close_image} style={styles.image} />
                  </TouchableOpacity>
                </View>
                <View style={styles.wrapper_animation}>
                  <LottieView
                    source={lottieFile}
                    autoPlay={true}
                    loop={true}
                    onAnimationFinish={() => {}}
                  />
                </View>
              </>
            ) : (
              <>
                <View style={styles.wrapper}>
                  <View style={styles.wrapper_title}>
                    <Text style={styles.title}>Entrada de Notas Fiscais</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Image source={close_image} style={styles.image} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.title}>Detalhes da Nota Fiscal:</Text>

                  <Text style={styles.subTile}>
                    {' '}
                    Nome da loja:{' '}
                    <Text style={styles.highlights}>{data.nomeLoja}</Text>
                  </Text>
                  <Text style={styles.subTile}>
                    {' '}
                    Número da loja:{' '}
                    <Text style={styles.highlights}>{data.numLoja}</Text>
                  </Text>
                  <Text style={styles.subTile}>
                    {' '}
                    Origem:{' '}
                    <Text style={styles.highlights}>{data.numLojaOrigem}</Text>
                  </Text>
                  <Text style={styles.subTile}>
                    {' '}
                    Destino:{' '}
                    <Text style={styles.highlights}>{data.nomelojaOrigem}</Text>
                  </Text>
                  <Text style={styles.subTile}>
                    {' '}
                    Emissão: <Text style={styles.highlights}>{data.data}</Text>
                  </Text>

                  <Text style={styles.subTile}>
                    {' '}
                    Volume: <Text style={styles.highlights}>{data.volume}</Text>
                  </Text>
                  <Text style={styles.subTile}>
                    {' '}
                    Série: <Text style={styles.highlights}>{data.serie}</Text>
                  </Text>
                </View>
                <Text style={styles.subTile}>
                  {' '}
                  Total de código de barras:{' '}
                  <Text style={styles.highlights}>{data.itens.length}</Text>
                </Text>
                {data.itens.map(item => (
                  <NfItemDetails key={item.codigoBarras} data={item} />
                ))}
              </>
            )}
          </ReactNativeAnimated>
        </View>
      </ScrollView>
    </Modal>
  );
};
