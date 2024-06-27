import { useState } from "react";
import "./album.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { createAlbum } from "../../services/albumService";

export const NewAlbum = ({currentUser}) => {
  const [newAlbum, setNewAlbum] = useState({
    albumName: "",
    artist: "",
    genre: "",
    year: "",
    imageURL: ""
  });

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()

    const album = {
        albumName: newAlbum.albumName,
        artist: newAlbum.artist,
        genre: newAlbum.genre,
        year: newAlbum.year,
        imageURL: newAlbum.imageURL,
        userId: currentUser.id
    }
    createAlbum(album).then(() => {
        navigate("/albums")
    })

  }

  return (
    <div className="form">
      <form className="album-form">
        <h2>New Album</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Album Name"
            onChange={(event) => {
              const albumCopy = { ...newAlbum };
              albumCopy.albumName = event.target.value;
              setNewAlbum(albumCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Artist"
            onChange={(event) => {
              const albumCopy = { ...newAlbum };
              albumCopy.artist = event.target.value;
              setNewAlbum(albumCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Genre"
            onChange={(event) => {
              const albumCopy = { ...newAlbum };
              albumCopy.genre = event.target.value;
              setNewAlbum(albumCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Year"
            onChange={(event) => {
              const albumCopy = { ...newAlbum };
              albumCopy.year = event.target.value;
              setNewAlbum(albumCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="URL"
            onChange={(event) => {
              const albumCopy = { ...newAlbum };
              albumCopy.imageURL = event.target.value;
              setNewAlbum(albumCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <Button onClick={handleSave}>
            Submit New Album
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
