import { FC } from 'react';
import { Grid } from '@components/Grid/Grid';
import { LottieWrapper } from '@components/LottieWrapper/LottieWrapper';
import collicoat from '@lotties/collicoat.json';
import joseph from '@lotties/joseph.json';
import styles from './HeroHome.module.scss';

export const HeroHome: FC = () => {
    return (
        <section className={styles.section}>
            <Grid>
                <div className={styles.joseph}>
                    <LottieWrapper lottie={joseph} />
                </div>
                <div className={styles.collicoat}>
                    <LottieWrapper lottie={collicoat} />
                </div>
            </Grid>
        </section>
    );
};
