export interface INotas {
  data: string;
  destaqueAtraso: string;
  diasAtraso: string;
  notaFiscal: string;
  numLoja: string;
  serie: string;
}

export interface IDataNFs {
  nomeLoja: string;
  notas: INotas[];
}

export interface INfItem {
  index: number;
  item: INotas;
}
