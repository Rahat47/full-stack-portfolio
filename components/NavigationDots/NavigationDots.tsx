import React from 'react';
import { navlinks } from '../../constants/navlinks';
import styles from './navigation.module.scss';

type Props = {
    active: number;
};

const NavigationDots = ({ active }: Props) => {
    return (
        <div className={styles.navigation}>
            {navlinks.map(item => (
                <a
                    key={item.id}
                    href={item.link}
                    className={styles.navigation_dot}
                    style={
                        active === item.id ? { backgroundColor: '#313bac' } : {}
                    }
                />
            ))}
        </div>
    );
};

export default NavigationDots;
