import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { getByImageId, updateImage } from "../../services/imageService";

// UPDATE/EDIT SINGLE USER IMAGE
export const UpdateImage = ({ currentUser }) => {
  const [image, setImage] = useState({});
  const { imageId } = useParams();

  useEffect(() => {
    getByImageId(imageId).then((data) => {
      const imgObj = data;
      setImage(imgObj);
    });
  }, [imageId]);

  const navigate = useNavigate();

  {
    /* Changing the value of the Inputs Function */
  }
  // could only get it to work for the url...
  const handleInputChange = (event) => {
    const stateCopy = { ...image };
    stateCopy[event.target.name] = event.target.value;
    setImage(stateCopy);
  };

  {
    /* Save Image Button Function */
  }
  const handleSave = (event) => {
    event.preventDefault();

    const editedImage = {
      id: image.id,
      userId: currentUser.id,
      url: image.url,
      caption: image.caption,
    };
    updateImage(editedImage).then(() => {
      navigate("/images");
    });
  };

  // JSX to display Update/Edit Image Form
  return (
    <div className="form">
      <Form className="article-form">
        <h2 className="edit__images">Edit Image</h2>
        <FormGroup>
          <Input
            id="exampleUrl"
            name="url"
            placeholder={image.url}
            type="url"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="exampleText"
            name="text"
            placeholder={image.caption}
            type="textarea"
            onChange={(event) => {
              const imageCopy = { ...image };
              imageCopy.caption = event.target.value;
              setImage(imageCopy);
            }}
          />
        </FormGroup>
      </Form>

      {/* Save/Submit Image Button */}
      <Button color="primary" onClick={handleSave}>
        Save Image
      </Button>
    </div>
  );
};
