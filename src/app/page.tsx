'use client'

import { useRouter } from "next/navigation";

const Home=()=>{
  const router=useRouter();

  const handleAlbums=()=>{

      router.push(`/albums`)
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="titulo">Álbumes</h1>
        
        <div className="Buscador">
          <button className="button" onClick={handleAlbums}>
            Buscar Álbumes
          </button>

          <button
            className="button"
            onClick={() => {
                router.push('/favoritos');
            }}>
            Mis Favoritos
        </button>
        </div>
      </div>
    </div>
  );
}

export default Home;