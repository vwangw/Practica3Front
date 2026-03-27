'use client';

import { useList } from "@/context/MusicContext";
import { useRouter } from "next/navigation";

const FavoritosPage = () => {
  const { list, deleteList } = useList();
  const router = useRouter();

  return (
    <div className="favoritos-page">
      <h2 className="favoritos-title">Mi Álbums Favoritos</h2>
      
      {list.length === 0 ? (
        <p className="empty-message">No tienes ningún álbum en favoritos todavía.</p>
      ) : (
        <div className="favoritos-list">
          {list.map((album) => (
            <div key={album.collectionId} className="favoritos-item">
              <img src={album.artworkUrl100} alt={album.collectionName} />
              <h4>{album.collectionName}</h4>
              <p>{album.artistName}</p>

              <div className="favoritos-actions">
                <button onClick={() => router.push(`/albums/${album.collectionId}`)}>
                  Ver detalles
                </button>
                <button onClick={() => deleteList(album.collectionId)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <button
        className="btn-back"
        onClick={() => router.push('/')}>
        Volver al inicio
      </button>
    </div>
  );
}

export default FavoritosPage