import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
};

function HobbyList({hobbyList = []}) {
    return (
        <div>
            <ul>
                {hobbyList.map((hobby) => (
                    <li key={hobby.id}>{hobby.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default HobbyList;
