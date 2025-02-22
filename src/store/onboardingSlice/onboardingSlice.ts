import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Gender, ICurrencies, IOnboardingUserData, IOnboardingState, ICurrency} from "./types";
import apiClient from "../../utils/axios";
import {AxiosError} from "axios";

const initialState: IOnboardingState = {
    userData: {} as IOnboardingUserData,
    budgetName: '',
    budgetAmount: null,
    currency: {} as ICurrency,
    init: {
        currencies:  [
            { flag: "🇦🇫", currency: "AFN", description: "Afghani", symbol: "؋" },
            { flag: "🇦🇱", currency: "ALL", description: "Lek", symbol: "L" },
            { flag: "🇩🇿", currency: "DZD", description: "Algerian Dinar", symbol: "دج" },
            { flag: "🇦🇴", currency: "AOA", description: "Kwanza", symbol: "Kz" },
            { flag: "🇦🇷", currency: "ARS", description: "Argentine Peso", symbol: "$" },
            { flag: "🇦🇺", currency: "AUD", description: "Australian Dollar", symbol: "$" },
            { flag: "🇦🇿", currency: "AZN", description: "Azerbaijani Manat", symbol: "₼" },
            { flag: "🇧🇸", currency: "BSD", description: "Bahamian Dollar", symbol: "$" },
            { flag: "🇧🇭", currency: "BHD", description: "Bahraini Dinar", symbol: ".د.ب" },
            { flag: "🇧🇩", currency: "BDT", description: "Taka", symbol: "৳" },
            { flag: "🇧🇧", currency: "BBD", description: "Barbadian Dollar", symbol: "$" },
            { flag: "🇧🇾", currency: "BYN", description: "Belarusian Ruble", symbol: "Br" },
            { flag: "🇧🇿", currency: "BZD", description: "Belize Dollar", symbol: "$" },
            { flag: "🇧🇯", currency: "XOF", description: "CFA Franc BCEAO", symbol: "CFA" },
            { flag: "🇧🇴", currency: "BOB", description: "Boliviano", symbol: "Bs." },
            { flag: "🇧🇦", currency: "BAM", description: "Convertible Mark", symbol: "KM" },
            { flag: "🇧🇼", currency: "BWP", description: "Pula", symbol: "P" },
            { flag: "🇧🇷", currency: "BRL", description: "Brazilian Real", symbol: "R$" },
            { flag: "🇧🇳", currency: "BND", description: "Brunei Dollar", symbol: "$" },
            { flag: "🇧🇬", currency: "BGN", description: "Bulgarian Lev", symbol: "лв" },
            { flag: "🇧🇮", currency: "BIF", description: "Burundi Franc", symbol: "FBu" },
            { flag: "🇰🇭", currency: "KHR", description: "Riel", symbol: "៛" },
            { flag: "🇨🇲", currency: "XAF", description: "CFA Franc BEAC", symbol: "FCFA" },
            { flag: "🇨🇦", currency: "CAD", description: "Canadian Dollar", symbol: "$" },
            { flag: "🇨🇱", currency: "CLP", description: "Chilean Peso", symbol: "$" },
            { flag: "🇨🇳", currency: "CNY", description: "Yuan Renminbi", symbol: "¥" },
            { flag: "🇨🇴", currency: "COP", description: "Colombian Peso", symbol: "$" },
            { flag: "🇰🇲", currency: "KMF", description: "Comorian Franc", symbol: "CF" },
            { flag: "🇨🇩", currency: "CDF", description: "Congolese Franc", symbol: "FC" },
            { flag: "🇨🇷", currency: "CRC", description: "Costa Rican Colon", symbol: "₡" },
            { flag: "🇭🇷", currency: "HRK", description: "Croatian Kuna", symbol: "kn" },
            { flag: "🇨🇺", currency: "CUP", description: "Cuban Peso", symbol: "$" },
            { flag: "🇨🇿", currency: "CZK", description: "Czech Koruna", symbol: "Kč" },
            { flag: "🇩🇰", currency: "DKK", description: "Danish Krone", symbol: "kr" },
            { flag: "🇩🇯", currency: "DJF", description: "Djiboutian Franc", symbol: "Fdj" },
            { flag: "🇩🇴", currency: "DOP", description: "Dominican Peso", symbol: "RD$" },
            { flag: "🇪🇨", currency: "USD", description: "United States Dollar", symbol: "$" },
            { flag: "🇪🇬", currency: "EGP", description: "Egyptian Pound", symbol: "£" },
            { flag: "🇸🇻", currency: "USD", description: "United States Dollar", symbol: "$" },
            { flag: "🇬🇶", currency: "XAF", description: "CFA Franc BEAC", symbol: "FCFA" },
            { flag: "🇪🇷", currency: "ERN", description: "Nakfa", symbol: "Nkf" },
            { flag: "🇪🇺", currency: "EUR", description: "Euro", symbol: "€" },
            { flag: "🇸🇿", currency: "SZL", description: "Lilangeni", symbol: "E" },
            { flag: "🇪🇹", currency: "ETB", description: "Ethiopian Birr", symbol: "Br" },
            { flag: "🇫🇯", currency: "FJD", description: "Fijian Dollar", symbol: "$" },
            { flag: "🇬🇲", currency: "GMD", description: "Dalasi", symbol: "D" },
            { flag: "🇬🇪", currency: "GEL", description: "Georgian Lari", symbol: "₾" },
            { flag: "🇬🇭", currency: "GHS", description: "Cedi", symbol: "₵" },
            { flag: "🇬🇹", currency: "GTQ", description: "Quetzal", symbol: "Q" },
            { flag: "🇬🇳", currency: "GNF", description: "Guinean Franc", symbol: "FG" },
            { flag: "🇬🇾", currency: "GYD", description: "Guyana Dollar", symbol: "$" },
            { flag: "🇭🇹", currency: "HTG", description: "Haitian Gourde", symbol: "G" },
            { flag: "🇭🇳", currency: "HNL", description: "Lempira", symbol: "L" },
            { flag: "🇭🇺", currency: "HUF", description: "Forint", symbol: "Ft" },
            { flag: "🇮🇸", currency: "ISK", description: "Iceland Krona", symbol: "kr" },
            { flag: "🇮🇳", currency: "INR", description: "Indian Rupee", symbol: "₹" },
            { flag: "🇮🇩", currency: "IDR", description: "Rupiah", symbol: "Rp" },
            { flag: "🇮🇷", currency: "IRR", description: "Iranian Rial", symbol: "﷼" },
            { flag: "🇮🇶", currency: "IQD", description: "Iraqi Dinar", symbol: "ع.د" },
            { flag: "🇮🇱", currency: "ILS", description: "Israeli New Shekel", symbol: "₪" },
            { flag: "🇯🇲", currency: "JMD", description: "Jamaican Dollar", symbol: "J$" },
            { flag: "🇯🇵", currency: "JPY", description: "Japanese Yen", symbol: "¥" },
            { flag: "🇯🇴", currency: "JOD", description: "Jordanian Dinar", symbol: "د.ا" },
            { flag: "🇰🇿", currency: "KZT", description: "Kazakhstani Tenge", symbol: "₸" },
            { flag: "🇰🇪", currency: "KES", description: "Kenyan Shilling", symbol: "KSh" },
            { flag: "🇿🇦", currency: "ZAR", description: "South African Rand", symbol: "R" },
            { flag: "🇹🇷", currency: "TRY", description: "Turkish Lira", symbol: "₺" },
            { flag: "🇷🇺", currency: "RUB", description: "Russian Ruble", symbol: "₽" },
            { flag: "🇲🇽", currency: "MXN", description: "Mexican Peso", symbol: "$" },
            { flag: "🇵🇭", currency: "PHP", description: "Philippine Peso", symbol: "₱" },
            { flag: "🇸🇦", currency: "SAR", description: "Saudi Riyal", symbol: "﷼" },
            { flag: "🇨🇭", currency: "CHF", description: "Swiss Franc", symbol: "CHF" },
            { flag: "🇻🇳", currency: "VND", description: "Vietnamese Dong", symbol: "₫" },
            { flag: "🇺🇦", currency: "UAH", description: "Ukrainian Hryvnia", symbol: "₴" },
            { flag: "🇺🇿", currency: "UZS", description: "Uzbekistani Soʻm", symbol: "so'm" },
            { flag: "🇻🇪", currency: "VES", description: "Venezuelan Bolívar", symbol: "Bs." },
            { flag: "🇿🇲", currency: "ZMW", description: "Zambian Kwacha", symbol: "K" },
            { flag: "🇿🇼", currency: "ZWL", description: "Zimbabwean Dollar", symbol: "$" }
        ]
    }
};


