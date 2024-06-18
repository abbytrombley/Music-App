export const getAllAlbums = () => {
    return fetch(`http://localhost:8088/albums`).then((res) => res.json())
}

export const createAlbum = (album) => {
    return fetch(`http://localhost:8088/albums`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(album)
    })
}

export const deleteAlbum = (albumId) => {
    return fetch(`http://localhost:8088/albums/${albumId}`, { method: "DELETE" });
  };

  export const getAlbumById = (album) => {
    return fetch(
        `http://localhost:8088/albums/${album}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateAlbum = (album) => {
    return fetch(`http://localhost:8088/albums/${album.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(album)
    })
  }