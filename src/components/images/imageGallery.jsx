import "./images.css";
import { useEffect } from "react";
import { useState } from "react";
import { deleteImage, getAllImages } from "../../services/imageService";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

// USER IMAGE GALLERY PAGE
export const ImageGallery = ({ currentUser }) => {
    const [images, setImages] = useState([]);
    const [myImages, setMyImages] = useState([]);

    useEffect(() => {
        getAllImages().then((imageArray) => {
            setImages(imageArray)
        })
    }, []);

    useEffect(() => {
        document.body.style.backgroundImage = `url(https://i.pinimg.com/736x/2b/03/06/2b0306957f5640699fc82add113da34a.jpg)`
      } , [])

    {/* Filter Images by User */}
    useEffect(() => {
        const foundImages = images.filter((image) => image.userId === currentUser.id)
        setMyImages(foundImages)
     },[images])

    {/* Delete Image Button Function */}
    const handleDelete = (image) => {
        deleteImage(image.id).then(() => {
        getAllImages().then((imageArray) => {
            setImages(imageArray)
        })})
    }

    // JSX to display allImages Gallery using Reactstrap
    return (
        <>
        <div className="images">
            <div>
                <Row>
                
                {myImages.map((image) => {
                        return (
                <Col key={image.id}>
                <Card style={{ 
                    width: '12rem',
                    padding: '1em',
                    margin: 5,
                    }}
                >
                    
                    <img className="gallery-images" src={image.url} alt={image.caption} />
                    
                <CardBody>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {image.caption}
                    </CardSubtitle>

                    {/* Edit Image Button */}
                    <Link to={`/images/editImages/${image.id}`}>
                        <Button color="primary" size="sm" style={{margin: 5}}>
                            Edit
                        </Button>
                    </Link>

                    {/* Delete Image Button */}
                    <Button color="danger" size="sm"
                        onClick={() => handleDelete(image)}
                    >
                        Delete
                    </Button>
                </CardBody>
                </Card>
                </Col>
                )
                })}
                
                </Row>
            </div>
            <div>
                <Link to={`/images/newImage`}><button className="button">Add New Image</button></Link>
        </div>
        </div>
        </>
    )
}         
