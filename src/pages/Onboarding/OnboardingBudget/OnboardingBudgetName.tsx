import React from 'react';
import styles from "../styles.module.scss";
import OnboardingButton from "../../../components/OnboardingButton/OnboardingButton";
import {useNavigate} from "react-router-dom";
import OnboardingInput from "../../../components/OnboardingInput/OnboardingInput";
import {setOnboardingBudgetName} from "../../../store/onboardingSlice/onboardingSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";

const OnboardingBudgetName = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {budgetName} = useAppSelector((state) => state.onboarding);
    const handleBudgetName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        dispatch(setOnboardingBudgetName(e.target.value));
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
                <h5 className={styles.onboardingMainTitle}>Give your budget name</h5>
                <div className={styles.budgetNameInputWrapper}>
                    <OnboardingInput
                        placeholder="Enter your budget name"
                        value={budgetName}
                        handler={handleBudgetName}
                    />
                </div>

                <div className={styles.nextBtnWrapper}>
                    <OnboardingButton
                        isDisabled={Boolean(!budgetName?.length)}
                        value={"Next"}
                        handler={() => navigate('/onboarding/budget-currency')}
                    />
                </div>

            </main>
        </section>
    );
};

export default OnboardingBudgetName;