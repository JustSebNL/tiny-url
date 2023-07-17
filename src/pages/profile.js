import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUrl } from '../store/actions';

export default function ProfilePage() {
    const shortUrls = useSelector((state) => state.urls);
    const dispatch = useDispatch();

    const handleRemoveUrl = (url) => {
        dispatch(removeUrl(url));
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
        </div>
    );
}