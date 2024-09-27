import { call, put, takeLatest } from 'redux-saga/effects';
import { getHotels } from '../../services/api';

function* fetchHotelsSaga() {
    try {
        const hotels = yield call(getHotels);
        yield put({ type: 'SET_HOTELS', payload: hotels });
    } catch (error) {
        console.error('Error fetching hotels:', error);
    }
}

export default function* watchHotels() {
    yield takeLatest('FETCH_HOTELS', fetchHotelsSaga);
}