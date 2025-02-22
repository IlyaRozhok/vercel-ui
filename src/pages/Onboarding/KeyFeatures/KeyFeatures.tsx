import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.scss';
import Slider from "react-slick";
import sliderImage from "../../../assets/img/feature_slider_item_transparent.png";
import OnboardingButton from "../../../components/OnboardingButton/OnboardingButton";

const KeyFeatures = () => {
    const [isLastSlide, setIsLastSlide] = useState(false);
    const navigate = useNavigate();

    const sliderSettings = {
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        afterChange: (currentSlide) => {
            if (currentSlide === 4 - 1) {
                setIsLastSlide(true);
            } else {
                setIsLastSlide(false);
            }
        },
    };

    return (
        <section className={styles.oneStep}>
            <aside className={styles.onboardingProgressWrapper}>
                <div className={styles.onboardingProgressTitle}>Настройки вашего кабинета</div>
                <div className={styles.onboardingProgressDescr}>
                    Позаботьтесь о здоровье своих близких.<br/> Подарите им то, что нельзя купить — здоровье
                </div>
                <div className={styles.progressOnboardingContainer}>
                    <div className={styles.progressOnboardingResolved}>Personal info</div>
                    <div className={styles.progressOnboardingActive}>Key features</div>
                    <div className={styles.progressOnboarding}>Create budget</div>
                    <div className={styles.progressOnboarding}>Personalisation</div>
                </div>
            </aside>
            <main className={styles.keyFeaturesSection}>
                <div className={styles.gatherUserInfo}>

                    <div className={styles.sliderWrapper}>
                        <Slider {...sliderSettings}>
                            <div>
                                <div className={styles.sliderWrapperImg}>
                                    <img src={sliderImage} alt="slider-image"/>
                                </div>
                                <h3 className={styles.userOnboardingTitle}>Multiply your crypto investment</h3>
                                <h5>Opt for Crypterium high-yield short-term deposits and earn more on your savings than
                                    you
                                    would with average rates on the market.</h5>
                            </div>
                            <div>
                                <div className={styles.sliderWrapperImg}>
                                    <img src={sliderImage} alt="slider-image"/>
                                </div>
                                <h3 className={styles.userOnboardingTitle}>Investment multiply your crypto
                                    investment</h3>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aspernatur
                                    consectetur cum deleniti, doloremque dolores eos facilis inventore minus neque nihil
                                    nostrum tempore temporibus ullam unde voluptas voluptatem voluptatum?</h5>
                            </div>
                            <div>
                                <div className={styles.sliderWrapperImg}>
                                    <img src={sliderImage} alt="slider-image"/>
                                </div>
                                <h3 className={styles.userOnboardingTitle}>Crypto your investment crypto
                                    investment</h3>
                                <h5>Deleniti dolores ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam
                                    aspernatur
                                    consectetur cum , doloremque dolores eos facilis voluptatum?</h5>
                            </div>
                            <div>
                                <div className={styles.sliderWrapperImg}>
                                    <img src={sliderImage} alt="slider-image"/>
                                </div>
                                <h3 className={styles.userOnboardingTitle}>Invest in crypto
                                    investment</h3>
                                <h5>Aosa dolores doloremque dolor sit amet, doloremque adipisicing elit. Ad aliquam
                                    aspernatu rdolorem quedoloremque
                                    consectetur cum , doloremque dolores eos doloremque voluptatum?</h5>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div>
                    <div className={styles.keyFeaturesNextBtn}>
                    <OnboardingButton
                            value={"Next"}
                            handler={() => navigate('/onboarding/budget-type')}
                            isDisabled={!isLastSlide}
                        />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default KeyFeatures;