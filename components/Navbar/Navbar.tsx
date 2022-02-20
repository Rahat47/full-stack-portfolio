import styles from './navbar.module.scss';
import Image from 'next/image';
import images from '../../constants/images';
import { navlinks } from '../../constants/navlinks';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {};

const Navbar = (props: Props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <Image
                    src={images.logo}
                    alt='logo'
                    className={styles.navbar_logo_image}
                />
            </div>

            <ul className={styles.navbar_links}>
                {navlinks.map(item => (
                    <li
                        key={`link - ${item.id}`}
                        className={`app__flex p_text`}
                    >
                        <div />
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>

            <div className={styles.navbar_menu}>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                <AnimatePresence exitBeforeEnter>
                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            exit={{ x: '100%' }}
                        >
                            <HiX onClick={() => setToggle(false)} />

                            <ul>
                                {navlinks.map(item => (
                                    <li key={item.id}>
                                        <a
                                            onClick={() => setToggle(false)}
                                            href={item.link}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
