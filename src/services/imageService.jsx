// GET ALL IMAGES FETCH CALL => see module ImageGallery.jsx
export const getAllImages = () => {
    return fetch("http://localhost:8088/images").then(allImages => allImages.json())
}

// GET IMAGES BY ID FETCH CALL => see module UpdateImage.jsx
export const getByImageId = (imageId) => {
    return fetch(`http://localhost:8088/images/${imageId}`).then(allImages => allImages.json())
}

// ADD NEW IMAGE TO GALLERY FETCH CALL => see module NewImage.jsx
export const createImage = (image) => {
    return fetch(`http://localhost:8088/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(image)
    })
}

// UPDATE/EDIT SINGLE USER IMAGE FETCH CALL => see module UpdateImage.jsx
export const updateImage = (image) => {
    return fetch(`http://localhost:8088/images/${image.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(image)
    })
}

// DELETE IMAGE FROM GALLERY FETCH CALL => see module ImageGallery.jsx
export const deleteImage = (imageId) => {
    return fetch(`http://localhost:8088/images/${imageId}`, {
        method: "DELETE"
    })
}