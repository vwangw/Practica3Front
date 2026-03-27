'use client';

import { Album } from "@/types";
import { useRouter } from "next/navigation";

type AlbumCardProps = {
    album: Album;

};

const AlbumCard = ({ album }: AlbumCardProps) => {

    const router = useRouter()

    return (
        
        <div className="AlbumCard">
            <h2 className="NombreAlbum">{album.collectionName}</h2>
            <h3 className="NombreArtista">{album.artistName}</h3>
            <div className="AlbumInfo">
                <img src={album.artworkUrl60} alt={album.collectionName} className="AlbumImagen" />

            <button onClick={() => router.push("/albums")} className="BotonVolver">Volver</button>

            </div>
        </div>
    );
};

export default AlbumCard;