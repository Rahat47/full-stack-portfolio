import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion, TargetAndTransition } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import styles from './work.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Works } from '../../models/models';
import MotionWrap from '../../wrapper/MotionWrap';

type Props = {
    works: Works[];
};

const filters = ['All', 'UI/UX', 'Frontend', 'Backend', 'Fullstack'];

const Work = ({ works }: Props) => {
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const [animateCard, setAnimateCard] = useState<TargetAndTransition>({
        y: 0,
        opacity: 1,
    });
    const [filteredWorks, setFilteredWorks] = useState<Works[]>(works);

    const handleWorkFilter = (filter: string) => {
        setActiveFilter(filter);
        setAnimateCard({
            y: 100,
            opacity: 0,
        });

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });

            if (filter === 'All') {
                setFilteredWorks(works);
            } else {
                setFilteredWorks(
                    works.filter(work => work.tags.includes(filter))
                );
            }
        }, 500);
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
                {!filteredWorks.length && (
                    <div className={styles.work_portfolio_empty}>
                        <p>No works found</p>
                    </div>
                )}

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
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
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
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        transition={{ duration: 0.25 }}
                                        className='app__flex'
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div
                            className={`${styles.work_portfolio_item_info} app__flex`}
                        >
                            <h4 className='bold_text'>{item.title}</h4>
                            <p className='p_text' style={{ marginTop: 10 }}>
                                {item.description.length > 100
                                    ? item.description.substring(0, 100) + '...'
                                    : item.description}
                            </p>

                            <div
                                className={`${styles.work_portfolio_item_info_tags} app__flex`}
                            >
                                <p className='p_text'>{item.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, styles.work),
    3,
    'work',
    'app__primarybg'
);
