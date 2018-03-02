import React from 'react';

import Song from './Song.jsx';

const SongList = ( props ) => (
        <div>
        {props.wishes.map((wish, index) => {
            return (
                <Song wish={wish} key={index} />
            );
            })}
        </div>
)

export default SongList;