import React, { useState, useEffect } from "react";

function ImageFetch(props) {
    const { url } = props;
    const [photo, setPhoto] = useState('');
    const [date, setDate] = useState('');

    const fetchURL = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setDate(data.date);
            setPhoto(data.url);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    useEffect(() => {
        fetchURL();
    }, [url]);

    return (
        <div>
            <p>Date: {date}</p>
            <img src={photo} alt="alt" />
        </div>
    )
}

export default ImageFetch;