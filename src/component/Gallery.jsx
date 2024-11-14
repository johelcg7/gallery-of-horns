import HornedBeast from "./HornedBeast";
import data from "../data.json/";

function Gallery() {
    return (
        <>
            {
                data.map(beast=> (
                    <HornedBeast
                    key={beast._id}
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    />
                ))
            }
        </>



    )
}

export default Gallery;