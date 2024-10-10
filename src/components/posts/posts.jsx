// import { useEffect, useState } from "react";
// import "./posts.css";
// import { deletePost, getAllPosts } from "../../services/postService.jsx";
// // import { getAllImages } from "../../services/imageService.jsx";
// import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
// import { Link } from "react-router-dom";

// export const Posts = ({ currentUser }) => {
//   const [posts, setPosts] = useState([]);
//   const [myPosts, setMyPosts] = useState([]);

//   useEffect(() => {
//     getAllPosts().then((postsArray) => {
//       setPosts(postsArray);
//     });
//   }, []);

//   useEffect(() => {
//     document.body.style.backgroundImage = `url(https://i.pinimg.com/736x/72/1f/ee/721fee80ca8f8748e686400686bbd23c.jpg)`
//   } , [])

//   useEffect(() => {
//     const foundPosts = posts.filter(
//       (post) => post.userId === currentUser.id
//     );
//     setMyPosts(foundPosts);
//   }, [posts]);

//   const handleDelete = (post) => {
//     deletePost(post.id).then(() => {
//       getAllPosts().then((postsArray) => {
//         setPosts(postsArray);
//       });
//     });
//   };

//   return (
//     <div>
//       <div className="posts">
//         <div>
//           <Row className="flex-row, container">
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
//                     {/* <a href={album.url}>Source</a> */}
//                     <Link to={`/posts/${post.id}/editPost`}>
//                       <Button color="primary" size="sm" style={{ margin: 5 }}>
//                         Edit
//                       </Button>
//                     </Link>
//                     <Button
//                       color="danger"
//                       size="sm"
//                       style={{ margin: 5 }}
//                       onClick={() => handleDelete(post)}>
//                       Delete
//                     </Button>
//                   </Card>
//                 </Col>
//               );
//             })}
//           </Row>
//         </div>
//       </div>
//       <div>
//         <Link to="/posts/newPost">
//           <button className="button">Make New Post</button>
//         </Link>
//       </div>
//     </div>
//   );
// };









