import React from 'react'
import ImageFetch from './ImageFetch';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY.replace(/['";]+/g, '');
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  console.log(url);

  return (
    <div>
      <h2>
      Image of the Day:<span role="img" aria-label='go!'> 🚀</span>
      </h2>
      <ImageFetch url={url} />
    </div>
  )
}

export default App
