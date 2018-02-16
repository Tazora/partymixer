import React from 'react';

import Song from './Song.jsx';

const SongList = ({ wishes }) => {
    return (
        <div>
        {wishes.map((wish, index) => {
            return (
                <Song wish={wish} index={index} />
            );
            })}
        </div>
    );
}

export default SongList;