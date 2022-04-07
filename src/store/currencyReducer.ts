import {
    GET_CURRENCY_LIST,
    SET_FIRST_CURRENCY,
    SET_SECOND_CURRENCY,
    CHANGE_AMOUNT,
    SET_AMOUNT_FIRST_CURRENCY,
    SET_ERROR,
    CHANGE_IS_LOADED
} from "./types/currencyTypes";

import {ActionsTypes} from "../actions/currencyAction";

interface IRootStateObject {
    name: number
}

export interface IRootState {
    firstCurrency: string
    secondCurrency: string
    amount: number
    amountFirstCurrency: boolean
    error: string
    isLoaded: boolean
    base?: string | null
    date?: string | null
    disclaimer?: string | null
    timestamp?: number | null
    rates?: null | IRootStateObject
}

const initialState: IRootState = {
    firstCurrency: '',
    secondCurrency: '',
    amount: 1,
    amountFirstCurrency: true,
    error: '',
    isLoaded: false,
    base: '',
    date: '',
    disclaimer: '',
    timestamp: null,
    rates: null
}

const currencyReducer = (state = initialState, {type, payload}: ActionsTypes) => {
    switch (type) {
        case GET_CURRENCY_LIST:
            return {...state, ...payload};

        case SET_FIRST_CURRENCY:
            return {...state, firstCurrency: payload};

        case SET_SECOND_CURRENCY:
            return {...state, secondCurrency: payload};

        case CHANGE_AMOUNT:
            return {...state, amount: payload};

        case SET_AMOUNT_FIRST_CURRENCY:
            return {...state, amountFirstCurrency: !state.amountFirstCurrency};

        case SET_ERROR:
            return {...state, error: payload};

        case CHANGE_IS_LOADED:
            return {...state, isLoaded: !state.isLoaded};

        default:
            return state;
    }
};

export default currencyReducer;