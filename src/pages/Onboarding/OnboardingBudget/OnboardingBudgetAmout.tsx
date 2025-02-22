import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.scss';
import OnboardingButton from "../../../components/OnboardingButton/OnboardingButton";
import {setOnboardingBudgetAmount} from "../../../store/onboardingSlice/onboardingSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";

const OnboardingBudgetAmount = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {budgetAmount, currency} = useAppSelector((state) => state.onboarding);

    const handleBudgetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        dispatch(setOnboardingBudgetAmount(Number(e.target.value)));
        if(e.target.value.length === 0) {
            dispatch(setOnboardingBudgetAmount(null));
        }
    }
    return (
        <section className={styles.oneStep}>
            <aside className={styles.onboardingProgressWrapper}>
                <div className={styles.onboardingProgressTitle}>Настройки вашего кабинета</div>
                <div className={styles.onboardingProgressDescr}>
                    Позаботьтесь о здоровье своих близких.<br/> Подарите им то, что нельзя купить — здоровье
                </div>
                <div className={styles.progressOnboardingContainer}>
                    <div className={styles.progressOnboardingResolved}>Personal info</div>
                    <div className={styles.progressOnboardingResolved}>Key features</div>
                    <div className={styles.progressOnboardingActive}>Create budget</div>
                    <div className={styles.progressOnboarding}>Personalisation</div>
                </div>
            </aside>
            <main className={styles.mainSection}>
                <h5 className={styles.onboardingMainTitle}>
                    {`Enter your budget amount ${currency.symbol}`}
                </h5>

                <div className={styles.gatherUserInfo}>
                    <div className={styles.budgetAmount}>
                        <input
                            className={styles.budgetAmountInput}
                            type="number"
                            value={budgetAmount}
                            onChange={(e) => handleBudgetAmount(e)}
                        />
                    </div>
                </div>
                <div className={styles.nextBtnWrapper}>
                    <OnboardingButton
                        isDisabled={Boolean(!budgetAmount)}
                        value={"Next"}
                        handler={() => navigate('/onboarding/select-budget-type')}
                    />
                </div>
            </main>
        </section>
    );
};

export default OnboardingBudgetAmount;