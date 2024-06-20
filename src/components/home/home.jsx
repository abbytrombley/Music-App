import { useEffect, useState } from "react";
import "./home.css";
import { getAllPosts } from "../../services/postService.jsx";
// import { getAllImages } from "../../services/imageService.jsx";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export const Home = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);

  const [myPosts, setMyPosts] = useState([]);

  const [myImages, setMyImages] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setPosts(postsArray);
    });
  }, []);

  useEffect(() => {
    const foundPosts = posts.filter(
      (post) => post.userId === currentUser.id
    );
    setMyPosts(foundPosts);
  }, [posts]);

  const [images, setImages] = useState([]);

//   useEffect(() => {
//     getAllImages().then((imagesArray) => {
//       setImages(imagesArray);
//     });
//   }, []);

  useEffect(() => {
    const foundImages = images.filter(
      (image) => image.userId === currentUser.id
    );
    setMyImages(foundImages);
  }, [images]);

  return (
    <div className="body">
      
        <div className="posts">
          <Row>
            {myPosts.map((post) => {
              return (
                <Col key={post.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <h2>{post.message}</h2>
                    <p>{post.timestamp}</p>
                    <a href={post.url}>View User Profile</a>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      

      {/* work on the image section */}

      <div className="images">
        <div>
          <Row>
            {myImages.map((image) => {
              return (
                <Col key={image.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <img src={image.url} alt="" />

                    <CardBody>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {image.caption}
                      </CardSubtitle>
                    </CardBody>
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