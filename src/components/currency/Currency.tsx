import style from './currency.module.css';
import React from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select, TextField} from "@material-ui/core";
import {SetFirstCurrencyActionType, SetSecondCurrencyActionType} from "../../actions/currencyAction";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

const inputProps = {
    min: 0,
    step: 0.5
}

type CurrencyTypeOne = (e: React.ChangeEvent<any>) => SetFirstCurrencyActionType
type CurrencyTypeTwo = (e: React.ChangeEvent<any>) => SetSecondCurrencyActionType

type PropsType = {
    title: string
    shortNames: Array<string>
    selectedCurrency: string
    anotherCurrency: string
    onChangeCurrency: CurrencyTypeOne | CurrencyTypeTwo
    onChangeAmount?: (e: React.ChangeEvent<HTMLInputElement>) => void
    amount: number
    courseToOne: number
}

const Currency: React.FC<PropsType> = ({
    title,
    shortNames,
    selectedCurrency,
    anotherCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    courseToOne,
    }) => {

    const classes = useStyles();

    return (
        <div className={style.currency}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectedCurrency}
                    onChange={onChangeCurrency}
                    label={title}
                    title="подсказка при наведении"
                >
                    <MenuItem value="">
                        <em>Валюта</em>
                    </MenuItem>
                    {
                        shortNames?.map((el: string) => {
                            return <MenuItem key={el} value={el}>{el}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <div>
                <TextField
                    id="standard-basic"
                    type='number'
                    value={amount}
                    onChange={onChangeAmount}
                    label={title === "У меня есть" ? "Сколько поменять?" : "Сколько получу"}
                    inputProps={inputProps}
                />
                <div className={style.currency__span_wrap}>
                    <span className={style.currentRate}>
                        {selectedCurrency ? `1 ${selectedCurrency} = ${courseToOne || 'выбери вторую валюту'} ${anotherCurrency ? anotherCurrency : ''}` : null}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Currency;