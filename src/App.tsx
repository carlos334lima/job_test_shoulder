import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import JailMonkey from 'jail-monkey';
import LottieView from 'lottie-react-native';
import ReactNativeAnimated from 'react-native-animated-component';

import {Header} from './components/header';
import {NfItem} from './components/nfItem';

import {styles} from './styles';
import {IDataNFs, INotas} from './@types';
import {getNfs, getNfsDetails} from './utils/requests';
import {ENV, MANAGER_NF} from './utils';
import {DetailsModal} from './components/detailsModal';

const App = () => {
  useLayoutEffect(() => {
    //security layer
    checkSecurity();
  }, []);

  useEffect(() => {
    callApiNfs();
  }, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [dataNfs, setDataNfs] = useState<IDataNFs>({} as IDataNFs);
  const [visibleModalDetails, setVisibleModalDetails] =
    useState<boolean>(false);

  const lottieFile = require('./utils/lottie/invoice.json');

  async function callApiNfs() {
    getNfs()
      .then(resp => {
        if (resp.status === 200) {
          if (resp?.data) {
            setDataNfs(resp?.data);
            setTimeout(() => {
              setLoading(false);
            }, 400);
          }
        } else {
          Alert.alert('Houve um erro interno! tente novamente mais tarde.');
        }
      })
      .catch(() => {
        Alert.alert('Houve um erro interno! tente novamente mais tarde.');
      });
  }

  async function callApiNfsDetails(item: INotas) {
    getNfsDetails(item)
      .then(resp => {
        if (resp.status === 200) {
          if (resp?.data) {
            setDataNfs(resp?.data);
            setTimeout(() => {
              setLoading(false);
            }, 400);
          }
        } else {
          Alert.alert('Houve um erro interno! tente novamente mais tarde.');
        }
      })
      .catch(() => {
        Alert.alert('Houve um erro interno! tente novamente mais tarde.');
      });
  }

  async function checkSecurity() {
    if (MANAGER_NF.ENV === ENV.PROD) {
      if (await JailMonkey.isDebuggedMode()) {
        return BackHandler.exitApp();
      }
      if (JailMonkey.isJailBroken()) {
        return BackHandler.exitApp();
      }
    }
  }

  function handleOpenDetails(item) {
    setVisibleModalDetails(true);
    /*  callApiNfsDetails(item); */
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      <ScrollView>
        <ReactNativeAnimated
          appearFrom="left"
          animationDuration={750}
          style={styles.container_animated}>
          <Header />
          <Text style={styles.title}>Entrada de Notas Fiscais</Text>
          {loading ? (
            <View style={styles.wrapper_animation}>
              <LottieView
                source={lottieFile}
                autoPlay={true}
                loop={true}
                onAnimationFinish={() => {}}
              />
            </View>
          ) : (
            <>
              <Text style={styles.subTile}>
                {' '}
                Nome da loja:{' '}
                <Text style={styles.highlights}>{dataNfs?.nomeLoja}</Text>
              </Text>
              <Text style={styles.subTile}>
                {' '}
                Total de NFS: {dataNfs?.notas?.length}
              </Text>

              {dataNfs?.notas?.map(item => (
                <NfItem
                  data={item}
                  key={item?.notaFiscal}
                  handleOpenDetails={() => handleOpenDetails(item)}
                />
              ))}
            </>
          )}
        </ReactNativeAnimated>
      </ScrollView>
      <DetailsModal
        visible={visibleModalDetails}
        handleCloseModal={() => setVisibleModalDetails(false)}
      />
    </SafeAreaView>
  );
};

export default App;
