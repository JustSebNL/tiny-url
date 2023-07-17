import React, { useState } from 'react';

export default function ProfilePage() {
  const [shortUrls, setShortUrls] = useState([]);

  const handleAddUrl = (url) => {
    setShortUrls([...shortUrls, url]);
  };

  const handleRemoveUrl = (url) => {
    setShortUrls(shortUrls.filter(item => item !== url));
  };

  return (
    <div>
      <h1>Your Short URLs</h1>
      <ul>
        {shortUrls.map((url, index) => (
          <li key={index}>
            <a href={url}>{url}</a>
            <button onClick={() => handleRemoveUrl(url)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddUrl(prompt('Enter a URL'))}>Add URL</button>
    </div>
  );
}