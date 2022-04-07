import {
    GET_CURRENCY_LIST,
    SET_FIRST_CURRENCY,
    SET_SECOND_CURRENCY,
    CHANGE_AMOUNT,
    SET_AMOUNT_FIRST_CURRENCY,
    SET_ERROR,
    CHANGE_IS_LOADED
} from "../store/types/currencyTypes";

export type ActionsTypes = GetStateActionType | SetFirstCurrencyActionType |
    SetSecondCurrencyActionType | ChangeAmountActionType |
    SetAmountFirstCurrencyActionType | SetErrorActionType |
    ChangeIsLoadedActionType

type GetStateActionType = {
    type: typeof GET_CURRENCY_LIST
    payload: any
};
export const getState= (currency: any): GetStateActionType => ({
    type: GET_CURRENCY_LIST,
    payload: currency,
});

export type SetFirstCurrencyActionType = {
    type: typeof SET_FIRST_CURRENCY
    payload: string
};
export const setFirstCurrency = (firstCurrency: string): SetFirstCurrencyActionType => ({
    type: SET_FIRST_CURRENCY,
    payload: firstCurrency,
});

export type SetSecondCurrencyActionType = {
    type: typeof SET_SECOND_CURRENCY
    payload: string
};
export const setSecondCurrency = (secondCurrency: string): SetSecondCurrencyActionType => ({
    type: SET_SECOND_CURRENCY,
    payload: secondCurrency,
});

type ChangeAmountActionType = {
    type: typeof CHANGE_AMOUNT
    payload: number
};
export const changeAmount = (amount: number): ChangeAmountActionType => ({
    type: CHANGE_AMOUNT,
    payload: amount,
});

type SetAmountFirstCurrencyActionType = {
    type: typeof SET_AMOUNT_FIRST_CURRENCY
    payload: boolean
};
export const setAmountFirstCurrency = (amountFirstCurrency: boolean): SetAmountFirstCurrencyActionType => ({
    type: SET_AMOUNT_FIRST_CURRENCY,
    payload: amountFirstCurrency,
});

type SetErrorActionType = {
    type: typeof SET_ERROR
    payload: string
};
export const setError = (error: string): SetErrorActionType => ({
    type: SET_ERROR,
    payload: error,
});

type ChangeIsLoadedActionType = {
    type: typeof CHANGE_IS_LOADED,
    payload: boolean,
};
export const changeIsLoaded = (isLoaded: boolean): ChangeIsLoadedActionType => ({
    type: CHANGE_IS_LOADED,
    payload: isLoaded,
});