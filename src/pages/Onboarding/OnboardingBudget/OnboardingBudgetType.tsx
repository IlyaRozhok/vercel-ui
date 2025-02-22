import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.scss';
import BudgetCard from "../../../components/BudgetCard/BudgetCard";
import {useAuth0} from "@auth0/auth0-react";

const OnboardingBudgetType = () => {
    const navigate = useNavigate();
    const {loginWithRedirect} = useAuth0();
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
                <h5 className={styles.onboardingMainTitle}>Select budget type</h5>

                {/*<div className={styles.mainBudgetCard}>*/}
                {/*    <div className={styles.cardInfoWrapper}>*/}
                {/*        <h5>{"Подсчет бюджета"}</h5>*/}
                {/*        <h6>{"Планируйте, реализуйте и смотрите аналитику ваших финансов"}</h6>*/}
                {/*    </div>*/}
                {/*    <button*/}
                {/*        className={styles.mainBudgetCardBtn}*/}
                {/*        onClick={() => {navigate('/onboarding/budget-name')}}*/}
                {/*    >*/}
                {/*        Continue*/}
                {/*    </button>*/}
                {/*</div>*/}

                {/*<div className={styles.tryMore}>*/}
                {/*    <h6 className={styles.tryMoreText}>Try More in Pro</h6>*/}
                {/*    <div>*/}
                {/*        <img src={lockIcon} alt="lock-icon"/>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className={styles.budgetCards}>
                    <div className={styles.budgetCardContainer}>
                        <BudgetCard
                            title={"With sub-budgets"}
                            description={"Вы можете создавать в одном бюджете несколько подбюджетов, например, месчяца года для скемейного бюджета"}
                        />
                    </div>
                    <div className={styles.budgetCardContainer}>
                        <BudgetCard
                            handler={() => navigate('/onboarding/planning-mode')}
                            title={"Without sub budget"}
                            description={"Простой бюджет, где не будет ничего лишнего, только ваш бюджет.  "}
                        />
                    </div>

                </div>


            </main>
        </section>
    );
};

export default OnboardingBudgetType;