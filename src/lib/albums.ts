import { api } from "./api";
import { Album, AlbumsResponse } from "../types/Album";

const getAlbumByNameArtist = async (name: string): Promise<Album[]> => {
    const respuesta = await api.get<AlbumsResponse>(`search?term=${name}&entity=album&limit=20`);
    return respuesta.data.results ?? [] ;
}


const getAlbumById = async (id: string): Promise<Album | null> => {
    const respuesta = await api.get<AlbumsResponse>(`lookup?id=${id}`);
    return respuesta.data.results ? respuesta.data.results[0] : null;
}

export {getAlbumByNameArtist, getAlbumById};