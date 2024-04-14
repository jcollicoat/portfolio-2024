'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC, useCallback, useState } from 'react';
import { Grid } from '@components/Grid/Grid';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <Grid>
                <Link href="/">
                    <svg
                        className={styles.logo}
                        height="100%"
                        width="100%"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M97.87,0H48.93V9.48H90.4V31.07A21.31,21.31,0,0,1,84,46.33a22.07,22.07,0,0,1-30.93,0l-1.62-1.39A31.83,31.83,0,0,0,9.21,47a30.81,30.81,0,0,0,0,43.94,31.81,31.81,0,0,0,44.52,0l1.51-1.49-1.51-1.49L50,84.21l-1.51-1.49-1.51,1.49a22.11,22.11,0,0,1-30.94,0,21.42,21.42,0,0,1,0-30.53,22.11,22.11,0,0,1,30.94,0l1.61,1.39a31.75,31.75,0,0,0,42.23-2,30.66,30.66,0,0,0,9.22-22V0Z" />
                    </svg>
                </Link>
                <button onClick={toggleMenu}>
                    <svg
                        fill="none"
                        height="100%"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                    >
                        {isMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
                <nav className={classNames(isMenuOpen && styles.menuIsOpen)}>
                    <div className={styles.wrapper}>
                        <Link href="#projects-list">Code</Link>
                    </div>
                    <div className={styles.wrapper}>
                        <Link href="#projects-list">Blog</Link>
                    </div>
                    <div className={styles.wrapper}>
                        <Link href="#projects-list">Design</Link>
                    </div>
                    <div className={styles.wrapper}>
                        <Link href="#projects-list">Contact</Link>
                    </div>
                </nav>
            </Grid>
        </header>
    );
};
