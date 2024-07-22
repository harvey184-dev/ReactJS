// src/components/ListPicture.js
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const ListPicture = () => {
    const [photos, setPhotos] = useState([]);
    const [term, setTerm] = useState('nature');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: {
                        query: term,
                        per_page: 10,
                        client_id: 'YVcNj7FEqOWSYOJdTlZteQuZ-hoE1RlRl2GJiVhf3sU'
                    }
                });
                setPhotos(response.data.results);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [term]);

    const onSearchSubmit = (searchTerm) => {
        setTerm(searchTerm);
    };

    useEffect(() => {
        console.log('Photos: ', photos);
    }, [photos]);

    return (
        <>
            <div>
                <SearchBar onSubmit={onSearchSubmit} />
                <h1>List Photo</h1>
                {photos.map((photo) => (
                    <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
                ))}
            </div>
        </>
    );
}

export default ListPicture;
