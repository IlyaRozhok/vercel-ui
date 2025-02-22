export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
export interface IOnboardingUserData {
    name: string;
    gender: Gender | null;
}
export interface IOnboardingState {
    userData: IOnboardingUserData;
    budgetName: string;
    budgetAmount: number | null;
    currency: ICurrency;
    init: {
        currencies: ICurrency[];
    }
}

export interface ICurrencies {
    id: number
    country: string;
    currency: string;
    description: string;
}

export interface ICurrency {
    currency: string;
    description: string;
    flag: string;
    symbol: string;
}