import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.scss';
import OnboardingButton from "../../../components/OnboardingButton/OnboardingButton";
import MultiSelectDropdown from "../../../components/DropdownSelect";

const OnboardingBudgetType = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<string>('');

    const navigate = useNavigate();
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
                <h5 className={styles.onboardingMainTitle}>Select budget currency</h5>

                <div className={styles.gatherUserInfo}>
                        <MultiSelectDropdown
                            selectedCurrency={selectedCurrency}
                            setSelectedCurrency={setSelectedCurrency}/>
                </div>
                <div className={styles.nextBtnWrapper}>
                    <OnboardingButton
                        isDisabled={Boolean(!selectedCurrency)}
                        value={"Next"}
                        handler={() => navigate('/onboarding/budget-amount')}
                    />
                </div>
            </main>
        </section>
    );
};

export default OnboardingBudgetType;