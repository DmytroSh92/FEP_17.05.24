import React from "react";
import './style.css';
import CharacterList from './components/CharacterList';

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hairColor: 'blond',
        skinColor: 'fair',
        eyeColor: 'blue',
        birthYear: '19BBY',
        gender: 'male',
        films: ["https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/6/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/7/"
        ],
        species: [
            "https://swapi.dev/api/species/1/"
        ],
        vehicles: [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        starships: [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/"
    }
];
const App = () => {
    return (
        <div className="container">
            <h2 className="custom-header">Star Wars Character</h2>
            <CharacterList  characters={characters} />
        </div>
    );
};

export default App;
