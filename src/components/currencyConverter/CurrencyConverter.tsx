import style from './currencyConverter.module.css';
import React from 'react';
import {Button} from "@material-ui/core";
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import {useDispatch} from "react-redux";
import {
    changeAmount,
    setAmountFirstCurrency,
    setFirstCurrency,
    setSecondCurrency
} from "../../actions/currencyAction";
import Currency from "../currency/Currency";
import {RootState} from "../../store";

type PropsType = {
    state: RootState
}

const CurrencyConverter:React.FC<PropsType> = ({ state }) => {
    const currency = state.currency;
    const dispatch = useDispatch();

    const requestDate:string = currency.date;
    const firstCurrency:string = state.currency.firstCurrency;
    const secondCurrency: string = state.currency.secondCurrency;
    const amount: number = state.currency.amount;
    const amountFirstCurrency: boolean = state.currency.amountFirstCurrency;
    const rub: string = currency.base; //RUB

    const shortNames: Array<string> = [rub, ...Object.keys(currency.rates)];

    let firstAmount: number = 1, firstСourseToOne: number = 1, secondCourseToOne: number = 1;

    if (amountFirstCurrency) {
        firstAmount = amount;
    }

    if (firstCurrency && secondCurrency && firstCurrency !== 'RUB' && secondCurrency !== 'RUB') {
        firstСourseToOne = +(currency.rates[secondCurrency] / currency.rates[firstCurrency]).toFixed(4);
        secondCourseToOne = +(currency.rates[firstCurrency] / currency.rates[secondCurrency]).toFixed(4);
    }
    else if (firstCurrency && secondCurrency && firstCurrency === 'RUB' && secondCurrency !== 'RUB') {
        firstСourseToOne = +(currency.rates[secondCurrency] / 1).toFixed(4);
        secondCourseToOne = +(1 / currency.rates[secondCurrency]).toFixed(4);
    }
    else if (firstCurrency && secondCurrency && firstCurrency !== 'RUB' && [...Object.keys(currency.rates)].includes(firstCurrency)) {
        firstСourseToOne = +(1 / currency.rates[firstCurrency]).toFixed(4);
        secondCourseToOne = +(currency.rates[firstCurrency]).toFixed(4);
    }

    let resultTwoCurrency: number = +(firstСourseToOne * firstAmount).toFixed(4);

    const handleReverse = () => {
        dispatch(setFirstCurrency(secondCurrency));
        dispatch(setSecondCurrency(firstCurrency));
    };

    const handleFirstAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(changeAmount(+e.target.value))
        setAmountFirstCurrency(true)
    };

    return (
        <div className={style.currencyConverter}>
            <h3 className={style.currencyConverter__title}>Курс валют по состоянию на: {requestDate}</h3>
            <div className={style.currency__block}>
                <Currency
                    title="У меня есть"
                    shortNames={shortNames}
                    selectedCurrency={firstCurrency}
                    anotherCurrency={secondCurrency}
                    onChangeCurrency={(e: React.ChangeEvent<any>) => dispatch(setFirstCurrency(e.target.value))}
                    onChangeAmount={handleFirstAmountChange}
                    amount={firstAmount}
                    courseToOne={firstСourseToOne}
                />
                <Button
                    className={style.currencyConverter__btn}
                    onClick={handleReverse}
                    variant="contained"
                    color="primary">
                    <CompareArrowsIcon/>
                </Button>
                <Currency
                    title="Я получу"
                    shortNames={shortNames}
                    selectedCurrency={secondCurrency}
                    anotherCurrency={firstCurrency}
                    onChangeCurrency={(e: React.ChangeEvent<any>) => dispatch(setSecondCurrency(e.target.value))}
                    amount={resultTwoCurrency}
                    courseToOne={secondCourseToOne}
                />
            </div>
        </div>
    );
};

export default CurrencyConverter;