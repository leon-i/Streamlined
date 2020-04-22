import React from 'react';

const MediaTypeButtons = ({ mediaType, handleClick }) => (
    <button className={`${mediaType.toLowerCase()}-btn`} onClick={handleClick(mediaType)}>{mediaType}</button>
);

export default MediaTypeButtons;