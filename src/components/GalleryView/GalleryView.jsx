import { useParams } from "react-router-dom";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    const gallery = galleries.find(obj => obj.galleryid.toString() === galleryId)

    return(
        <ul>
            <li>Name: {gallery.name}</li>
            <li>Theme: {gallery.theme}</li>
            <li>URL: {gallery.url}</li>
        </ul>
    )
}

export default GalleryView;