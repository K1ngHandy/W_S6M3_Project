import React from 'react'
import ImageFetch from './ImageFetch';

function App() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  return (
    <div>
      <h2>
      NASA Image of the Day:<span role="img" aria-label='go!'> 🚀</span>
      </h2>
      <ImageFetch url={url} />
    </div>
  )
}

export default App
