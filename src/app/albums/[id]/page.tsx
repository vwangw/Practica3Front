'use client'

import AlbumCard from "@/component/AlbumCard";
import { getAlbumById } from "@/lib/albums";
import { Album } from "@/types";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";


const AlbumPageDetail = () => {

	const { id } = useParams()

	const [loading, setLoading] = useState(false);

	const [album, setAlbum] = useState<Album | null>(null)

	useEffect(() => {
		if (!id) return;

		setLoading(true);

		getAlbumById(id as string)
			.then((data) => setAlbum(data))
			.catch(() => setAlbum(null))
			.finally(() => setLoading(false));
	}, [id]);

	return (

		<div className="page-detail">
			<div className="detail-card">
				<h1 className="detail-title">Detalle del Album</h1>


				{loading && <p className="loading">Buscando...</p>}

				{album && <AlbumCard album={album} />}
			</div>
		</div>
	)
}	

export default AlbumPageDetail