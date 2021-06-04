import React from 'react';

const AddReaction = ({ icon, addReaction }) => {
    return (
        <button onClick={addReaction}>
            <span role="img">{icon}</span>
        </button>
    );
};

export default AddReaction;
