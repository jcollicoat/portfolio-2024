import Link from 'next/link';
import { FC } from 'react';
import { PageContent } from '@cms/types/sections';
import { Grid } from '@components/Grid/Grid';
import { LottieWrapper } from '@components/LottieWrapper/LottieWrapper';
import collicoat from '@lotties/collicoat.json';
import joseph from '@lotties/joseph.json';
import styles from './HeroHome.module.scss';

interface Props extends PageContent {
    _type: 'hero_home';
    heading: string;
    intro: string;
    cta: string;
}

export const HeroHome: FC<Props> = ({ heading, intro, cta }) => {
    return (
        <section className={styles.section}>
            <Grid>
                <div className={styles.joseph}>
                    <LottieWrapper lottie={joseph} />
                </div>
                <div className={styles.collicoat}>
                    <LottieWrapper lottie={collicoat} />
                </div>
                <div className={styles.intro}>
                    <h1>{heading}</h1>
                    <p>{intro}</p>
                    <Link href="#projects" className={styles.cta}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.icon}
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                        {cta}
                    </Link>
                </div>
            </Grid>
        </section>
    );
};
