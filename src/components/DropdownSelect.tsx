import React, { useState } from "react";
import "./dropdown.css";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import { setOnboardingCurrencies } from "../store/onboardingSlice/onboardingSlice";
import {ICurrency} from "../store/onboardingSlice/types";



interface ISelectProps {
    setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
    selectedCurrency: string;
}


const SingleSelectDropdown: React.FC<ISelectProps> = ({ setSelectedCurrency, selectedCurrency }) => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();

    const {currencies} = useAppSelector(state => state.onboarding.init);
    const {currency} = useAppSelector(state => state.onboarding);
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase());
        console.log(e.target);
    };

    const selectCurrency = (currencyCode: ICurrency) => {
        setSelectedCurrency(currencyCode.currency);
        dispatch(setOnboardingCurrencies(currencyCode));
        console.log(currency)
    };

    const filteredCurrencies = currencies.filter(
        (currency) =>
            currency.currency.toLowerCase().includes(search) ||
            currency.description.toLowerCase().includes(search)
    );

    return (
        <div className="single-select-dropdown">
            <input
                type="text"
                placeholder="Search currency"
                value={search}
                onChange={handleSearchChange}
                className="search-bar"
            />
            <ul className="currency-list">
                {filteredCurrencies.map((currency) => (
                    <li
                        key={currency.currency}
                        className={`currency-item ${
                            selectedCurrency === currency.currency ? "selected" : ""
                        }`}
                        onClick={() => selectCurrency(currency)}
                    >
                        <div className="currency-flag">{currency.flag}</div>
                        <div className="currency-wrapper">
                            <span className="currency-code">{currency.currency}</span>
                            <span className="currency-name">{currency.description}</span>
                        </div>
                        {selectedCurrency === currency.currency && (
                            <span className="checkmark">✔</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SingleSelectDropdown;