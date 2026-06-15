export interface ISerie {
    nome: string;
    lancamento: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string;
    favorito: boolean;
    temporadas?: number;
    episodios?: number;
}