import React, { useState, useEffect } from "react";

function ImageFetch(props) {
    const { url } = props;
    const [photo, setPhoto] = useState('');
    const [date, setDate] = useState('');
    const [altText, setAltText] = useState('alt');

    const fetchURL = async () => {
        try {
            const response = await fetch(`${url}?date=${selectedDate}`);
            const data = await response.json();
            console.log(data);

            setDate(data.date);
            setPhoto(data.url);
            setAltText(data.alt);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    // stretch: add date picker
    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        fetchURL(selectedDate);
    }

    useEffect(() => {
        if (date) {
            fetchURL(date);
        }
    }, [url, date]);

    return (
        <div>
            <input type="date" value={date} onChange={handleDateChange} />
            <p>Date: {date}</p>
            <img src={photo} alt={altText} />
        </div>
    )
}

export default ImageFetch;