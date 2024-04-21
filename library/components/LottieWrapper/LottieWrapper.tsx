'use client';

import Lottie from 'lottie-react';
import { FC } from 'react';

interface Props {
    lottie: unknown;
}

export const LottieWrapper: FC<Props> = ({ lottie }) => {
    return <Lottie animationData={lottie} />;
};
