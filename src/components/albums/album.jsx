import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { deleteAlbum, getAllAlbums } from "../../services/albumService";
import "./album.css";

export const Albums = ({ currentUser }) => {
    const [albums, setAlbums] = useState([]);
    const [myAlbums, setMyAlbums] = useState([]);
  
    useEffect(() => {
      getAllAlbums().then((albumsArray) => {
        setAlbums(albumsArray);
      });
    }, []);
  
    useEffect(() => {
      const foundAlbums = albums.filter(
        (album) => album.userId === currentUser.id
      );
      setMyAlbums(foundAlbums);
    }, [albums]);

    useEffect(() => {
      document.body.style.backgroundImage = `url(https://i.pinimg.com/564x/27/0a/f0/270af01a1674dd031c9c22298dd1c71d.jpg)`
    } , [])
  
    const handleDelete = (albumId) => {
      deleteAlbum(albumId).then(() => {
        getAllAlbums().then((albumsArray) => {
          setAlbums(albumsArray);
        });
      });
    };
  
    return (
      <div className="album-test">
        <div className="albums">
          <div>
          <h2 className="title_albums">PERSONAL ALBUM COLLECTION</h2>
            <Row className="flex-row">
              {myAlbums.map((album) => {
                return (
                  <Col key={album.id}>
                    <Card
                      style={{
                        width: "12rem",
                        padding: "1em",
                        margin: 5,
                      }}
                    >
                      <h2>{album.albumName}</h2>
                      <p>{album.artist}</p>
                      <p>{album.genre}</p>
                      <p>{album.year}</p>
                      <img className="album-images" src={album.imageURL} alt={album.artist}/>
                      {/* <a href={album.url}>Source</a> */}
                      <Link to={`/albums/${album.id}/editAlbum`}>
                        <Button color="primary" size="sm" style={{ margin: 5 }}>
                          Edit
                        </Button>
                      </Link>
                      <Button
                        color="danger"
                        size="sm"
                        style={{ margin: 5 }}
                        onClick={() => handleDelete(album.id)}>
                        Delete
                      </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div>
          <Link to="/albums/newAlbum">
            <button className="button">Log New Album</button>
          </Link>
        </div>
      </div>
    );
  };
  




















// export const Album = ({ album }) => {

//     const navigate = useNavigate()
    
//     return (
//         <section className="album">
//             <div className="btn-container">
//                 <button
//                     onClick={() => {
//                         navigate(`/albums/${album.id}`)
//                     }}
//                 >
//                     {album.albumName}
//                 </button>
//             </div>
//         </section>
//     )
// }