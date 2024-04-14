import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Grid.module.scss';

interface Props {
    isRelative?: boolean;
    overflow?: 'left' | 'right';
}

export const Grid: FC<PropsWithChildren<Props>> = ({
    children,
    isRelative,
    overflow,
}) => (
    <div
        className={classNames(
            styles.grid,
            isRelative && styles.isRelative,
            overflow === 'left' && styles.overflowLeft,
            overflow === 'right' && styles.overflowRight,
        )}
    >
        {children}
    </div>
);
