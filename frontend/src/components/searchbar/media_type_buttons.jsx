import React from 'react';

const MediaTypeButtons = ({ mediaType, handleClick, toggleDropdown, showDropdown }) => {
    const opposite = mediaType === 'Show' ? 'Movie' : 'Show';
    const dropdownClass = showDropdown ? 'btn-dropdown flex show' : 'btn-dropdown flex hide';

    return (
        <div className={dropdownClass} onMouseOver={toggleDropdown} onMouseOut={toggleDropdown}>
            <button className={`${mediaType.toLowerCase()}-btn`}>{mediaType}</button>
            <button className={`${opposite.toLowerCase()}-btn bottom-btn`} onClick={handleClick(mediaType)}>{opposite}</button>
        </div>
    )
};

export default MediaTypeButtons;