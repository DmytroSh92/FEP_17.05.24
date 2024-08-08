import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
    return (
        <div className="container">
            <div className="row">
                {characters.map((character, index) => (
                    <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                        <CharacterCard character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;
