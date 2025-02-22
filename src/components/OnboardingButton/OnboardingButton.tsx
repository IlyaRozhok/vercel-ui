import React from 'react';
import styles from "./styles.module.scss";

interface OnboardingButtonProps {
    value: string;
    handler: () => void;
    isDisabled?: boolean;
    isActive?: boolean;
}
const OnboardingButton: React.FC<OnboardingButtonProps> = ({handler, value, isDisabled, isActive}) => {
    return (
            <button
                className={`${styles.nextBtn} ${isActive ? styles.nextBtnActive : ''}`}
                disabled={isDisabled}
                onClick={handler}
            >
                {value}
            </button>
    );
};

export default OnboardingButton;