export const getCurrencies = createAsyncThunk<ICurrencies[], void,{ rejectValue: string }>(
    "onboarding/getCurrencies",
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await apiClient.get(`currencies`);
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data)
            }
        }
    }
)

export const downloadFile = createAsyncThunk<any, string,{ rejectValue: string }>(
    "downloadFile",
    async (fileName,{rejectWithValue}) => {
        try {
            const {data} = await apiClient.get(`download?fileKey=${fileName}`);
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data)
            }
        }
    }
)

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        setOnboardingName: (state, action: PayloadAction<string>) => {
            state.userData.name = action.payload;
        },
        setOnboardingGender: (state, action: PayloadAction<Gender>) => {
            state.userData.gender = action.payload;
        },
        setOnboardingBudgetName: (state, action: PayloadAction<string>) => {
            state.budgetName = action.payload;
        },
        setOnboardingBudgetAmount: (state, action: PayloadAction<number>) => {
            state.budgetAmount = action.payload;
        },
        setOnboardingCurrencies: (state, action: PayloadAction<ICurrency>) => {
            state.currency = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrencies.pending, (state, action) => {
                console.log('onboarding slice pending', action.payload);

            })
            // .addCase(getCurrencies.fulfilled, (state, action: PayloadAction<string[]>) => {
            //     console.log(':)', action.payload);
            //     state.currencies = action.payload;
            // })
    },
});

export const {
    setOnboardingName,
    setOnboardingGender,
    setOnboardingBudgetName,
    setOnboardingCurrencies,
    setOnboardingBudgetAmount
} = onboardingSlice.actions;
export default onboardingSlice.reducer;