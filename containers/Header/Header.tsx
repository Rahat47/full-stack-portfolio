import styles from './header.module.scss';
import { motion, Variants } from 'framer-motion';

import images from '../../constants/images';
import Image from 'next/image';

const scaleVariants: Variants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const floatingImages = [images.flutter, images.redux, images.sass];

const Header = () => {
    return (
        <header id='home' className={`${styles.header} app__flex`}>
            <motion.div
                whileInView={{
                    x: [-100, 0],
                    opacity: [0, 1],
                }}
                transition={{ duration: 0.5 }}
                className={styles.header__info}
            >
                <div className={styles.header__badge}>
                    <div className={`${styles.header__badge__cmp} app__flex`}>
                        <span>👋</span>
                        <div
                            style={{
                                marginLeft: 20,
                            }}
                        >
                            <p className='p_text'>Hello, I am</p>
                            <h1 className='head_text'>Michael</h1>
                        </div>
                    </div>

                    <div
                        className={`${styles.header__badge_tag_cmp} app__flex`}
                    >
                        <p className='p_text'>Web Developer</p>
                        <p className='p_text'>Freelancer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className={styles.header__img}
            >
                <div className={styles.header__img_profile}>
                    <Image src={images.profile} alt='profile_bg' />
                </div>
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className={styles.header__img_overlay}
                >
                    <Image src={images.circle} alt='profile_circle' />
                </motion.div>
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={'whileInView'}
                className={styles.header__circles}
            >
                {floatingImages.map((img, index) => (
                    <div
                        key={index}
                        className={`app__flex ${styles.circle_cmp}`}
                    >
                        <Image src={img} alt='circle' />
                    </div>
                ))}
            </motion.div>
        </header>
    );
};

export default Header;
