import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1.0);
    }
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    padding: 0 3px;
    h2 {
        color: ${pr => pr.theme.nasaBlue};
        text-align: center;
    }
    p {
        color: ${pr => pr.theme.nasaRed};
        font-weight: bold;
    }
    button {
        background-color: ${pr => pr.theme.background};
        &:hover {
            transform: scale(1.2);
        }
    }
    iframe {
        border: 3px solid ${pr => pr.theme.nasaRed};
        border-radius: 4px;
        margin-top: 1rem;
    }
    input[type="date"] {
        padding: 0.5rem;
        margin: 1rem;
        border: solid 2px grey;
        border-radius: 4px;
    }
    img {
        max-width: 90%;
        height: auto;
        border: solid 2px ${pr => pr.theme.nasaRed};
        border-radius: 12px;
        margin-top: 1rem;
    }
    animation: ${kf} 0.3s ease-in-out forwards;
`

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
            return <p>Loading...</p>
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
        <ImageContainer>
            <div className="date-picker">
                <button onClick={() => changeDate(-1)}>⬅️ -1</button>
                <input type="date" value={date} onChange={handleDateChange} />
                <button onClick={() => changeDate(1)}>+1 ➡️</button>
            </div>

            <h2>{altText}</h2>
            {renderContent()}
        </ImageContainer>
    )
}

export default ImageFetch;