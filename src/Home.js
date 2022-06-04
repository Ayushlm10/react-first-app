import { useState } from "react";

const Home = () => {

    const [images, setImages] = useState([
        { id: 1, src: './assets/images/taco-taco.jpg' },
        { id: 2, src: './assets/images/pizza-plain.jpg' },
        { id: 3, src: './assets/images/pizza-meat.jpg' },
        { id: 4, src: './assets/images/pizza-veggie.jpg' },
        { id: 5, src: './assets/images/taco-burrito.jpg' },
        { id: 6, src: './assets/images/dimsum-soup.jpg' },
        {id:7, src:'./assets/images/dimsum-shrimp.jpg'}
    ])

    const deleteImage = (id) => {
        const filteredImages = images.filter((img) => img.id !== id)
        setImages(filteredImages)
    }
    return (
        <div className="img-grid">
            {images.map((image) => (
                <div className="img-container">
                <div className="img-wrap" key={image.id}>
                    <img src={require(`${image.src}`)} alt="taco" />
                    </div>
                    <button onClick={() => {
                        deleteImage(image.id)
                    }}>Delete image</button>
                    </div>
            ))}
            </div>
    )
}
 
export default Home;