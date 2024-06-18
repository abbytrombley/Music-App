import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { getAllAlbums } from "../../services/albumService";

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
  
    const handleDelete = (album) => {
      deleteAlbum(album.id).then(() => {
        getAllAlbums().then((albumsArray) => {
          setAlbums(albumsArray);
        });
      });
    };
  
    return (
      <div>
        <div>
          <Link to="/newAlbum">
            <button className="button">Log New Album</button>
          </Link>
        </div>
        <div className="albums">
          <div>
            <Row className="flex-row-reverse">
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
                      <h2>{album.title}</h2>
                      <p>{album.synopsis}</p>
                      <a href={album.url}>Source</a>
                      <Link to={`/albums/${album.id}/editAlbum`}>
                        <Button color="primary" size="sm" style={{ margin: 5 }}>
                          Edit
                        </Button>
                      </Link>
                      <Button
                        color="danger"
                        size="sm"
                        style={{ margin: 5 }}
                        onClick={() => handleDelete(article)}
                      >
                        Delete
                      </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
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