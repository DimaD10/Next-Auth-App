"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import logo from "@/public/img/logo.svg";
import navData from "./navigation.data.json";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton, useAuth } from "@clerk/nextjs";

const LOGO_TEXT = "Auth App"

export function Header() {
    const { userId } = useAuth();

    return (
        <div className={clsx(styles.header, "header")}>
            <div className={clsx(styles.container, "container")}>
                <div 
                    className={clsx(styles.wrapper, userId ? "" : styles.twoColumns)}
                >
                    <Logo />

                    <Navigation />

                    <div className={styles.userActions}>
                        {userId && (
                            <span className={styles.authLink}>
                                <SignOutButton>
                                    log out
                                </SignOutButton>
                            </span>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

function Navigation() {
    const data = navData.points;

    const pathname = usePathname();

    return (
        <div className={styles.navigation}>
            {
                data.map((el, index) => 
                    <Link 
                        href={el.route} 
                        key={el.routeName} 
                        className={clsx(
                            (el.route === pathname) ? styles.active : ""
                        )}
                    >
                        {el.routeName}
                    </Link>
                )
            }
        </div>
    );
}

const Logo = () => {
    return (
        <Link href="/" className={styles.logo}>
            <Image src={logo} width={52} height={52} alt="" />
            <span>
                {LOGO_TEXT}
            </span>
        </Link>
    );
}


