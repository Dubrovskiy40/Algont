import './App.css';
import React, {useEffect} from "react";
import CurrencyConverter from "./currencyConverter/CurrencyConverter";
import {useDispatch, useSelector} from "react-redux";
import {changeIsLoaded, getState, setError} from "../actions/currencyAction";
import {RootState} from "../store";

const API = 'https://www.cbr-xml-daily.ru/latest.js';

const App: React.FC = () => {
    const state = useSelector((state: RootState) => state);
    console.log('state',state)
    const dispatch = useDispatch();

    const error = state.currency.error;
    const isLoaded = state.currency.isLoaded;

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then((data) => {
                    console.log('data',data)
                    dispatch(getState(data))
                    dispatch(changeIsLoaded(true));
                },
                (error) => {
                    dispatch(changeIsLoaded(true));
                    dispatch(setError(error));
                }
            )
    }, []);

    return (
        <div>
            {
                error
                    ? <div>Ошибка: {error.message}</div>
                    : !isLoaded
                        ? <div>Загрузка...</div>
                        : <CurrencyConverter
                            state={state}
                        />
            }
        </div>
    );
};

export default App;
