'use client';
import React from 'react';
import styles from "./styles.module.scss";
import googleLoginIcon from "../../../public/ic_login_google.svg"
import Image from 'next/image'
import Link from "next/link";
import {useUser} from "@auth0/nextjs-auth0/client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
    const { user } = useUser();
    const router = useRouter();


    useEffect(() => {
        if (user) {
            router.push('/onboarding/onestep');
        }
    }, [user, router]);
    return (
        <div className={styles.container}>
            {!user &&
                <div className={styles.loginWindow}>
                    <h1 className={styles.loginTitle}>
                        One account for the all money count
                    </h1>
                    <div role="button" className={styles.loginBtn}>
                        <div>
                            <Image
                                src={googleLoginIcon}
                                width={20}
                                height={20}
                                alt="Picture of the author"
                            />
                        </div>
                        <Link href={"/api/auth/login"} className={styles.loginGoogleBtnText}>Continue with Google</Link>
                    </div>
                    <div className={styles.loginTrouble}>Trouble with login?</div>

                </div>
            }
            {/*{user &&*/}
            {/*    <>*/}
            {/*        <div className={styles.loggedUserWrapper}>*/}
            {/*            <div>Hello, {user.name}</div>*/}
            {/*            <a className={styles.logoutBtn} href="/api/auth/logout">Logout</a>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*}*/}
</div>
)
    ;
};

export default Home;