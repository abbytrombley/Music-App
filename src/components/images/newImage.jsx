import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { createImage } from "../../services/imageService";

// ADD NEW IMAGE TO GALLERY
export const NewImage = ({ currentUser }) => {
    const [newImage, setNewImage] = useState({
        url: "",
        caption: "",
    });

    const navigate = useNavigate();

    {/* Save/Submit Image Button Function */}
    const handleSave = (event) => {
        event.preventDefault()
    
        const image = {
            url: newImage.url,
            caption: newImage.caption,
            userId: currentUser.id
        }
        createImage(image).then(() => {
            navigate("/images")
        })
    
      }

    // JSX to display Add New Image Form
    return (
        <div className="form">
            <Form className="article-form">
            <h2>New Image</h2>
                <FormGroup>
                    <Input
                        id="exampleUrl"
                        name="url"
                        placeholder="Enter image url here"
                        type="url"
                        onChange={(event) => {
                            const imageCopy = { ...newImage };
                            imageCopy.url = event.target.value;
                            setNewImage(imageCopy);
                          }}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder="Enter image caption here"
                        type="textarea"
                        onChange={(event) => {
                            const imageCopy = { ...newImage };
                            imageCopy.caption = event.target.value;
                            setNewImage(imageCopy);
                          }}
                    />
                </FormGroup>
            </Form>

            {/* Save/Submit Image Button */}
            <Button color="primary" onClick={handleSave}>
                Submit New Image
            </Button>
        </div>
    )
}

