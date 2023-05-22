import axios from 'axios';

import {MANAGER_NF} from '.';
import {INotas} from 'src/@types';

const url_get_nfs =
  'https://shoulder.hubin.io/iomanager/api/flows/execute/route/APPEntradaNFE/buscarNotasPendentes/';

export const getNfs = () =>
  axios
    .get(url_get_nfs, {
      headers: {
        'x-hubin-access-token': MANAGER_NF.accessToken,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response)
    .catch(error => error);

export const getNfsDetails = (payload: INotas) =>
  axios
    .get(
      `https://shoulder.hubin.io/iomanager/api/flows/execute/route/APPEntradaNFE/buscarDestalheNotaPendente/${payload?.numLoja}/${payload?.notaFiscal}/${payload?.serie}/${payload?.data}`,
      {
        headers: {
          'x-hubin-access-token': MANAGER_NF.accessToken,
          'Content-Type': 'application/json',
        },
        validateStatus: false as any,
      },
    )
    .then(response => response)
    .catch(error => error);
