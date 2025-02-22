import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.scss";
import googleLoginIcon from "../../assets/img/icon_login_google.svg"
import {useAuth0} from "@auth0/auth0-react";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {downloadFile} from "../../store/onboardingSlice/onboardingSlice";

const Welcome = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated, isLoading} = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/onboarding/name');
        }
    }, [isAuthenticated]);

    const downloadHandler = (fileName: string) => {
        dispatch(downloadFile(fileName))
    }
    return (
        <div className={styles.container}>
            {!isAuthenticated && !isLoading ?
                <div className={styles.loginWindow}>
                    <h1 className={styles.loginTitle}>
                        One account for the all money count
                    </h1>
                    <div role="button" className={styles.loginBtn}>
                        <div>
                            <img src={googleLoginIcon} alt={"google-icon"}/>
                        </div>
                        <button onClick={() => loginWithRedirect()} className={styles.loginGoogleBtnText}>
                            Continue with Google
                        </button>
                    </div>
                    <div className={styles.loginTrouble}>Trouble with login?</div>
                </div>
                :
                <div>

                    <h2>Loading...</h2>
                </div>
            }
        </div>

    );
};

export default Welcome;