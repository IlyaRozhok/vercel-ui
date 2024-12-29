'use client';
import React from 'react';
import styles from "../styles.module.scss";
import {useUser} from "@auth0/nextjs-auth0/client";

const Page = () => {
    const { user } = useUser();

    const [value, setValue] = React.useState('');
    return (
        <section className={styles.oneStep}>
            <aside className={styles.onboardingProgressWrapper}>
                <div className={styles.onboardingProgressTitle}>
                    Настройки вашего кабинета
                </div>
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
                <h5 className={styles.onboardingMainTitle}>{`Let’s setup your profile, ${user?.name}`}</h5>
                <div className={styles.gatherUserInfo}>
                    <div className={styles.userOnboardingTitle}>Your name</div>
                    {/*<button className={styles.input}>Next</button>*/}
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={'Like Maria'}
                        className={styles.input}
                        type="text"
                    />
                </div>

                <button
                    className={styles.nextBtn}
                    disabled={!value}
                    onClick={() => {console.log('clicked!')}}
                >
                    Next
                </button>

                <a className={styles.nextBtn} href="/api/auth/logout">Logout</a>

            </main>
        </section>
    );
};

export default Page;