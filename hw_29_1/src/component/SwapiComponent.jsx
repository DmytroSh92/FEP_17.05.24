import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSwapiData } from '../actions/Action';

const SwapiComponent = () => {
    const dispatch = useDispatch();
    const swapiData = useSelector((state) => state.swapiData);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchSwapiData());
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <h1>TODO Swapi</h1>
            {swapiData && (
                <div>
                    <h2>{swapiData.name}</h2>
                    <p>Height: {swapiData.height}</p>
                    <p>Mass: {swapiData.mass}</p>
                    <p>Hair Color: {swapiData.hair_color}</p>
                </div>
            )}
        </div>
    );
};

export default SwapiComponent;