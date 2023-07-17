import React, { useState } from 'react';

export default function IndexPage() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate short URL from input URL
    const generatedShortUrl = `short-url.nl?id=${Math.random().toString(36).substring(2, 15)}`;
    setShortUrl(generatedShortUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} required />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && <p>Your short URL is: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
}