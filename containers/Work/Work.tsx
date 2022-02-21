import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion, TargetAndTransition } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import styles from './work.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Works } from '../../models/models';

type Props = {
    works: Works[];
};

const filters = [
    'UI/UX',
    'Web Development',
    'Mobile Development',
    'Game Development',
    'All',
];

const Work = ({ works }: Props) => {
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const [animateCard, setAnimateCard] = useState<TargetAndTransition>({
        y: 0,
        opacity: 1,
    });
    const [filteredWorks, setFilteredWorks] = useState<Works[]>(works);

    const handleWorkFilter = (filter: string) => {
        console.log(filter);
    };

    return (
        <>
            <h2 className='head_text'>
                My creative <span>Portfolio</span>
            </h2>

            <div className={styles.work_filter}>
                {filters.map((filter, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(filter)}
                        className={`${
                            styles.work_filter_item
                        } app__flex p_text ${
                            activeFilter === filter
                                ? styles.work_filter_item__active
                                : ''
                        }`}
                    >
                        {filter}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className={styles.work_portfolio}
            >
                {filteredWorks.map(item => (
                    <div
                        key={item.id}
                        className={`${styles.work_portfolio_item} app__flex`}
                    >
                        <div
                            className={`${styles.work_portfolio_item_img} app__flex`}
                        >
                            <Image
                                src={item.imageUrl.url}
                                width={item.imageUrl.width || 200}
                                height={item.imageUrl.height || 200}
                                alt={item.title}
                                objectFit='cover'
                                placeholder='blur'
                                blurDataURL={item.imageUrl.url}
                            />

                            <motion.div
                                whileHover={{
                                    opacity: [0, 1],
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: 'easeInOut',
                                    staggerChildren: 0.5,
                                }}
                                className={`${styles.work_portfolio_item_img_hover} app__flex`}
                            >
                                <a
                                    href={item.projectLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: [1, 0.9],
                                        }}
                                        whileInView={{
                                            scale: [0, 1],
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className='app__flex'
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                                <a
                                    href={item.codeLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: [1, 0.9],
                                        }}
                                        whileInView={{
                                            scale: [0, 1],
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className='app__flex'
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Work;
