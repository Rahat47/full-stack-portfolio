import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './about.module.scss';
import { Abouts } from '../../models/models';
import AppWrap from '../../wrapper/AppWrap';

interface Props {
    abouts: Abouts[];
}

const About: FC<Props> = ({ abouts }) => {
    return (
        <>
            <h2 className='head_text'>
                I Know that&nbsp;
                <span>Good Apps </span>
                <br />
                means <span>Good Business</span>
            </h2>

            <div className={styles.profiles}>
                {abouts.map(about => (
                    <motion.div
                        key={about.id}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className={styles.profiles__item}
                    >
                        <div className={styles.profiles__item_image}>
                            <Image
                                src={about.imageUrl.url}
                                alt={about.title}
                                placeholder='blur'
                                width={about.imageUrl.width || 1200}
                                height={about.imageUrl.height || 900}
                                blurDataURL={about.imageUrl.url}
                                objectFit='cover'
                            />
                        </div>

                        <h2 className='bold_text' style={{ marginTop: 20 }}>
                            {about.title}
                        </h2>

                        <p className='p_text'>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap<Props>(About, 2, 'about');
