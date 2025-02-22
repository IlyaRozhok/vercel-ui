import React from 'react';
import styles from "../../pages/Onboarding/styles.module.scss";

interface IOnboardingInputProps {
    value: string;
    handler: any;
    placeholder?: string
}

const OnboardingInput: React.FC<IOnboardingInputProps> = ({value, handler, placeholder}) => {
    return (
        <input
            value={value}
            onChange={(e) => handler(e)}
            placeholder={placeholder}
            className={styles.input}
            type="text"
        />
    );
};

export default OnboardingInput;