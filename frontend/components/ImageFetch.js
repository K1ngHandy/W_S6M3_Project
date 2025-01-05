import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageFetch(props) {
    const todaysDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // YYYY-MM-DD
    }
    const { url } = props;
    const [photo, setPhoto] = useState('');
    const [date, setDate] = useState(todaysDate());
    console.log('Date:', date);
    const [altText, setAltText] = useState('alt');
    const [loading, setLoading] = useState(false);

    const fetchURL = async () => {
        setLoading(true);
        const fullURL = `${url}&date=${date}`;

        axios.get(fullURL)
            .then(response => {
                const data = response.data;
                console.log(data);

                setDate(data.date);
                setPhoto(data.url);
                setAltText(data.title);
                console.log('Alt:', data.title);
                setLoading(false);
            }) 
            .catch(error => {
                console.error('Error:', error.message);
                setLoading(false);
            });
    };

    // stretch: add date picker
    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
    }

    const changeDate = (days) => {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + days);
        setDate(currentDate.toISOString().split('T')[0]);
    }

    useEffect(() => {
        if (date) {
            fetchURL();
        }
    }, [url, date]);

    // render if url returns YouTube link instead of image
    const renderContent = () => {
        if (loading) {
            return <p className="nasa-blue">Loading...</p>
        }

        if (photo.includes('youtube')) {
            return (
                <iframe 
                    title={altText}
                    width="560"
                    height="315"
                    src={photo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )
        } else {
            return <img src={photo} alt={altText} />
        }
    };

    return (
        <div className="image-container">
            <div className="date-picker">
                <button onClick={() => changeDate(-1)}>⬅️ -1</button>
                <input type="date" value={date} onChange={handleDateChange} />
                <button onClick={() => changeDate(1)}>+1 ➡️</button>
            </div>

            <h3 className="nasa-blue">{altText}</h3>
            {renderContent()}
        </div>
    )
}

export default ImageFetch;