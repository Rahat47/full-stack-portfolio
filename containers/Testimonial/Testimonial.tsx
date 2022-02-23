import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';

import styles from './testimonial.module.scss';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import type { Brands, Testimonials } from '../../models/models';

type Props = {
    brands: Brands[];
    testimonials: Testimonials[];
};

const Testimonial = ({ brands, testimonials }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const current = testimonials[currentIndex];

    const handleClick = (index: number) => {
        // if we are already at the end, go back to the beginning
        if (index === testimonials.length) {
            setCurrentIndex(0);
        }
        // if we are already at the beginning, go to the end
        else if (index === -1) {
            setCurrentIndex(testimonials.length - 1);
        }

        // if we are somewhere in the middle, go to that index
        else {
            setCurrentIndex(index);
        }
    };

    return (
        <>
            <h2 className='head_text'>
                Testimonials <span>&</span> Brands
            </h2>

            {testimonials.length && (
                <>
                    <div className={`${styles.testimonial_item} app__flex`}>
                        <Image
                            src={current.imageUrl.url}
                            alt={current.name}
                            width={current.imageUrl.width}
                            height={current.imageUrl.height}
                            objectFit='cover'
                            placeholder='blur'
                            blurDataURL={current.imageUrl.url}
                        />

                        <div className={styles.testimonial_content}>
                            <p className='p_text'>{current.feedback}</p>
                            <div>
                                <h4 className='bold_text'>{current.name}</h4>
                                <h5 className='p_text'>{current.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.testimonial_btns} app__flex`}>
                        <div
                            className='app__flex'
                            onClick={() => handleClick(currentIndex - 1)}
                        >
                            <HiChevronLeft
                                className={styles.testimonial_icon}
                            />
                        </div>

                        <div
                            className='app__flex'
                            onClick={() => handleClick(currentIndex + 1)}
                        >
                            <HiChevronRight
                                className={styles.testimonial_icon}
                            />
                        </div>
                    </div>
                </>
            )}

            <div className={`app__flex ${styles.brands}`}>
                {brands.map(brand => (
                    <motion.div
                        key={brand.id}
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                    >
                        <Image
                            src={brand.imageUrl.url}
                            alt={brand.title}
                            width={brand.imageUrl.width}
                            height={brand.imageUrl.height}
                            objectFit='cover'
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap<Props>(
    MotionWrap<Props>(Testimonial, styles.testimonial),
    5,
    'testimonials',
    'app__primarybg'
);
