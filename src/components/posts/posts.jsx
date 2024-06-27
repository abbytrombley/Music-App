import { useEffect, useState } from "react";
import "./posts.css";
import { deletePost, getAllPosts } from "../../services/postService.jsx";
// import { getAllImages } from "../../services/imageService.jsx";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export const Posts = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setPosts(postsArray);
    });
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = `url(https://i.pinimg.com/736x/72/1f/ee/721fee80ca8f8748e686400686bbd23c.jpg)`
  } , [])

  useEffect(() => {
    const foundPosts = posts.filter(
      (post) => post.userId === currentUser.id
    );
    setMyPosts(foundPosts);
  }, [posts]);

  const handleDelete = (post) => {
    deletePost(post.id).then(() => {
      getAllPosts().then((postsArray) => {
        setPosts(postsArray);
      });
    });
  };

  return (
    <div>
      <div className="posts">
        <div>
          <Row className="flex-row, container">
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
                    {/* <a href={album.url}>Source</a> */}
                    <Link to={`/posts/${post.id}/editPost`}>
                      <Button color="primary" size="sm" style={{ margin: 5 }}>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      color="danger"
                      size="sm"
                      style={{ margin: 5 }}
                      onClick={() => handleDelete(post)}>
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
        <Link to="/posts/newPost">
          <button className="button">Make New Post</button>
        </Link>
      </div>
    </div>
  );
};












// export const Posts = ({ currentUser }) => {
//   const [posts, setPosts] = useState([]);

//   const [myPosts, setMyPosts] = useState([]);

//   const [myImages, setMyImages] = useState([]);

//   useEffect(() => {
//     getAllPosts().then((postsArray) => {
//       setPosts(postsArray);
//     });
//   }, []);

//   useEffect(() => {
//     const foundPosts = posts.filter(
//       (post) => post.userId === currentUser.id
//     );
//     setMyPosts(foundPosts);
//   }, [posts]);

//   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     getAllImages().then((imagesArray) => {
// //       setImages(imagesArray);
// //     });
// //   }, []);

//   useEffect(() => {
//     const foundImages = images.filter(
//       (image) => image.userId === currentUser.id
//     );
//     setMyImages(foundImages);
//   }, [images]);

//   return (
//     <div className="body">
      
//         <div className="posts">
//           <Row>
//             {myPosts.map((post) => {
//               return (
//                 <Col key={post.id}>
//                   <Card
//                     style={{
//                       width: "12rem",
//                       padding: "1em",
//                       margin: 5,
//                     }}
//                   >
//                     <h2>{post.message}</h2>
//                     <p>{post.timestamp}</p>
//                     <a href={post.url}>View User Profile</a>
//                   </Card>
//                 </Col>
//               );
//             })}
//           </Row>
//         </div>
      

//       {/* work on the image section */}

//       <div className="images">
//         <div>
//           <Row>
//             {myImages.map((image) => {
//               return (
//                 <Col key={image.id}>
//                   <Card
//                     style={{
//                       width: "12rem",
//                       padding: "1em",
//                       margin: 5,
//                     }}
//                   >
//                     <img src={image.url} alt="" />

//                     <CardBody>
//                       <CardSubtitle className="mb-2 text-muted" tag="h6">
//                         {image.caption}
//                       </CardSubtitle>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               );
//             })}
//           </Row>
//         </div>
//       </div>
//     </div>
//   );
// };