export interface Comuni {
    content: Comuni[];
    id?: number,
    nome: string,
    provincia: {
        id?: number,
        nome: string,
        sigla: string
    }
}
