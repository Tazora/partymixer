import React from 'react';

const SongList = ({ wishes }) => {
    return (
        <div>
        {wishes.map((wish, index) => {
            return (
                <li key={index}>{wish.artist}</li>
            );
            })}
        </div>
    );
}

export default SongList;