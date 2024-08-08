import React from 'react';

const CharacterCard = ({ character }) => {
    const sortedFilms = character.films.sort();
    const sortedSpecies = character.species.sort();
    const sortedVehicles = character.vehicles.sort();
    const sortedStarships = character.starships.sort();

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Height: {character.height} cm</p>
                <p className="card-text">Mass: {character.mass} kg</p>
                <p className="card-text">Hair Color: {character.hairColor}</p>
                <p className="card-text">Skin Color: {character.skinColor}</p>
                <p className="card-text">Eye Color: {character.eyeColor}</p>
                <p className="card-text">Birth Year: {character.birthYear}</p>
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Films: </p>
                <ul>
                    {sortedFilms.map((film, index) => (
                        <li key={index}>{film}</li>
                    ))}
                </ul>
                <p className="card-text">Species: </p>
                <ul>
                    {sortedSpecies.map((specie, index) => (
                        <li key={index}>{specie}</li>
                    ))}
                </ul>
                <p className="card-text">Vehicles: </p>
                <ul>
                    {sortedVehicles.map((vehicle, index) => (
                        <li key={index}>{vehicle}</li>
                    ))}
                </ul>
                <p className="card-text">Starships: </p>
                <ul>
                    {sortedStarships.map((starship, index) => (
                        <li key={index}>{starship}</li>
                    ))}
                </ul>
                <p className="card-text">Created: {character.created}</p>
                <p className="card-text">Edited: {character.edited}</p>
                <p className="card-text">Url: {character.url}</p>
            </div>
        </div>
    );
};

export default CharacterCard;