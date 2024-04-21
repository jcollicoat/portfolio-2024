import { FC, useMemo } from 'react';
import { HeroHome } from '@components/HeroHome/HeroHome';
import { PageContent } from './types/sections';

interface Props {
    sections?: PageContent[];
}

export const ContentMapper: FC<Props> = ({ sections }) => {
    const Content = useMemo(() => {
        if (!sections) {
            return null;
        }

        return sections.map((section) => {
            switch (section._type) {
                case 'hero_home':
                    return <HeroHome />;
            }
        });
    }, [sections]);

    return <>{Content}</>;
};
