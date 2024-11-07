import HornedBeast from "./HornedBeast";
import data from "../data.json/";

function Gallery() {
    return (
        <>
            <HornedBeast
                title={"Minotauro"}
                imageUrl={"https://cdn.pixabay.com/photo/2024/02/15/11/04/ai-generated-8575223_1280.jpg"}
                description={"Este es un animal mitológico"}
            />
            <HornedBeast
                title={"Unicornio"}
                imageUrl={"https://www.defondos.com/bulkupload/unicornios-wallpapers/Fantasia/Unicornios/Negro%20Unicornio_800.jpg"}
                description={"Este es un animal mitológico"}
            />
            <HornedBeast
                title={"Rinoceronte"}
                imageUrl={"https://estaticos-cdn.prensaiberica.es/clip/f8b6643c-43a6-4235-a138-3cfa415f6588_16-9-aspect-ratio_default_0.jpg"}
                description={"El rinoceronte negro o de labio ganchudo es una especie de mamífero perisodáctilo de la familia de los rinocerótidos"}
            />
            <HornedBeast
                title={"Freezer Fase 2"}
                imageUrl={"https://kurogami.com/med/img/productos/53/1a/sh-figuarts-freezer-segunda-forma-dragon-ball-z-1.jpg"}
                description={"Este es un ser de Dragon Ball Z"}
            />
            <HornedBeast
                title={"Cernunnos, el dios con cuernos de ciervo"}
                imageUrl={"https://mitologiaclasica.com/wp-content/uploads/2024/04/Cernunnos-e1713437673471.webp"}
                description={"Este es un animal mitológico"}
            />
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