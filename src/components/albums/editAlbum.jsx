import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { getAlbumById, updateAlbum } from "../../services/albumService";

export const EditAlbum = () => {
  const [Album, setAlbum] = useState({});
  const { albumId } = useParams();

  useEffect(() => {
    getAlbumById(albumId).then((data) => {
      const albumObj = data;
      setAlbum(albumObj);
    });
  }, [albumId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedAlbum = {
      Name: album.albumName,
      Artist: album.artist,
      Year: album.year,
      Genre: album.genre,
      userId: album.userId,
      imageURL: album.imageURL,
    };
    updateAlbum(editedAlbum).then(() => {
      navigate("/albums");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2>Edit Album</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={album.albumName}
              onChange={(event) => {
                const albumCopy = { ...album };
                albumCopy.albumName = event.target.value;
                setAlbum(albumCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={album.artist}
              onChange={(event) => {
                const albumCopy = { ...album };
                albumCopy.artist = event.target.value;
                setAlbum(albumCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={album.year}
              onChange={(event) => {
                const albumCopy = { ...album };
                albumCopy.year = event.target.value;
                setAlbum(albumCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={album.genre}
              onChange={(event) => {
                const albumCopy = { ...album };
                albumCopy.genre = event.target.value;
                setAlbum(albumCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <Button onClick={handleSave}>
            Save Album
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
