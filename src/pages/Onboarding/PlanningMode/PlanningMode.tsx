import React from 'react';
import styles from "../styles.module.scss";
import OnboardingButton from "../../../components/OnboardingButton/OnboardingButton";
import {useNavigate} from "react-router-dom";
import planningModeTemp from "../../../assets/img/planning-mode.png"

const PlanningMode = () => {
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
                <h5 className={styles.onboardingMainTitle}>Planning mode</h5>

                <div className={styles.planningModeWrapper}>
                    <img src={planningModeTemp} alt="pl_mode"/>
                </div>
                <div className={styles.nextBtnWrapper}>
                    <OnboardingButton
                        value={"Next"}
                        handler={() => navigate('/onboarding/budget-currency')}
                    />
                </div>

            </main>
        </section>
    );
};

export default PlanningMode;