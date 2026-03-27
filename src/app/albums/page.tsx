'use client';

import { useState } from "react";
import { useList } from "@/context/MusicContext";
import { Album } from "@/types"
import { getAlbumByNameArtist } from "@/lib/albums";
import { useRouter } from "next/navigation";

const AlbumsPage = () => {
    const [name, setName] = useState('');
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const { addList } = useList();
    const router = useRouter();

    const handleSearch = async () => {
        const trueName = name.trim()
        if (!trueName) {
            setError("No hay nombre del artista")
            return
        }
        setLoading(true);
        setError(null);
        try {
            const results = await getAlbumByNameArtist(trueName);
            setAlbums(results);
        } catch (e) {
            setError("Error en la búsqueda de álbumes")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page">
            <h2>Buscar Álbumes</h2>
            <div className="search-box">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del artista..."
                />

                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Buscando...' : 'Buscar'}
                </button>

                <button
                    className="btn-back"
                    onClick={() => router.push('/')}>
                    Volver al inicio
                </button>
            </div>

            {error && <p className="error">{error}</p>}

            <div className="grid">
                {albums.map((album) => (
                    <div key={album.collectionId} className="item-card">
                        <img src={album.artworkUrl100} alt={album.collectionName} />
                        <div className="card-body">
                            <h4>{album.collectionName}</h4>
                            <p>{album.artistName}</p>

                            <div className="card-actions">
                                <button onClick={() => router.push(`/albums/${album.collectionId}`)}>
                                    Ver detalles
                                </button>
                                <button className="btn-favorite" onClick={() => addList(album)}>
                                    Favoritos
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlbumsPage