import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles.module.scss";
import {setOnboardingName} from "../../../store/onboardingSlice/onboardingSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import OnboardingInput from "../../../components/OnboardingInput/OnboardingInput";
import OnboardingButton from "../../../components/OnboardingButton/OnboardingButton";

const OnboardingName = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {name} = useAppSelector((state) => state.onboarding.userData);

    const handleNext = () => {
        if (name.length < 2) {
            return alert("Write more than 2 symbols");
        }
        navigate('/onboarding/gender')
    }

    const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        dispatch(setOnboardingName(e.target.value));
    }

    return (
        <section className={styles.oneStep}>
            <aside className={styles.onboardingProgressWrapper}>
                <div className={styles.onboardingProgressTitle}>Настройки вашего кабинета</div>
                <div className={styles.onboardingProgressDescr}>
                    Позаботьтесь о здоровье своих близких.<br /> Подарите им то, что нельзя купить — здоровье
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
                    <div className={styles.userOnboardingTitle}>Your name</div>
                    <OnboardingInput
                    placeholder="Like Maria"
                    value={name}
                    handler={userNameHandler}
                    />

                </div>
                <div className={styles.nextBtnWrapper}>
                    <OnboardingButton
                        isDisabled={Boolean(!name?.length)}
                        value={"Next"}
                        handler={handleNext}
                    />
                </div>
            </main>
        </section>
);
};

export default OnboardingName;