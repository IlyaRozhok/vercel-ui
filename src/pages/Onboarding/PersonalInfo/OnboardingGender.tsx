import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import OnboardingButton from "../../../components/OnboardingButton/OnboardingButton";
import {setOnboardingGender} from "../../../store/onboardingSlice/onboardingSlice";
import {Gender} from "../../../store/onboardingSlice/types";

const KeyFeatures = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {gender} = useAppSelector((state) => state.onboarding.userData);
    const {userData} = useAppSelector((state) => state.onboarding);

    return (
        <section className={styles.oneStep}>
            <aside className={styles.onboardingProgressWrapper}>
                <div className={styles.onboardingProgressTitle}>Настройки вашего кабинета</div>
                <div className={styles.onboardingProgressDescr}>
                    Позаботьтесь о здоровье своих близких.<br/> Подарите им то, что нельзя купить — здоровье
                </div>
                <div className={styles.progressOnboardingContainer}>
                    <div className={styles.progressOnboardingActive}>Personal info</div>
                    <div className={styles.progressOnboarding}>Key features</div>
                    <div className={styles.progressOnboarding}>Create budget</div>
                    <div className={styles.progressOnboarding}>Personalisation</div>
                </div>
            </aside>
            <main className={styles.mainSection}>
                <h5 className={styles.onboardingMainTitle}>{`Let’s setup your profile`}</h5>
                <div className={styles.gatherUserInfo}>
                    <div className={styles.userOnboardingTitle}>Your Gender</div>
                    <div className={styles.genderWrapper}>
                        <div className={styles.genderButtonWrapper}>
                            <OnboardingButton
                                value={"Male"}
                                handler={() => dispatch(setOnboardingGender(Gender.MALE))}
                                isActive={gender === Gender.MALE}
                            />
                        </div>
                        <div className={styles.genderButtonWrapper}>
                            <OnboardingButton
                                value={"Female"}
                                handler={() => dispatch(setOnboardingGender(Gender.FEMALE))}
                                isActive={gender === Gender.FEMALE}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.nextBtnWrapper}>
                    <OnboardingButton
                        isDisabled={Boolean(!gender) || Boolean(!userData?.name)}
                        value={"Next"}
                        handler={() => navigate('/onboarding/features')}
                    />
                </div>
            </main>
        </section>
    );
};

export default KeyFeatures;