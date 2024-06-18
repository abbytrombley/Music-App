import { useEffect, useState } from "react"
import { getAllAlbums } from "../../services/albumService.jsx"
import { Album } from "./album.jsx"

export const AlbumList = () => {
    const [Albums, setAlbums] = useState([])

    useEffect(() => {
        getAllAlbums().then(AlbumsArray => {
            setAlbums(AlbumsArray)
        })
        }, [])

    return (
        <div className="Albums-container">
            <h2>Albums</h2>
            <article className="albums">
                {albums.map(albumObj => {
                    return <Album
                    album={albumObj}
                    key={albumObj.id}
                    />
                })}
            </article>
        </div>
    )
    

}

//put in details here?