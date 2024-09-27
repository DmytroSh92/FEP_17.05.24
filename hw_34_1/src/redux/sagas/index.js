import { all } from 'redux-saga/effects';
import watchHotels from './hotelSaga';

export default function* rootSaga() {
    yield all([
        watchHotels(),
    ]);
}