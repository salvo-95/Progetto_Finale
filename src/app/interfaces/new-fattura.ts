export interface NewFattura {
    data: string,
    numero: number,
    anno: number,
    importo: string,
    stato:{
      id?: number,
      nome: string
  }
  ,cliente:{
    id?: number}
}
